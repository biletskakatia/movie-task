import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../Redux/moviesOps';

const EditMovieForm = ({ movie, onClose }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(movie.title);
    const [genre, setGenre] = useState(movie.genre);
    const [rating, setRating] = useState(movie.rating);
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('rating', rating);
        formData.append('releaseDate', releaseDate);

        if (image) {
            formData.append('image', image);
        }
        
        dispatch(updateMovie({ id: movie._id, formData }));
        onClose();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Movie</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}> Cancel </button>
        </form>
    );
};

export default EditMovieForm;