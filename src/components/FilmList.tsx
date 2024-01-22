import React from 'react'
import { useAppSelector } from '../app/hooks'
import { Box } from '@mui/material'
import FilmCardView from './FilmCardView'
import EmptyFilmList from './EmptyFilmList'

export default function FilmList() {
  const { filmList } = useAppSelector(state => state.search)
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
      {
        filmList ? filmList.map(film => <FilmCardView {...film} />) : <EmptyFilmList />
      }
    </Box>
  )
}
