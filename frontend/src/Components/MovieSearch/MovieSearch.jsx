import { useDispatch } from 'react-redux';
import { changeFilter } from '../../Redux/filterSlice.js';
import css from './MovieSearch.module.css';

const MovieSearch = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input type="text" placeholder='Search movies...' onChange={handleSearch} className={css.searchInput} />
    );
};

export default MovieSearch;
