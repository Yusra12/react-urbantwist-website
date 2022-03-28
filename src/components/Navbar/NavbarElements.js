import React from 'react'
import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'
import{FaCoffee} from 'react-icons/fa'
export const Nav=styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:left;
font-weight:900;
`;
export const NavLink= styled(Link)`
color:#fff;
font-size:1rem;
display:flex;
align-item:center;
text-decoration:none;
cursor:pointer;
font-family:Lucida Handwriting;

@media screen and (max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}
`
export const NavIcon =styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#fff;


p{
    transform:translate(-175% , 100%);
    font-weight:bold;
}`
export const Bars = styled(FaCoffee)`
font-size:2rem;
transform:translate(-50%,-15%);
`

const NavbarElements = () => {
  return (
    <div>NavbarElements</div>
  )
}

export default NavbarElements