import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from "../../Redux/moviesOps.js";
import { selectFilteredMovies, selectLoading, selectError } from '../../Redux/movieSlice.js';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

const MovieList = () => {
    const dispatch = useDispatch();

    const movies = useSelector(selectFilteredMovies);
    console.log("Movies in MovieList:", movies);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    

    useEffect(() => {
    dispatch(fetchMovies());
    }, [dispatch]);

    if (!Array.isArray(movies)) {
    return <p>No movies found</p>;
    }

    if (isLoading) return <p className={css.loading}>Loading movies...</p>
    if (error) return <p className={css.error}>Error: {error}</p>
    if (movies.length === 0) return <p className={css.message}>No movies found</p>
    
    return (
        <div className={css.container}>
            {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
            ))}
        </div>
    )
};

export default MovieList;