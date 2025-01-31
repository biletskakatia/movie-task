import MovieList from '../../Components/MovieList/MovieList.jsx';
import AddMovieForm from '../../Components/AddMovieForm/AddMovieForm.jsx';
import MovieSearch from "../../Components/MovieSearch/MovieSearch.jsx";

const MovieListPage = () => {
    return (
        <div>
            <MovieSearch />
            <AddMovieForm />
            <MovieList/>
        </div>
    )
}
export default MovieListPage;