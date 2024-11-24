import React from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
