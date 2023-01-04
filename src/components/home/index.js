import React from 'react'
import styled from 'styled-components'
import Searcharea from '../searcharea'
import { NavBtn, NavBtnLink } from '../topbar/Topbarelements';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const TopDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})

const FilterButtons = styled('div')({
    paddingLeft: '100px',
    paddingTop: '12px',
    display: 'flex',
    justifyContent: 'center',
})

const NextDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})

const CustomTextField = styled('div')({
    display: 'flex',
    flexDirection: 'row',
})

export const Home = () => {
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  return (
    <>
      <TopDiv>
        <h1>Cars for sale - Search near you</h1>
        <FilterButtons>
            <h4 style={{paddingRight: '10px'}}> Search by budget </h4>
            <h4> | </h4>
            <h4 style={{paddingLeft: '10px'}}> Advanced Search </h4>
        </FilterButtons>
      </TopDiv>
      <NextDiv>
        <CustomTextField>
            <Box sx={{ width: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Make</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={make}
                label="Make"
                onChange={handleMakeChange}
                >
                <MenuItem value={10}>BMW</MenuItem>
                <MenuItem value={20}>Audi</MenuItem>
                <MenuItem value={30}>Nissan</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <Box sx={{ width: 300, paddingLeft: '10px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                label="Make"
                onChange={handleModelChange}
                >
                <MenuItem value={10}>BMW</MenuItem>
                <MenuItem value={20}>Audi</MenuItem>
                <MenuItem value={30}>Nissan</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <NavBtn>
                <NavBtnLink style={{backgroundColor: "rgb(236, 92, 0);"}} to='/signin'><strong>Search</strong></NavBtnLink>
            </NavBtn>
        </CustomTextField>
      </NextDiv>
      {/* <img src={require('../../media/maincar.png')} style={{paddingBottom: '10px'}}></img> */}
    </>
  )
}