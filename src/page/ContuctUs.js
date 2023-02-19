import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import TeamCard from '../components/TeamCard'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

const ContuctUs = () => {
  return (
    <Box>
      <Typography align='center' variant='h2' mt={3}>Team Awesome</Typography>
      <Box sx={{position: 'relative'}}>
        <Box sx={{display: { xs: 'none', md: 'block'}, position: 'relative', background: 'yellow', height:'250px', top: '100px'}}></Box>
        <Grid container spacing={2} sx={{position: 'absolute', top: 0}}>
      <Grid item xs={4}>
        <TeamCard img={image1} name='ROBERT MCGRATH' title='Founder'/>
      </Grid>
      <Grid item xs={4}>
      <TeamCard img={image2} name='MICHELLE MAGER' title='Markoting Head' />
      </Grid>
      <Grid item xs={4}>
      <TeamCard img={image3} name='PAYK CARTER' title='Support Manager' />
      </Grid>
      </Grid>
      </Box>
      
    </Box>
  )
}

export default ContuctUs