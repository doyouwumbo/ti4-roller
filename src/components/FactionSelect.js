import React from 'react';
import ChooseFactionButton from './ChooseFactionButton';
import factions from '../data/factions.json';
import { Box } from '@mui/material'



function FactionSelect() {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignContent: 'space-evenly',
      maxWidth: '80%',
      flexWrap: 'wrap',
    }}>
    {
      factions.map((faction) => {
        return(<ChooseFactionButton fullname={faction.fullname} logo={faction.logo} url={faction.url} key={faction.fullname}/>);
      })
    }
    </Box>
  );
}

export default FactionSelect