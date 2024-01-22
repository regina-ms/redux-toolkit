import React, { useState } from 'react'
import { filmView, changeFavorites } from '../features/slice'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export default function FilmCardView({ Title, Year, Poster, imdbID, Type }: filmView) {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(state => state.search);
  const [isFavorite, setIsFavorite] = useState<boolean>(favorites.some(film => film.imdbID === imdbID));

  const handleFavoriteClick = () => {
    const newFavorites = favorites.slice();
    if (isFavorite) {
      const index = newFavorites.findIndex(film => film.imdbID === imdbID);
      newFavorites.splice(index, 1);
      dispatch(changeFavorites(newFavorites));
    } else {
      newFavorites.push({ Title, Year, Poster, imdbID, Type });
      dispatch(changeFavorites(newFavorites));
    }
    setIsFavorite(!isFavorite);
  } 
  return (
    <Card sx={{ width: '20%', position: 'relative' }}>
      <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
        <Link to={`/${imdbID}`} className='film-card_link'>
          <CardMedia
            component='img'
            image={Poster}
            alt={Title}
            sx={{ height: '300px', objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="p">{Title}</Typography>
            <Typography variant="body2" color="text.secondary">{Year}</Typography>
            <Typography variant="body2" color="text.secondary">{Type}</Typography>
          </CardContent>
        </Link>
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }} onClick={handleFavoriteClick}>
          {
            isFavorite ? <FavoriteIcon color='primary'/> : <FavoriteBorderIcon color='primary'/>
          }
        </Box>
      </CardActionArea>
    </Card>
  )
}
