import React, { useEffect } from 'react'
import useMovieStore from '../store/movie';

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);

  useEffect(() => {
    fetchMoviesGenre();
  },[]);

  return (
    <>
    {moviesReady ? <>OK</>: <>Loading...</>}
    </>
  )
}
