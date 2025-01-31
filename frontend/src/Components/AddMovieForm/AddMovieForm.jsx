import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../Redux/moviesOps';

const AddMovieForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const movieData = {
            title,
            genre,
            rating: Number(rating),
            releaseDate,
            image: imageUrl || null,
        };
        console.log("Movie Data:", movieData);
        
        dispatch(addMovie(movieData));
        
        setTitle('');
        setGenre('');
        setRating('');
        setReleaseDate('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
            <input type="text" placeholder="Image URL (optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            <button type='submit'>Add Movie</button>
        </form>
    );
};

export default AddMovieForm;