import React, { useContext } from 'react';
import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Monospace',
  fontSize: 20,
};

export default function NavBar() {
  const { handleLogout, user } = useContext(DataContext);
  const links = user.id ? ['Heroes', 'Playerinfo', 'Myfavorites', 'Words'] : ['Heroes', 'Login', 'Signup'];
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static">
        <Toolbar>
          {links.map((el) => (
            <Box key={el} mr={10}>
              <NavLink to={`/${el}`} style={linkStyle}>{el}</NavLink>
            </Box>
          ))}
          {user.id ? (
            <Box style={{
              display: 'flex', alignItems: 'center', width: '250px', justifyContent: 'space-between',
            }}
            >
              <NavLink to="/PersonalPage" style={linkStyle}>{`Hello ${user.name}!`}</NavLink>
              <NavLink onClick={handleLogout} level="body5" component="h3" style={linkStyle}>LogOut</NavLink>
            </Box>

          )
            : (
              <Typography level="body5" component="h3" style={linkStyle}>
                Hello Guest!
              </Typography>
            )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
