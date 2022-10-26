import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import useMovieStore from '../store/movie';
import '../App.css';
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);
  const queryParams = new URLSearchParams(window.location.search);
  const setSearchKeywordStore = useMovieStore(state => state.setSearchKeyword);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchKeywordStore(queryParams.get('search'))
    fetchMoviesGenre({ searchKeyword: queryParams.get('search') });
  }, [searchParams]);

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
