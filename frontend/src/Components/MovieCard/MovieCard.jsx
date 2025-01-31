import { Link } from 'react-router-dom';
import { useState } from 'react';
import DeleteMovieButton from '../DeleteMovieButton/DeleteMovieButton';
import EditMovieForm from '../EditMovieForm/EditMovieForm';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date); 
};

const MovieCard = ({ movie }) =>{
    const [isEditing, setIsEditing] = useState(false);
    console.log("Movie passed to EditMovieForm:", movie);
    console.log("Editing state:", isEditing); 
    return (
        <div>
            {movie.image && <img src={movie.image} alt={movie.title} />}
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Release Date: {formatDate(movie.releaseDate)}</p>
            <Link to={`/movies/${movie._id}`}>View Details</Link>
            <DeleteMovieButton movieId={movie._id} movieTitle={movie.title} />
            <button 
                style={{ marginLeft: '10px', backgroundColor: 'blue', color: 'white' }} 
                onClick={() => setIsEditing(true)}>
                Edit
            </button>
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