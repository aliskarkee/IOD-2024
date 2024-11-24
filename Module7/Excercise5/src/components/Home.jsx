import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" style={{ paddingTop: '20px' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to My React App
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            This is a simple React app that demonstrates routing and the use of Material UI components.
            Explore the app by navigating to different pages using the navbar above.
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="primary" component={Link} to="/login">
            Go to Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
