import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div>
            <img src={movie.image|| 'https://via.placeholder.com/150'} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <Link to={`/movies/${movie._id}`}>View Details</Link>
        </div>
    );
};

export default MovieCard;