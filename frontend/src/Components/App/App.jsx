
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../../Pages/HomePage/HomePage.jsx";
import MovielistPage from "../../Pages/MovieListPage/MovielistPage.jsx";
import MovieDetailsPage from "../../Pages/MovieDetailsPage/MovieDetailsPage.jsx";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MovielistPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App
