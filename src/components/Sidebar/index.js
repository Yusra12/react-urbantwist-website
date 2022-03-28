import React from 'react'
import {SideBtnWrap,SidebarContainer,SidebarLink,SidebarMenu,SidebarRoute,Icon,CloseIcon} from './SidebarElements'


const  Sidebar =({isOpen,toggle}) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon/>
       </Icon>
       <SidebarMenu>
           <SidebarLink to='/'>Shakes</SidebarLink>
           <SidebarLink to='/'>Coffee</SidebarLink>
           <SidebarLink to='/'>Juice</SidebarLink>
           
       </SidebarMenu>
       <SideBtnWrap>
           <SidebarRoute to='/'>Order Now !</SidebarRoute>
       </SideBtnWrap>
   </SidebarContainer>
  )
}

export default Sidebar