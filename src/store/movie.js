import tmdb from "../apis/tmdb"
import create from "zustand"
import { persist } from "zustand/middleware"
import produce from "immer";

const useMovieStore = create(persist(
    (set, get) => ({
        movies: [],
        movie: {},
        similarMovies: [],
        genreCurrentIndex: [0, 5],
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
                            if (respMovie.status === 200) {
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
            } finally {
                set(produce((state) => {
                    state.moviesReady = true;
                }));
            }
        },
        fetchMovieById: async (id) => {
            set(produce((state) => {
                state.moviesReady = false;
            }));
            try {
                // fetch movie
                const resp = await tmdb.get('/movie/' + id);
                const data = await resp.json();
                set(produce((state) => {
                    state.movie = data;
                }));
            } catch (e) {
                console.log(e);
                throw new Error(e.message)
            } finally {
                set(produce((state) => {
                    state.moviesReady = true;
                }));
            }
        },
        fetchSimilarMovie: async (id) => {
            try {
                // fetch movie
                const resp = await tmdb.get('/movie/' + id + '/similar');
                const data = await resp.json();
                set(produce((state) => {
                    state.similarMovies = data;
                }));
            } catch (e) {
                console.log(e);
                throw new Error(e.message)
            }
        }
    })
))

export default useMovieStore;