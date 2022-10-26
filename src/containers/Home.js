import React, { useEffect } from 'react'
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import useMovieStore from '../store/movie';
import '../App.css';
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);
  const setSearchKeywordStore = useMovieStore(state => state.setSearchKeyword);
  const [searchParams,] = useSearchParams();

  useEffect(() => {
    setSearchKeywordStore(searchParams.get('search'))
    fetchMoviesGenre({ searchKeyword: searchParams.get('search') });
  }, [searchParams, fetchMoviesGenre, setSearchKeywordStore]);

  const movieList = moviesReady ?
    (movies === [] ?
      <>Error</>
      :
      movies.map(movie => {
        return movie.movies ?
          (<MovieList movies={movie.movies} key={movie.id} genre={movie.name}></MovieList>) : <></>
      })
    )
    :
    <>Loading...</>;

  return (
    <>
      <Navbar />
      <div className='App' tyle="margin:auto">
        {movieList}
      </div>
    </>
  )
}
