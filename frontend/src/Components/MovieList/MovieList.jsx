import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from "../../Redux/moviesOps.js";
import { selectFilteredMovies, selectLoading, selectError } from '../../Redux/movieSlice.js';
import MovieCard from '../MovieCard/MovieCard';

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

    if (isLoading) return <p>Loading movies...</p>
    if (error) return <p>Error: {error}</p>
    if (movies.length === 0) return <p>No movies found</p>
    
    return (
        <div>
            {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
            ))}
        </div>
    )
};

export default MovieList;