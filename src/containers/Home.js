import React, { useEffect } from 'react'
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import useMovieStore from '../store/movie';
import '../App.css';
import { useSearchParams } from "react-router-dom";
import { Grid } from '@mui/material';
import MovieGrid from '../components/MovieGrid';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Home() {
  const fetchMoviesGenre = useMovieStore(state => state.fetchMovies);
  const movies = useMovieStore(state => state.movies);
  const moviesReady = useMovieStore(state => state.moviesReady);
  const setSearchKeywordStore = useMovieStore(state => state.setSearchKeyword);
  const [searchParams,] = useSearchParams();
  const isFetchNextPage = useMovieStore(state => state.isFetchNextPage);

  useEffect(() => {
    setSearchKeywordStore(searchParams.get('search'))
    fetchMoviesGenre({ searchKeyword: searchParams.get('search') });
  }, [searchParams, fetchMoviesGenre, setSearchKeywordStore]);

  useBottomScrollListener(() => {
    fetchMoviesGenre({ searchKeyword: searchParams.get('search') });
  });

  const movieList = moviesReady ?
    (movies === [] ?
      <>Error</>
      :
      (
        movies.length > 1 ?
          movies.map(movie => {
            return movie.movies ?
              (<MovieList movies={movie.movies} key={movie.id} genre={movie.name}></MovieList>) : <></>
          })
          :
          <Grid
            container
            spacing={1}
          >
            {
              movies[0].movies.map(movie => {
                return movie ?
                  (<MovieGrid movie={movie} key={movie.id}></MovieGrid>) : <></>
              })
            }
            {
              isFetchNextPage ? (
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
              )
                :
                <></>
            }
          </Grid>
      )
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
