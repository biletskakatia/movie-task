
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Movie Manager</h1>
            <p>Save movie list here</p>
            <Link to="/movies">Go to Movies List</Link>
        </div>
    );
};
export default HomePage;