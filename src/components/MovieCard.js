import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const styles = {
  card: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export default function MovieCard({ movie }) {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item sx={{ mr: 1, flexGrow: 1 }}>
        <Card sx={{ mx: 2, height: 300, width: 200, cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="170"
            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {movie.original_title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
          </CardContent>
          {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
      </Grid>
    </Grid>
  );
}
