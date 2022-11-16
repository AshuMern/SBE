import { Box, Typography } from '@mui/material';

import React from 'react';
import ResponsiveAppBar from './NavBar';

function Cancelationpolicy(props) {
    return (<>
    <ResponsiveAppBar />
        <Box style={{margin:"5px",padding:"5px"}}>
           <Typography variant="h2">Cancellations - SBE</Typography> 
           <Typography variant='p' style={{fontSize:"24px"}}>Cancellations made [48 hours] or less before an appointment will be subject to a [rebooking fee of 200INR].

Cancellations made via email sooner than [48 hours] before an appointment will be processed without penalty.<br /><br />
If ShriBalajiEnterprices cancels an appointment with less than [48 hours notice], a new appointment will be scheduled without penalty to the client, subject to availability.
</Typography>

        </Box>
        </>
    );
}

export default Cancelationpolicy;