import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import useMovieStore from "../store/movie";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import colors from "../config/colors";
import MovieList from "../components/MovieList";

export default function DetailMovie() {
  const params = useParams();
  const fetchMovieById = useMovieStore((state) => state.fetchMovieById);
  const movie = useMovieStore((state) => state.movie);
  const moviesReady = useMovieStore((state) => state.moviesReady);
  const similarMovies = useMovieStore((state) => state.similarMovies);
  const fetchSimilarMovie = useMovieStore((state) => state.fetchSimilarMovie);

  useEffect(() => {
    fetchMovieById(params.id);
    fetchSimilarMovie(params.id);
  }, [params, fetchMovieById, fetchSimilarMovie]);

  const displayData = moviesReady ? (
    movie !== {} && (
      <Grid item xs={12}>
        <Card>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.original_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography gutterBottom variant="h6" component="div">
              Genres
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Stack direction="row" spacing={1}>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <Chip
                      key={genre.id}
                      label={genre.name}
                      color={colors[Math.floor(Math.random() * 3)]}
                    />
                  ))}
              </Stack>
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography gutterBottom variant="h6" component="div">
              Rating
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating
                name="half-rating-read"
                defaultValue={
                  movie.vote_average && movie.vote_average.toFixed(1)
                }
                precision={0.1}
                max={10}
                readOnly
                sx={{ mr: 1 }}
              />
              ({movie.vote_average && movie.vote_average.toFixed(1)}) from{" "}
              {movie.vote_count} user{movie.vote_count > 1 ? "s" : ""}.
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography gutterBottom variant="h6" component="div">
              Popularity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.popularity}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography gutterBottom variant="h6" component="div">
              Production Company
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Stack direction="row" spacing={1}>
                {movie.production_companies &&
                  movie.production_companies.map((production_company) => (
                    <Chip
                      avatar={
                        <Avatar
                          alt={production_company.name}
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            production_company.logo_path
                          }
                        />
                      }
                      key={production_company.id}
                      label={production_company.name}
                      color={colors[Math.floor(Math.random() * 3)]}
                    />
                  ))}
              </Stack>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  ) : (
    <>Loading...</>
  );

  const displaySimilarMovie = similarMovies.results ? (
    <Grid item xs={12}>
      <MovieList movies={similarMovies.results} genre="Similar Movie" />
    </Grid>
  ) : (
    <>Tidak ada data...</>
  );
  return (
    <>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box>
            <Grid container spacing={2}>
              {displayData}
              {displaySimilarMovie}
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
