import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../Redux/moviesOps';
import css from "./DeleteMovieButton.module.css";
const DeleteMovieButton = ({ movieId, movieTitle }) => {
    const dispatch = useDispatch();
    
    const handleDelete = (e) => {
        e.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete "${movieTitle}"?`)) {
            dispatch(deleteMovie(movieId)); 
        }

    };
    return (
        <button type='button' onClick={handleDelete} className={css.deleteButton}>Delete</button>
    );
};

export default DeleteMovieButton;