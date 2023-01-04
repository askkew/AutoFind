import React from 'react'
import styled from 'styled-components'
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
  paddingBottom: '400px',
})

const CustomTextField = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

const Searcharea = () => {
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  return (
    // <div style={{backgroundImage: "url(" + "https://media.evo.co.uk/image/private/s--h8JCVqRl--/f_auto,t_content-image-full-desktop@1/v1605272222/evo/2020/11/BMW%20M3s%20on%20a%20budget-13.jpg" + ")",
    <div style={{backgroundImage: "url(" + "https://media.evo.co.uk/image/private/s--xYRPhPhA--/v1556220049/evo/2018/04/alp_9699.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <divContainer>
        <TopDiv>
          <h1>Cars for Sale - Search near you</h1>
          <FilterButtons>
              <h4 style={{paddingRight: '10px'}}> Search by budget </h4>
              <h4> | </h4>
              <h4 style={{paddingLeft: '10px'}}> Advanced Search </h4>
          </FilterButtons>
        </TopDiv>
        <NextDiv >
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
                  label="Model"
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
      </divContainer>
    </div>
  )
}

export default Searcharea