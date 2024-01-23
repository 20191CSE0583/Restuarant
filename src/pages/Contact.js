import React from 'react';
import Layout from '../components/Layouts/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10}}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil neque quis iusto ea aspernatur? Inventore ut dicta fuga minus porro perspiciatis vero, animi dignissimos voluptatibus sit. Dignissimos neque non consequatur, ipsam nostrum sapiente quia repellendus iste, veritatis facilis temporibus soluta ipsa molestias praesentium obcaecati odit, ex commodi fugit et culpa placeat. Ex tempore quia temporibus alias optio rerum nostrum error labore autem dicta voluptate aliquid illo dolores aperiam natus eius aut dolore id, voluptas sequi qui nemo quod ullam enim! Nostrum neque quae rem quasi illo maxime odio adipisci voluptatum, sed eaque iste, officiis non et distinctio, in expedita.
        </p>
      </Box>

      <Box sx={{m:3, width:"600px",ml:10, "@media (max-width:600px)":{
        width:'300px',
      }}}>
        <TableContainer component={Paper}>
         <Table aria-label='contact table'>
           <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'black',color:'white', }} align='center'>
                Contact Details
              </TableCell>
            </TableRow>
           </TableHead>
           <TableBody>

            <TableRow>
              <TableCell>
                 <SupportAgentIcon sx={{color:'red', pt: 1}}/> 1800-00-0000 (tollfree)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                 <MailIcon sx={{color:'skyblue', pt: 1}}/> abcd@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                 <CallIcon sx={{color:'green', pt: 1}}/> 1234567890
              </TableCell>
            </TableRow>

           </TableBody>
         </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
