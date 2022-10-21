import tmdb from "../apis/tmdb"
import create from "zustand"
import { persist } from "zustand/middleware"
import produce from "immer";

const useMovieStore = create(persist(
    (set, get) => ({
        movies: [],
        genreCurrentIndex: [0, 3],
        moviesReady: false,
        fetchMovies: async () => {
            set(produce((state) => {
                state.moviesReady = false;
            }));
            try {
                // fetch genre
                const respGenre = await tmdb.get('/genre/movie/list');
                const dataGenre = await respGenre.json();
                set(produce((state) => {
                    state.movies = dataGenre.genres;
                }));

                get()
                    .movies
                    .slice(get().genreCurrentIndex[0], get().genreCurrentIndex[1])
                    .forEach(async (genre, key) => {
                        // fetch movies by genre
                        try {
                            const respMovie = await tmdb.get('/discover/movie', { with_genres: genre.id });
                            if (respMovie.code === 200) {
                                const dataMovie = await respMovie.json();
                                set(produce((state) => {
                                    state.movies[key].movies = dataMovie.results;
                                }));
                            }
                        } catch (error) {
                            console.log(error);
                        }

                    })
            } catch (e) {
                console.log(e);
            }
            set(produce((state) => {
                state.moviesReady = true;
            }));
        }
    })
))

export default useMovieStore;