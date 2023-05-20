import React from 'react';
import d10 from "../img/d10.png";
import d10AFB from "../img/d10AFB.png";
import { Typography, Box, Tooltip} from '@mui/material';

function DiceRoll(props) {

  function sanitizeDisplay(roll) {
    let temp = roll;
    if (roll >= 10) {
      temp = 0;
    } else if (roll <= 1) {
      temp = 1;
    }
    return temp;
  }

  if (!props.ability) 
  {
    return (
      <Tooltip placement='top' title={`${props.num}+${props.or}=${props.num+props.or}`} enterTouchDelay={100} arrow PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            bgcolor: '#328CC1',
            "& .MuiTooltip-arrow": {
              color: '#328CC1'
            }
          }
        }
      }}>
        <Box sx={{position: 'relative', userSelect: 'none'}}>
            <img alt="" src={d10} style={{height: '30px', pointerEvents: 'none'}}></img>
            <Typography sx={{userSelect: 'none',color: 'black', 
            position: 'absolute', transform: "translateX(140%) translateY(-115%)"}}
            >
              <b>{sanitizeDisplay(props.num + props.or)}</b>
            </Typography>
        </Box>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip placement='top' title={`${props.num}+${props.or}=${props.num+props.or}`} enterTouchDelay={100} arrow PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            bgcolor: '#328CC1',
            "& .MuiTooltip-arrow": {
              color: '#328CC1'
            }
          }
        }
      }}>
        <Box sx={{position: 'relative', userSelect: 'none'}}>
            <img alt="" src={d10AFB} style={{height: '30px', pointerEvents: 'none'}}></img>
            <Typography sx={{userSelect: 'none',color: 'black', 
            position: 'absolute', transform: "translateX(140%) translateY(-115%)"}}
            >
              <b>{sanitizeDisplay(props.num + props.or)}</b>
            </Typography>
        </Box>
      </Tooltip>
    )
  }

}

export default DiceRoll