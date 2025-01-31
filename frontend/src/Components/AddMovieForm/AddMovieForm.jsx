import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../Redux/moviesOps';
import css from './AddMovieForm.module.css';


const AddMovieForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const validGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

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

        const movieData = {
            title: title.trim(),
            genre: genre.trim(),
            rating: rating ? Number(rating) : 0, 
            releaseDate: new Date(releaseDate).toISOString().split('T')[0],
            image: imageUrl ? imageUrl.trim() : undefined, 
        };
        console.log("Movie Data:", movieData);
        try {
            const newMovie = await dispatch(addMovie(movieData)).unwrap();
            console.log("Movie added:", newMovie);

            setTitle('');
            setGenre('');
            setRating('');
            setReleaseDate('');
            setImageUrl('');
        } catch (error) {
            console.error("Error adding movie:", error);
            setError("Failed to add movie. Try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            {error && <p className={css.error}>{error}</p>}
            <input type="text"  className={css.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <select value={genre} className={css.select} onChange={(e) => setGenre(e.target.value)} required>
                <option value="">Select Genre</option>
                {validGenres.map((g) => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>

            <input type="number" className={css.input} placeholder="Rating (0-10)" value={rating} onChange={(e) => setRating(e.target.value)}  min="0" max="10" />
            <input type="date"className={css.input}  value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
            <input type="text" className={css.input} placeholder="Image URL (optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            <button type='submit' className={css.button} >Add Movie</button>
        </form>
    );
};

export default AddMovieForm;