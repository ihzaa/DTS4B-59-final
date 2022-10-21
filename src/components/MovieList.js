import { Typography } from '@mui/material';
import MovieCard from './MovieCard';

export default function MovieList({ movies, genre }) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {genre}
            </Typography>
            <div className="cards-container">
                {
                    movies != undefined ? movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                        :
                        <Typography variant="h6" gutterBottom >
                            ~ Film tidak tersedia ~
                        </Typography>

                }
            </div>
        </>
    );
}