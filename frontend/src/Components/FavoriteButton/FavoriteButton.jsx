import { useState } from 'react';
import css from './FavoriteButton.module.css';
const FavoriteButton = ({ movie, onToggleFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(movie.isFavorite || false);

    const handleClick = () => {
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);
        onToggleFavorite(movie._id, newFavoriteState); 
    };

    return (
        <button onClick={handleClick} className={`${css.favoriteButton} ${isFavorite ? css.active : ''}`}>
            {isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;