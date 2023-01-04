import React from 'react'
import styled from 'styled-components'
import { FormControl, Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid, Paper, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Historycars from '../historycars';

const HistoryLabel = styled('h1')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})

const History = () => {
  return (
    <div style={{}}>
        <HistoryLabel>
            <h1 style={{fontSize: 25, marginBottom: 0}}> Continue your Search </h1>
        </HistoryLabel>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <Historycars />
                    </Grid>
                    <Grid item>
                        <Historycars />
                    </Grid>
                    <Grid item>
                        <Historycars />
                    </Grid>
                    <Grid item>
                        <Historycars />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
            <Grid xs={12}>
                <Historycars />
            </Grid>
            <Grid xs={12}>
                <Historycars />
            </Grid>
            <Grid xs={12}>
                <Historycars />
            </Grid>
        </Grid> */}
    </div>
  )
}

export default History