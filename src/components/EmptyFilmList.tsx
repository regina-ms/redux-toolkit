import { Box, Typography } from '@mui/material'
import React from 'react'

export default function EmptyFilmList() {
  return (
    <Box>
      <Typography variant='h4' color={'text.secondary'}>Nothing found</Typography>
    </Box>
  )
}
