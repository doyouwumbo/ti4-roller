import React from 'react';
import UnitColumns from '../components/UnitColumns';
import { Box } from '@mui/material';
import UnitColumnsHeader from '../components/UnitColumnsHeader';

function L1Z1X() {
  return(
    <Box sx={{width: '100%', display: 'flex', 
    alignItems: 'center', flexDirection: 'column', 
    mt: '10px', mb: '10px'}}>
      <UnitColumnsHeader />
      <UnitColumns index={7} />
    </Box>
  )
}

export default L1Z1X