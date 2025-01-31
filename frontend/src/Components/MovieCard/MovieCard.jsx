import { Link } from 'react-router-dom';
import { useState } from 'react';
import DeleteMovieButton from '../DeleteMovieButton/DeleteMovieButton';
import EditMovieForm from '../EditMovieForm/EditMovieForm';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import css from './MovieCard.module.css';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date); 
};

const MovieCard = ({ movie }) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [isFavorite, setIsFavorite] = useState(movie.isFavorite || false);

    const handleToggleFavorite = (movieId, newFavoriteState) => {
        if (movie._id === movieId) {
            setIsFavorite(newFavoriteState);
        }
    };

    return (
        <div className={css.card}>
            {movie.image && <img src={movie.image} alt={movie.title} className={css.image} />}
            <h3 className={css.title}>{movie.title} {isFavorite && <span className={css.favorite}>★</span>}</h3>
            <FavoriteButton movie={{ ...movie, isFavorite }} onToggleFavorite={handleToggleFavorite} />
            <p className={css.details}>Genre: {movie.genre}</p>
            <p className={css.details}>Rating: {movie.rating}</p>
            <p className={css.details}>Release Date: {formatDate(movie.releaseDate)}</p>
            <div className={css.actions}>
                <Link to={`/movies/${movie._id}`} className={css.butDetail}>View Details</Link>
                <DeleteMovieButton movieId={movie._id} movieTitle={movie.title} />
                <button className={css.butEdit} onClick={() => setIsEditing(true)}>Edit</button>
            </div>
            {isEditing  && movie && (
                <div className="modal">
                    <div className="modal-content">
                        <EditMovieForm movie={movie} onClose={() => setIsEditing(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;