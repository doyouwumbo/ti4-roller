import React from 'react'
import UnitColumn from './UnitColumn'
import { Box } from '@mui/material'

function UnitColumns(props) {
  return (
    <Box sx={{display: 'flex', maxWidth: '1200px', flexWrap: "wrap", justifyContent: 'center'}}>
      <UnitColumn unit="Flagship" maxUnits={1} index={props.index}></UnitColumn>
      <UnitColumn unit="Warsun" maxUnits={2} index={props.index}></UnitColumn>
      <UnitColumn unit="Cruiser" maxUnits={8} index={props.index}></UnitColumn>
      <UnitColumn unit="Dreadnaught" maxUnits={5} index={props.index}></UnitColumn>
      <UnitColumn unit="Destroyer" maxUnits={8} index={props.index}></UnitColumn>
      <UnitColumn unit="PDS" maxUnits={6} index={props.index}></UnitColumn>
      <UnitColumn unit="Carrier" maxUnits={4} index={props.index}></UnitColumn>
      <UnitColumn unit="Fighter" maxUnits={-1} index={props.index}></UnitColumn>
      <UnitColumn unit="Infantry" maxUnits={-1} index={props.index}></UnitColumn>
      <UnitColumn unit="Mech" maxUnits={4} index={props.index}></UnitColumn>
    </Box>
  )
}

export default UnitColumns