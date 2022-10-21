import React, { useEffect } from 'react'
import MovieList from '../components/MovieList';
import useMovieStore from '../store/movie';

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);

  console.log(movies);
  useEffect(() => {
    fetchMoviesGenre();
  }, []);

  return (
    <>
      {moviesReady ? <>
        {
          movies.forEach(movie => <MovieList movies={movie} />)
        }
      </> : <>Loading...</>}
    </>
  )
}
