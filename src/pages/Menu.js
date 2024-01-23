import React, { useEffect, useState } from 'react';
import Layout from './../components/Layouts/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import {MenuList} from '../data/data';
const Menu = () => {
  const [brkfast, setbrkfast] = useState(null);
  const [lch, setlch] = useState(null);
  const [dinner, setdinner] = useState(null);
  const Breakfast = () =>{
    // useEffect(()=>{
    //     const mnlist = {MenuList}
    //     console.log(mnlist); 
    // },[]);
    console.log({MenuList}.value);
    // MenuList.filter()
  
  }
  return (
    <Layout>
       <div>
          <button onClick={Breakfast}>Breakfast </button>
          {/* {<button onClick={Lunch}>Lunch</button> */}
          {/* <button onClick={Dinning}>Dinner</button> */}
          <button>Dessert</button>
          <button>Golden Hours</button>
        </div>
       <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {MenuList.map(menu =>(
            <Card sx = {{maxWidth:'390px',display:"flex",m:2}}>
              <CardActionArea>
                <CardMedia 
                sx={{minHeight:'400px'}} 
                component={'img'} 
                src={menu.image} 
                alt={menu.name}
                />
                <CardContent>
                    
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>

                  <Typography variant="body2"> {menu.discription} </Typography>
                  
                  <Typography variant="body1">{menu.price}</Typography>
                  <Typography variant="div"> {menu.value} </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
       </Box>
    </Layout>
  )
}

export default Menu