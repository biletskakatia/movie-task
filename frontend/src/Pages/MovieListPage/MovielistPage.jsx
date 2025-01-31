import MovieList from '../../Components/MovieList/MovieList.jsx';
import AddMovieForm from '../../Components/AddMovieForm/AddMovieForm.jsx';
import MovieSearch from "../../Components/MovieSearch/MovieSearch.jsx";
import css from "./MovieListPage.module.css";

const MovieListPage = () => {
    return (
        <div className={css.container}>
            <MovieSearch />
            <MovieList />
            <div className={css.formSection}>
                <AddMovieForm />
            </div>
        </div>
    );
};
export default MovieListPage;