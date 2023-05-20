import { Box, Button, TextField, FormControl, InputLabel, Typography, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import {MOContext} from "../context/ManualOverrideContext";

function UnitColumnsHeader() {

  const navigate = useNavigate();

  const {manualOverride, setManualOverride, extraRolls, setExtraRolls} = useContext(MOContext);

  return (
    <Stack gap={1} justifyContent="center" sx={{width: {xs: '82%', md: '52.5%'}}}>
      <Typography color='white'><i>The displayed roll includes the modifier you set at the time of the roll. Hover/tap and hold on a roll to see its calculation.</i></Typography>
      <Box sx={{justifyContent: 'space-between', display: 'flex', width: '100%'}}>
          <Button variant='contained' sx={{bgcolor: '#328CC1', width: {xs: '30%', md: "160px"},}} onClick={() => {navigate("/")}}>Home</Button>
          <FormControl variant="standard"  sx={{width: {xs: '30%', md: "160px"}}}>
              <InputLabel shrink sx={{color: 'white'}}>Roll Modifier</InputLabel>
                <TextField label=" " variant="standard" 
                inputProps={{style: {textAlign: 'center', color: 'white'}}}
                type="number" InputLabelProps={{shrink: false}} onChange={(e) => setManualOverride(parseInt(e.target.value))} value={manualOverride}/>
                
          </FormControl>
          <FormControl variant="standard"  sx={{width: {xs: '30%', md: "160px"}}}>
            <InputLabel shrink sx={{color: 'white'}}>Extra Rolls</InputLabel>
                <TextField label=" " variant="standard" 
                inputProps={{style: {textAlign: 'center', color: 'white'}}}
                type="number" InputLabelProps={{shrink: false}} onChange={(e) => setExtraRolls(parseInt(e.target.value))} value={extraRolls}/>
          </FormControl>
      </Box>
    </Stack>
  )
}

export default UnitColumnsHeader