 import React, { useState } from 'react';
 import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, Divider } from '@mui/material';
 import FastfoodIcon from '@mui/icons-material/Fastfood';
 import { Link } from 'react-router-dom';
 import '../../styles/Headerstyle.css';
 import MenuIcon from '@mui/icons-material/Menu';
 

 const Header = () => {
   const [mobileopen, setMobileopen] = useState(false);

   // handle menu click
   const handleDrawerToggle = () => {
     setMobileopen(!mobileopen);
   };

   // menu drawer
   const drawer = (
     <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1, my:2}}>
         <FastfoodIcon />
         My Restaurant
       </Typography>
       <Divider/>
       <ul className='mobile-navigation'>
         <li>
           <Link to={'/'} style={{ textDecoration: 'none', color: 'black'}}>
             Home
           </Link>
         </li>

         <li>
           <Link to={'/menu'} style={{ textDecoration: 'none', color: 'black' }}>
             Menu
           </Link>
         </li>

         <li>
           <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}>
             About
           </Link>
         </li>

         <li>
           <Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}>
             Contact
           </Link>
         </li>

         <li>
           <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>
            Login
           </Link>
         </li>

       </ul>
     </div>
   );

   return (
     <Box>
       <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
         <Toolbar>
           <IconButton
             color='inherit'
             aria-label='open drawer'
             edge='start'
             sx={{
               mr: 2,
               display: { sm: 'none' },
             }}
             onClick={handleDrawerToggle}
           >
             <MenuIcon />
           </IconButton>

           <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
           <FastfoodIcon />
            My Restaurant
          </Typography>

           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             <ul className='navigation-menu'>
               <li>
                 <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                   Home
                 </Link>
               </li>

               <li>
                 <Link to={'/menu'} style={{ textDecoration: 'none', color: 'white' }}>
                   Menu
                 </Link>
               </li>

               <li>
                 <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>
                   About
                 </Link>
               </li>

               <li>
                 <Link to={'/contact'} style={{ textDecoration: 'none', color: 'white' }}>
                   Contact
                 </Link>
               </li>

               <li>
                 <Link to={'/Login'} style={{ textDecoration: 'none', color: 'white' }}>
                   Login
                 </Link>
               </li>

             </ul>
           </Box>
         </Toolbar>
       </AppBar>

       <Box component="nav">
          <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle} sx={{ display: { xs: 
           'block', sm: 'none' },"&. MuiDrawer-paper":{boxSizing:'border-box', width:"240px"} }}>
           {drawer}
         </Drawer>
       </Box>
        <Box>
        <Toolbar />
        </Box>
     </Box>
   );
 };
 export default Header;

