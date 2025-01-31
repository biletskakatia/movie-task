import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from "../../Redux/moviesOps";
import { selectCurrentMovie } from "../../Redux/movieSlice";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectCurrentMovie);
    console.log("Movie from Redux:", movie);

    useEffect(() => {
        dispatch(fetchMovieById(movieId));
    }, [dispatch, movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{movie.data.title}</h1>
            <p>description:{movie.data.description}</p>
            <p>Genre: {movie.data.genre}</p>
            <p>Rating: {movie.data.rating}</p>
            <p>Release Date: {movie.data.releaseDate}</p>
            <p>director: {movie.data.director}</p>
    </div>
);
};

export default MovieDetailsPage;