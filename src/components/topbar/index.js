import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Topbarelements';
import { Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import websiteLogo from '../../media/websiteLogo.PNG';
import PaidIcon from '@mui/icons-material/Paid';

const Topbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' style={{color:'#fff', height: '100%'}}>
            <h1><strong>Autofind</strong></h1> 
          <img src={require('../../media/websiteLogo.PNG')}></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/newcars' activeStyle>
            New Cars
          </NavLink>
          <NavLink to='/usedcars' activeStyle>
            Used Cars
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/budget'>
            <PaidIcon fontSize='large' style={{color:'#fff'}} />
          </NavLink>
          <NavLink to='/account'>
            <AccountCircleIcon fontSize='large' style={{color:'#fff'}} />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "rgb(236, 92, 0);"}} to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Topbar;