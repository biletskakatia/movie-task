import { useState } from 'react';

const FavoriteButton = ({ movie, onToggleFavorite }) => {

    const [isFavorite, setIsFavorite] = useState(movie.isFavorite || false);
    
    const handleClick = () => {
        setIsFavorite((prev) => !prev);
        onToggleFavorite(movie._id, !isFavorite);
    };
    return (
    <button onClick={handleClick}>{isFavorite ? '★ Favorite' : '☆ Add to Favorites'}</button>
);
};
export default FavoriteButton;