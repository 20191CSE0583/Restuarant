import React from 'react';
import Layout from '../components/Layouts/Layout';
import Button from '@mui/material/Button'; // Make sure to use the correct import

import { Link } from 'react-router-dom';
import Banner from '../images/Banner.jpg';
import '../styles/Homestyle.css';

const Home = () => {
  return (
    <Layout>
      <div className="Home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>

          <Link to="/Menu">
            <Button>
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
