import React from 'react'
import {Nav, NavIcon, NavLink,Bars} from './NavbarElements';
import{FaCoffee} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
       
            <NavLink to='/'>
        
            Urban Twist 
            </NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
            </Nav>
    </>
  );
};

export default Navbar;