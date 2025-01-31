import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../Redux/moviesOps';

const DeleteMovieButton = ({ movieId, movieTitle }) => {
    const dispatch = useDispatch();
    
    const handleDelete = (e) => {
        e.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete "${movieTitle}"?`)) {
            dispatch(deleteMovie(movieId)); 
        }

    };
    return (
        <button type='button' onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Delete</button>
    );
};

export default DeleteMovieButton;