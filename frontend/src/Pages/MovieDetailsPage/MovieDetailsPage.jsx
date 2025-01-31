import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from "../../Redux/moviesOps";
import { selectCurrentMovie } from "../../Redux/movieSlice";
import { Link } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectCurrentMovie);
    console.log("Movie from Redux:", movie);

    const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        dispatch(fetchMovieById(movieId));
    }, [dispatch, movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className={css.container} >
            <h1 className={css.title}>{movie.data.title}</h1>
            <p className={css.detail}> <span className={css.keyword}>Description: </span> {movie.data.description}</p>
            <p className={css.detail}> <span className={css.keyword}>Genre: </span> {movie.data.genre}</p>
            <p className={css.detail}> <span className={css.keyword}>Rating: </span> {movie.data.rating}</p>
            <p className={css.detail}> <span className={css.keyword}>Release Date: </span> {formatDate(movie.data.releaseDate)}</p>
            <p className={css.detail}> <span className={css.keyword}>Director: </span> {movie.data.director}</p>
            <p className={css.detail}> <span className={css.keyword}>Actors: </span>{movie.data.actors}</p>
            <Link to ="/movies" className={css.link} >Go back</Link>
        </div>
        
);
};

export default MovieDetailsPage;