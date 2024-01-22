import React from 'react'
import Container from '@mui/material/Container';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { myTheme } from '../app/theme';
import { ThemeProvider } from '@mui/material/styles';


export default function Layout() {

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    (isActive ? 'menu__link-active' : '');


  return (
    <ThemeProvider theme={myTheme}>
      <Container className='my-container'>
          <ButtonGroup size='large' variant='text' sx={{ marginBottom: '40px'}}>
            <Button endIcon={<SearchIcon />}><NavLink to='/' className={activeLink}>Search Film</NavLink></Button>
            <Button endIcon={<FavoriteIcon />}><NavLink to='favorites' className={activeLink}>Favorites</NavLink></Button>
          </ButtonGroup>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}
