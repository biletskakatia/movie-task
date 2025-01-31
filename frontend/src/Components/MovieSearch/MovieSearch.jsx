import { useDispatch } from 'react-redux';
import { changeFilter } from '../../Redux/filterSlice.js';

const MovieSearch = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input type="text" placeholder='Search movies...' onChange={handleSearch} />
    );
};

export default MovieSearch;
