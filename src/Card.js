import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (properties) => {
  return (<>
    <CardContent >
      <Typography sx={{ fontSize: 14, lineHeight: 1,}} color="text.secondary" gutterBottom>
          {/*<div>{'\nid: ' + properties.id}</div>*/}
          <div>{'\nName: ' + properties.Name}</div>
          <div>{'\nisActive: ' + properties.isActive}</div>
          <div>{'\nType: ' + properties.Type}</div>
          <div>{'\nLevel: ' + properties.Level}</div>
          <div>{'\nExistance_Status: ' + properties.Existance_Status}</div>
      </Typography>
    </CardContent>
  </>)
};

const OutlineCardStyle = { 
  
  minWidth: 275, 
  opacity: 0.7 , 
  display:'inline-block', 
  zIndex:1, 
  position:'relative',
}

var OutlinedCard = ({properties}) => {
  return (
    <Box sx={OutlineCardStyle}>
      <Card variant="outlined">{card(properties)}</Card>
    </Box>
  );
}
export default OutlinedCard