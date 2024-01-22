import { Box, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setFieldValue, fetchFilmList } from '../features/slice';
import React, { useState } from 'react';


export default function SearchField() {

  const [state, setState] = useState({
    error: false,
    helperText: ''
  })
  const dispatch = useAppDispatch();
  const { searchFildValue } = useAppSelector(state => state.search)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ error: false, helperText: '' })
    dispatch(setFieldValue(e.target.value))
  }

  const handleOnCLick = (e: React.MouseEvent) => {
    e.preventDefault()
    searchFildValue ?
      dispatch(fetchFilmList(searchFildValue)) :
      setState({ error: true, helperText: 'Enter value' })
  }


  return (
    <>
      <Box component='form' autoComplete='off' sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
        <TextField
          variant='standard'
          sx={{ width: '85%' }}
          onChange={handleOnChange}
          error={state.error}
          helperText={state.helperText}
          onFocus={() => setState({ error: false, helperText: '' })}
          value={searchFildValue}
        />
        <IconButton onClick={handleOnCLick} type='submit'>
          <SearchIcon fontSize='large' color='primary' />
        </IconButton>
      </Box>
    </>
  )
}


