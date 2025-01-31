import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../Redux/moviesOps';

const AddMovieForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('rating', rating);
        formData.append('releaseDate', releaseDate);
        formData.append('image', image);
        
        dispatch(addMovie(formData));
        
        setTitle('');
        setGenre('');
        setRating('');
        setReleaseDate('');
        setImage(null);
    };

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
            <input type="file" accept="image/*"  onChange={handleImageChange}  />
            <button type='submit'>Add Movie</button>
        </form>
    );
};

export default AddMovieForm;