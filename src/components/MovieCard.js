import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HtmlTooltip from "./HtmlTooltip";
import { Chip, Divider, Rating, Grid } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

const styles = {
  card: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const toDetailPage = (id) => {
    navigate(`/movie/${id}`);
  }
  return (
    <Grid container spacing={2} alignItems="stretch" className="card" onClick={() => toDetailPage(movie.id)}>
      <Grid item sx={{ mr: 1, flexGrow: 1 }}>
        <Card sx={{ mx: 2, height: 300, width: 200, cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="170"
            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="green iguana"
          />
          <CardContent>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Divider>
                    {" "}
                    <Chip label="Overview" sx={{ color: 'white' }} />{" "}
                  </Divider>
                  <Typography color="inherit">{movie.overview}</Typography>
                  <Divider>
                    {" "}
                    <Chip label="Rating" sx={{ color: 'white' }} />{" "}
                  </Divider>
                  <Rating
                    name="read-only"
                    value={movie.vote_average / 2}
                    precision={0.1}
                    readOnly
                  />
                  <br />
                  <Typography color="inherit">
                    from {movie.vote_count} votes
                  </Typography>
                  <Divider>
                    {" "}
                    <Chip label="Detailed" sx={{ color: 'white' }} />{" "}
                  </Divider>
                  <Typography color="inherit">
                    <CalendarMonthIcon /> {movie.release_date}
                  </Typography>
                  <Typography color="inherit">
                    <PreviewIcon /> {movie.popularity}
                  </Typography>
                </React.Fragment>
              }
            >
              <Typography gutterBottom variant="h5" component="div">
                {movie.original_title}
              </Typography>

              {/* <Typography variant="body2" color="text.secondary">
                {movie.overview.length > 75
                  ? movie.overview.substring(0, 75) + "..."
                  : movie.overview}
              </Typography> */}
            </HtmlTooltip>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
