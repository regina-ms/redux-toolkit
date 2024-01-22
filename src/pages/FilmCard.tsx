import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchFilm } from '../features/slice';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Preloader from '../components/Preloader';

export default function FilmCard() {
  const { id } = useParams<{ id: string }>();
  const { filmCard, loading } = useAppSelector(state => state.search)
  const dispatch = useAppDispatch();

  const location = useLocation()
  console.log(location)

  useEffect(() => {
    dispatch(fetchFilm(id!))
  }, [])

  return (
    loading ? <Preloader /> :
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component='img'
          image={filmCard?.Poster}
          sx={{ width: '30%' }}
        />
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h1" component="h1">{filmCard?.Title}, {filmCard?.Year}</Typography>
            <Typography gutterBottom variant="h5" component="div">{filmCard?.Genre}</Typography>
            <Typography gutterBottom variant="h5" component="div">{filmCard?.Runtime}</Typography>
            <Typography gutterBottom variant="h5" component="div">Actors: {filmCard?.Actors}</Typography>
            <Typography gutterBottom variant="h5" component="div">Director: {filmCard?.Director}</Typography>
            <Typography gutterBottom variant="h5" component="div">IMDB: {filmCard?.imdbRating}</Typography>
          </CardContent>
        </Box>
      </Card>
  )
}
