import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Preloader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color='primary' />
    </Box>
  )
}
