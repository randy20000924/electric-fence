import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState} from 'react'

const OutlineCardStyle = { 
  
  minWidth: 275, 
  opacity: 0.7 , 
  display:'inline-block', 
  zIndex:1, 
  position:'relative',
}

var OutlinedCard = ({properties}) => {
  var [textValue, setTextValue ] = useState(properties.Name)
  var [checkboxValue, setCheckboxValue ] = useState(properties.isActive=='true')

  var checkboxHandler = () => {
    setCheckboxValue(!checkboxValue)
  }
  var textHandler = (e) => {
    setTextValue(e.target.value)
  }

  return (
    <Box sx={OutlineCardStyle}>
      <Card variant="outlined">
        <CardContent >
          <Typography sx={{ fontSize: 14, lineHeight: 1,}} color="text.secondary" gutterBottom>
              {/*<div>{'\nid: ' + properties.id}</div>*/}
              {'\nName: ' } <input type="text"     onChange={textHandler} value={textValue}/><br/>
              {'isActive: '}<input type="checkbox" onClick={checkboxHandler} checked={checkboxValue?'checked':''}/>
              <div>{'\nType: ' + properties.Type}</div>
              <div>{'\nLevel: ' + properties.Level}</div>
              <div>{'\nExistance_Status: ' + properties.Existance_Status}</div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default OutlinedCard