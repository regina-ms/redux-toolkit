import { Box, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../app/hooks'
import FilmCardView from '../components/FilmCardView'

export default function Favorites() {
  const { favorites } = useAppSelector(state => state.search)
  console.log(favorites)
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
      {
        favorites.length ?
          favorites.map(film => <FilmCardView {...film} key={film.imdbID} />) :
          <Typography variant='h6'>Favorites is empty</Typography>
      }
    </Box>
  )
}
