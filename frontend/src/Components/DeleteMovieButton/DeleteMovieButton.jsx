import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../Redux/moviesOps';

const DeleteMovieButton = ({ movieId }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteMovie(movieId));
    };
    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteMovieButton;