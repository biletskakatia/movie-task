
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to the Movie Manager</h1>
            <p className={css.subtitle}>Organize your movie list effortlessly</p>
            <Link to="/movies" className={css.link}>Go to Movies List</Link>
        </div>
    );
};
export default HomePage;