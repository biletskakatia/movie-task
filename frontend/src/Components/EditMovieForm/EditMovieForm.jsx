import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../../Redux/moviesOps.js';
import { fetchMovies } from '../../Redux/moviesOps.js';
import styles from './EditMovieForm.module.css'; 

const EditMovieForm = ({ movie, onClose }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(movie.title || '');
    const [genre, setGenre] = useState(movie.genre || '');
    const [rating, setRating] = useState(movie.rating || '');
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate || '');
    const [imageUrl, setImageUrl] = useState(movie.image || '');
    const [error, setError] = useState('');

    const validGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        console.log("Movie object in EditMovieForm:", movie);

        if (!title.trim()) {
            setError('Title is required.');
            return;
        }
        if (!genre.trim() || !validGenres.includes(genre)) {
            setError('Please select a valid genre.');
            return;
        }
        if (!releaseDate) {
            setError('Release date is required.');
            return;
        }

        const updatedMovie = {
            title: title.trim(),
            genre: genre.trim(),
            rating: rating ? Number(rating) : 0,
            releaseDate: new Date(releaseDate).toISOString().split('T')[0],
            image: imageUrl.trim() || undefined,
        };

        try {
        console.log("Updating movie:", updatedMovie);
        if (!movie?._id) {
            console.error("Movie ID is missing or undefined!");
            setError("Movie ID is undefined. Cannot update.");
            return;
        }

        await dispatch(updateMovie({ movieId: movie._id, updatedMovie })).unwrap();
            console.log("Movie updated successfully:", updatedMovie);
        await dispatch(fetchMovies());    
        onClose();
    } catch (error) {
        console.error("Error updating movie:", error);
        setError("Failed to update movie. Try again.");
    }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Edit Movie</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                    <select 
                        className={styles.input} 
                        value={genre} 
                        onChange={(e) => setGenre(e.target.value)} 
                        required
                    >
                        <option value="">Select Genre</option>
                        {validGenres.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                    <input 
                        className={styles.input} 
                        type="number" 
                        placeholder="Rating (0-10)" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        min="0" 
                        max="10" 
                        required 
                    />
                    <input 
                        className={styles.input} 
                        type="date" 
                        value={releaseDate.split('T')[0]} 
                        onChange={(e) => setReleaseDate(e.target.value)} 
                        required 
                    />
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Image URL (optional)" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                    />
                    <button 
                        className={`${styles.button} ${styles.saveButton}`} 
                        type="submit"
                    >
                        Save Changes
                    </button>
                    <button 
                        className={`${styles.button} ${styles.cancelButton}`} 
                        type="button" 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditMovieForm;