import { CardActions, CardContent } from '@mui/material'
import { Card, Typography } from 'antd'
import React from 'react'

const TeamCard = ({img, name, title}) => {
  return (
    <Card sx={{ width: '100%' }} style={{background: 'transparent' , border: '0px' }}>
        <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src={img} alt="" style={{margin: '0 auto', height:"330px"}} />
        </div>
      <CardContent>
        <Typography align='center' gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography align='center' variant="body2" color="text.secondary">
         {title}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default TeamCard