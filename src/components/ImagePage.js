import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { padding } from '@mui/system';

export default function StandardImageList() {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];
      
  return (<Box >
    <Box style={{border: "2px solid black", padding:"4px", margin:"2px"}}>
    <Typography variant="h2">What is Solvent Cement?</Typography>
    <Typography variant='p'>Solvent cement is made up of CPVC resin, stabilizers and fillers dissolved in a cocktail of solvents. These solvents serve two purposes:
   
Dissolve the CPVC resin.
Prepare the surface of the pipe and fitting.
When applied, the solvents soften and dissolve the top layer of the pipe and fitting material, loosening its molecular structure. A taper in the fitting socket creates an interference fit that ensures contact between the pipe and fitting. This allows the material to fuse to itself when the two pieced are connected.

These fused joints help to maintain the life expectancy, high distortion temperature, pressure rating, chemical resistance, and safety qualities throughout the system.</Typography>
</Box>
<Box mr="2px">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
   <Box><img src="image1.jpeg" width="100%" height="500px" alt="a" /></Box>
  </Grid>
  <Grid item xs={4}>
  <Box><img src="image2.jpeg" width="100%"  height="500px" alt="a" /></Box>
  </Grid>
  <Grid item xs={4}>
  <Box><img src="image3.jpeg" alt="a" height="500px" width="100%"/></Box>
  </Grid>
</Grid>
</Box>
</Box>
    );
}

