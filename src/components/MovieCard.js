import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HtmlTooltip from './HtmlTooltip';
import { Chip, Divider, Rating, Tooltip } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function MovieCard({ movie }) {
    return (
        <Card className='card'>
            <CardMedia
                component="img"
                height="140"
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="green iguana"
                loading='lazy'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.original_title}
                </Typography>
                <HtmlTooltip
                    title={
                        <React.Fragment >
                            <Divider> <Chip label="Overview" /> </Divider>
                            <Typography color="inherit">{movie.overview}</Typography>
                            <Divider> <Chip label="Rating" /> </Divider>
                            <Rating name="read-only" value={movie.vote_average / 2} precision={0.1} readOnly />
                            <br />
                            <Typography color="inherit">from {movie.vote_count} votes</Typography>
                            <Divider> <Chip label="Detailed" /> </Divider>
                            <Typography color="inherit"><CalendarMonthIcon /> {movie.release_date}</Typography>
                            <Typography color="inherit"><PreviewIcon /> {movie.popularity}</Typography>
                        </React.Fragment>
                    }
                >
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview.length > 75 ? movie.overview.substring(0, 75) + '...' : movie.overview}
                    </Typography>
                </HtmlTooltip>
            </CardContent>
        </Card>
    );
}