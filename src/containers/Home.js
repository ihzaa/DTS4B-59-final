import React, { useEffect } from 'react'
import MovieList from '../components/MovieList';
import useMovieStore from '../store/movie';

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);

  useEffect(() => {
    fetchMoviesGenre();
  }, []);

  const movieList = moviesReady ?
    movies.map(movie => <MovieList movies={movie.movies} key={movie.id} genre={movie.name}></MovieList>)
    : <>Loading...</>;

  return (
    <div tyle="margin:auto">
      {movieList}
    </div>
  )
}
