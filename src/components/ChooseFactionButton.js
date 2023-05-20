import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import '../App.css'

function ChooseFactionButton(props) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(props.url);
  }

  return (
    <Box
    onClick={handleClick}
    sx={{
      cursor: "pointer",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200px',
      height: '100px',
      borderRadius: '16px',
      margin: '10px',
      bgcolor: '#0B3C5D',
      boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.3)"
    }}>
      <img src={require(`../img/logo/${props.logo}`)} alt="" style={{height: '50px'}}></img>
      <Typography sx={{color: 'white', width: '90%'}}>{props.fullname}</Typography>
    </Box>
  )
}

export default ChooseFactionButton