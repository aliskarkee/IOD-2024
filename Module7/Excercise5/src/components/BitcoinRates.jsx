import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const BitcoinRates = () => {
  const rates = [
    { currency: 'USD', rate: '54,000' },
    { currency: 'EUR', rate: '46,000' },
    { currency: 'GBP', rate: '40,000' },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
      {rates.map((rate, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{rate.currency}</Typography>
              <Typography variant="body1">Rate: ${rate.rate}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BitcoinRates;
