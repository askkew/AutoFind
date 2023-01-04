import styled from 'styled-components'
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Historycars = () => {
  return (
    <Button>
        <Card sx={{ width: 250, height: 250}}>
            <SearchIcon style = {{marginTop: 10}} />
            <CardMedia style = {{ width: 250, padding: 10}} 
                component="img"
                alt="car"
                height="140"
                image= {require ("../../media/m3.png")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                BMW M3
                </Typography>
            </CardContent>
        </Card>
    </Button>
  )
}

export default Historycars