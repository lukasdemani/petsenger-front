import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ModalSign from './ModalSign';
import useAuth from '../hooks/useAuth';

import { useNavigate } from 'react-router';

const pages = ['Get a Quote', 'Services', 'About us', 'FAQ', 'Contact'];

export default function Header () {
    const navigate = useNavigate();
    const { nameToken } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleCloseNavMenu = (button) => {
    setAnchorElNav(null);
    if (button === 'Get a Quote'){
        navigate('/get-a-quote')
    }else if (button === 'FAQ') {
        navigate('/faq');
    }else if (button === 'About us'){
        navigate('/about-us')
    }else if (button === 'Services'){
        navigate('/services')
    }else{
        navigate('/contact')
    }
  };

  const handleUser = () => {
      navigate('/profile')
  }

  return (
    <AppBar position="static"
        sx = {{
            bgcolor: '#AED6F1'
        }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
                component = 'img'
                sx = {{
                    height: 50,
                }}
                src={require('.././assets/cropped-logo_petkurier_2cm.png')}/>
          <Typography
            onClick = {()=>navigate('/')}
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PETSENGER
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PETSENGER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {!nameToken ? 
                <>
                <Button variant="outlined" onClick={handleOpen}
                    sx={{ 
                        backgroundColor: '#ffffff'
                     }}>Login
                </Button>
                <ModalSign open={open} close={handleClose}/>
                </>
            :
                <Button onClick={handleUser}>
                <Typography 
                     variant='h7'>
                     Olá, {nameToken.name}
                </Typography>
                </Button>
             }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
