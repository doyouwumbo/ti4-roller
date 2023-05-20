import React, { useContext, useState } from 'react'
import {
    Box, 
    Divider, 
    Typography, 
    Stack, 
    Select, 
    MenuItem,
    FormControl, 
    InputLabel,
    Button,
    TextField,} from '@mui/material'
import hitRoller from './HitRoller';
import "../UnitColumn.css"
import combatValues from "../data/factions.json"
import DiceRoll from './DiceRoll';
import { MOContext } from '../context/ManualOverrideContext';


function UnitColumn(props) {

    const {manualOverride, extraRolls} = useContext(MOContext);
    const [totalHits, setTotalHits] = useState(0);
    const [totalabilityHits, setTotalabilityHits] = useState(0);
    const [shipNumber, setShipNumber] = useState(1);
    const [unitLevel, setUnitLevel] = useState(1);
    const [rolls, setRolls] = useState([]);
    const [abilityRolls, setabilityRolls] = useState([]);
    const [rollOverride, setRollOverride] = useState(0);
    const [winnuShots, setWinnuShots] = useState(1);
    var numberOfShipsOptions = [];

    function changeUnitNumber(e) {
        setShipNumber(e.target.value);
    }

    function changeUnitLevel(e) {
        setUnitLevel(e.target.value);
    }

    function rollTheBones() {
        if (props.index === 13 && props.unit === "Flagship") {
            winnuRollTheBones();
            return;
        }
        let currentRolls = hitRoller(shipNumber, combatValues[props.index].combat[props.unit]['shotCount'], extraRolls);
        setRolls(currentRolls);
        setRollOverride(manualOverride);
        setTotalHits(0);
        let hitCount = 0;
        currentRolls.map(roll => {
            if (unitLevel === 1) {
                if (roll + manualOverride >= combatValues[props.index].combat[props.unit]['1cv']) {
                    hitCount++;
                }
                if (props.index === 12 && props.unit === "Flagship") {
                    if (roll === 9 || roll === 10) {
                        hitCount += 2;
                    }
                }
            } else {
                if (roll + manualOverride >= combatValues[props.index].combat[props.unit]['2cv']) {
                    hitCount++;
                }
            }
            return null;
        })
        setTotalHits(hitCount);
    }

    function winnuRollTheBones() {
        let currentRolls = hitRoller(shipNumber, winnuShots);
        setRolls(currentRolls);
        setRollOverride(manualOverride);
        setTotalHits(0);
        let hitCount = 0;
        currentRolls.map(roll => {
            if (roll + manualOverride >= combatValues[props.index].combat[props.unit]['1cv']) {
                hitCount++;
            }
            return null;
        })
        setTotalHits(hitCount);
    }

    function rollTheBonesAbility() {
        let currentRolls = hitRoller(shipNumber, combatValues[props.index].combat[props.unit][`${unitLevel}abilityShotCount`], extraRolls);
        setabilityRolls(currentRolls);
        setRollOverride(manualOverride);
        setTotalabilityHits(0);
        let hitCount = 0;
        currentRolls.map(roll => {
            if (unitLevel === 1) {
                if (roll + manualOverride >= combatValues[props.index].combat[props.unit]['1ability']) {
                    hitCount++;
                }
            } else {
                if (roll + manualOverride >= combatValues[props.index].combat[props.unit]['2ability']) {
                    hitCount++;
                }
            }
            return null;
        })
        setTotalabilityHits(hitCount);
    }

    for (let i = 1; i <= props.maxUnits; i++) {
        numberOfShipsOptions.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
    }

    return (
        <Stack gap={1} sx={{margin: {xs: '10px', md: '25px'}, width: '160px', overflow: 'hidden'}}>
            <FormControl variant="standard" disabled={props.maxUnits === 1 ? true : false}>
                <InputLabel shrink sx={{color: 'white'}}>{`Number of ${props.unit}s`}</InputLabel>
                { (props.maxUnits !== -1) &&
                    <Select onChange={changeUnitNumber} sx={{color: 'white', '& .MuiInputBase-input': {borderBottom: '1px solid #328CC1'}}} value={shipNumber} label={`Number of ${props.unit}s`}>
                        {numberOfShipsOptions}
                    </Select>
                }
                { (props.maxUnits === -1) &&
                    <TextField type="number" sx={{ml: '-10px', color: 'white', '& .MuiInputBase-input': {borderBottom: '1px solid #328CC1'}}} InputLabelProps={{shrink: false}}
                    onChange={changeUnitNumber} value={shipNumber} label=" " variant="standard" inputProps={{style: {textAlign: 'center', color: 'white'}}} />
                }
            </FormControl>
            <FormControl variant="standard" disabled={(props.unit === "Flagship" && props.index !== 21) || 
            props.unit === "Warsun" || props.unit === "Carrier" 
            || (props.unit === "Dreadnaught" && props.index !== 7) ||
            props.unit === "Mech"
             ? true : false}>
            <InputLabel shrink sx={{color: 'white'}}>{`Level of ${props.unit}`}</InputLabel>
                <Select onChange={changeUnitLevel} sx={{color: 'white'}} value={unitLevel} label={`Level of ${props.unit}`}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                </Select>
            </FormControl>
            <Stack gap={1} direction="row">
                <Button onClick={rollTheBones} variant='contained' sx={{fontSize: '1rem', width: "100%", bgcolor: '#328CC1'}}>
                    Combat
                </Button>
                { (props.unit === "Destroyer" || props.unit === "Dreadnaught" || props.unit === "Warsun" ||
                ((props.index === 1 && props.unit === "Flagship") || (props.index === 2 && props.unit === "Flagship") || 
                (props.index === 14 && props.unit === "Flagship") || (props.index === 21 && props.unit === "Flagship")
                || (props.index === 23 && props.unit === "Flagship"))) &&
                    <Button onClick={rollTheBonesAbility} variant='contained' sx={{fontSize: '1rem', bgcolor: '#328CC1'}}>
                        ability
                    </Button>
                }
                {props.index === 13 && props.unit === "Flagship" &&
                    <FormControl variant="standard">
                        <InputLabel shrink sx={{color: 'white', ml: '5px'}}># of Shots</InputLabel>
                        <TextField type="number" sx={{ml: '5px', color: 'white', '& .MuiInputBase-input': {borderBottom: '1px solid #328CC1'}}} InputLabelProps={{shrink: false}}
                    onChange={e => {setWinnuShots(parseInt(e.target.value))}} value={winnuShots} label=" " variant="standard" inputProps={{style: {textAlign: 'center', color: 'white'}}} />
                    </FormControl>
                }
            </Stack>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '200px',
                maxHeight: '600px',
                width: '150px',
                bgcolor: "#0B3C5D",
                padding: '5px',
                borderRadius: '4px',
            }}>
                <Typography sx={{color: 'white', fontSize: '1.1rem'}}><b>{props.unit.toUpperCase()}</b></Typography>
                <Divider variant="middle" sx={{bgcolor: '#D9B310',}}/>
                <Typography sx={{color: 'white', fontSize: '1.1rem'}}><b>ROLLS</b></Typography>
                <Box sx={{display: 'flex', marginBottom: 'auto', 
                flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxHeight: '90px', overflow: 'auto',
                "&::-webkit-scrollbar": {width: "10px"},
                "&::-webkit-scrollbar-thumb": {bgcolor: '#D9B310', borderRadius: '4px', "&:active": {bgcolor: '#c9a60f'}}}}>
                    {
                        rolls.map(roll => {
                            return(<DiceRoll or={rollOverride} ability={false} key={Math.random() * 1000000} num={roll}></DiceRoll>)
                        })
                    }
                    { (props.unit === "Destroyer" || props.unit === "Dreadnaught" || props.unit === "Warsun" 
                    || props.index === 1 || props.index === 2 || props.index === 14 || props.index === 21 || props.index === 23) &&
                        abilityRolls.map(roll => {
                            return(<DiceRoll or={rollOverride} ability={true} key={Math.random() * 1000000} num={roll}></DiceRoll>)
                        })
                    }
                </Box>
                <Divider variant="middle" sx={{bgcolor: '#D9B310', mt: '10px', mb: '10px'}}/>
                <Box sx={{display: 'flex', bgcolor: '#328CC1', borderRadius: '4px', justifyContent: 'center'}}>
                    <Typography sx={{color: '#D9B310', fontSize: '20px', mr: '2px'}}>{totalHits}</Typography>
                    <Typography sx={{color: 'white', fontSize: '20px'}}>Hit{totalHits === 1 ? '' : 's'}</Typography>
                    { (props.unit === "Destroyer" || props.unit === "Dreadnaught" || props.unit === "Warsun" 
                    || props.index === 1 || props.index === 2 || props.index === 14 || props.index === 21 || props.index === 23) &&
                        <Box sx={{display: 'flex', bgcolor: '#328CC1', borderRadius: '4px', justifyContent: 'center'}}>
                            <Typography sx={{color: '#D9B310', fontSize: '20px', mr: '2px', ml: '5px'}}>{totalabilityHits}</Typography>
                            <Typography sx={{color: 'white', fontSize: '20px'}}>ability</Typography>
                        </Box>
                    }
                </Box>
            </Box>
        </Stack>
  )
}

export default UnitColumn