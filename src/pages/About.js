import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize: "2rem",
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4 ":{
              fontSize:"1.5rem",
            }
          }
        }}>
          <Typography variant='h4'>
            Welcome to My Restuarant
          </Typography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id minus architecto, non pariatur debitis facere, maiores ducimus modi deleniti saepe, provident dignissimos! Dolorem minima doloribus blanditiis aspernatur iusto eligendi! Maxime doloribus tenetur tempora. Porro sint, rem tenetur cum exercitationem, fugiat omnis itaque, esse qui ducimus laudantium numquam quae? Vel facilis atque adipisci ea suscipit officia sed eum exercitationem pariatur obcaecati illum assumenda dicta ipsum molestias incidunt perferendis accusamus consequuntur, numquam minima, tenetur animi sint! Laudantium, accusantium modi sit ex facere placeat odit at quam ipsa libero temporibus. Nostrum, itaque eveniet quas quod consectetur temporibus, quisquam nam fuga placeat odit delectus?
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in inventore voluptas soluta possimus deserunt est beatae vero ipsa magni quod esse dolor distinctio veritatis, iste perferendis? Atque in temporibus sit eligendi repellat tenetur ad quod iusto, eos perferendis commodi, optio repudiandae dignissimos quibusdam quos voluptas, sed accusamus impedit consectetur? Neque maiores dignissimos numquam, perspiciatis molestiae blanditiis reprehenderit, debitis hic et, dolores corrupti ut velit nulla ullam voluptatum dolore nihil adipisci iure repudiandae impedit voluptas sed porro beatae. Sequi quidem dignissimos delectus recusandae, odit nihil. Corrupti placeat sed ducimus laudantium distinctio qui autem doloremque dolores excepturi! Ullam consequatur et deleniti.
          </p>
        </Box>
    </Layout>
  )
}

export default About