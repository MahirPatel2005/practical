'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  Grid,
} from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        MUI/CARD
      </Typography>
      <Typography variant="h5" component="div">
        hiii
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>24BTCSE035</Typography>
      <Typography variant="body2">
        Mahir
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">if we want to add more content </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}