import styled from 'styled-components'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Historycars = () => {
  return (
    <Card sx={{ width: 250, height: 250}}>
        <SearchIcon />
        <CardMedia
            component="img"
            alt="car"
            height="140"
            image="../../media/m3.png"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            BMW M3
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Historycars