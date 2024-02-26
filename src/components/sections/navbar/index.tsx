'use client';

import Link from 'next/link';
import * as React from 'react';

import { AccountCircle, AutoStories, Home, Info } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { useAuth } from '../../../lib/firebase/authService';

const pages = [
  { name: 'Home', route: '/', icon: <Home className="text-amber-600 mx-1" /> },
  {
    name: 'About',
    route: '/about',
    icon: <Info className="text-amber-600 mx-1" />
  }
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { user, logout } = useAuth();

  const settings = [{ name: 'Meus favoritos', route: 'user/favoriteBooks' }];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoStories
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 60 }}
            className="text-amber-700"
          />
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: 25
              }}
            >
              LeituraHub
            </Typography>
          </Link>

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
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={page.route}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      className="text-lg font-bold"
                    >
                      {page.icon}
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AutoStories
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: 40 }}
            className="text-amber-700"
          />
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              LeituraHub
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
              paddingRight: 5
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.route}
                onClick={handleCloseNavMenu}
              >
                <Button
                  sx={{ my: 2, color: 'black', display: 'block' }}
                  className="text-base font-semibold hover:underline"
                >
                  {page.icon}
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {user ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <p className="text-gray-700 font-bold mx-1 lg:hidden">
                    User: {user.email}
                  </p>
                  {settings.map((setting) => (
                    <Link
                      key={setting.name}
                      href={user && user.uid ? setting.route : '/login'}
                      onClick={handleCloseUserMenu}
                    >
                      <MenuItem>
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem onClick={logout}>
                    <Typography textAlign="center">Sair</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <p className="text-gray-700 font-bold mx-1 hidden lg:flex">
                User: {user.email}
              </p>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="contained"
                className="normal-case border-2 text-lg font-medium bg-amber-500 hover:bg-amber-600 mx-1"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <AccountCircle sx={{ fontSize: 30 }} className="mx-1" />
                Login
              </Button>
              <AccountCircle
                sx={{ display: { xs: 'flex', md: 'none' }, fontSize: 40 }}
                className="mx-1 text-amber-500"
              />
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
