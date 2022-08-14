import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState} from 'react'

const OutlineCardStyle = { 
  
  minWidth: 275, 
  opacity: 0.7 , 
  display: 'inline-block', 
  zIndex: 1, 
  position:'relative',
}

var OutlinedCard = ({properties}) => {
  var [name, setName ] = useState(properties.Name)
  var [type, setType ] = useState(properties.Type)
  var [level, setLevel ] = useState(properties.Level)
  var [existanceStatus, setExistanceStatus ] = useState(properties.Existance_Status)
  var [checkboxValue, setCheckboxValue ] = useState(properties.isActive==='true')

  var checkboxHandler = () => {
    setCheckboxValue(!checkboxValue)
  }
  var nameHandler = (e) => {
    setName(e.target.value)
  }
  var typeHandler = (e) => {
    setType(e.target.value)
  }
  var levelHandler = (e) => {
    console.log(e);
    if ("0123456789".includes(e.nativeEvent.data) || e.nativeEvent.data==null){
      setLevel(e.target.value)
    }else{
      return
    }
  }
  var existanceStatusHandler = (e) => {
    setExistanceStatus(e.target.value)
  }
  var submitHandler = () => {
    fetch('http://localhost:3001/electric-fence', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: properties.id,
          Name: name,
          isActive: checkboxValue,
          Type: type,
          Level: level,
          Existance_Status: existanceStatus,
        })
    })
    .then()
    .then((res)=>{
      if (res.ok)
      console.log(res.ok)
    })
  }
  
  return (
    <Box sx={OutlineCardStyle}>
      <Card variant="outlined" sx={{'& .MuiCardContent-root':{paddingBottom: '8px'}}}>
        <CardContent sx={{padding:'8px 8px 8px 8px',}}>
          <Typography sx={{fontSize: 14, lineHeight: 1,}} color="text.secondary" gutterBottom>
              {/*<div>{'\nid: ' + properties.id}</div>*/} 
              {'Name: ' } <input type="text"       onChange={nameHandler} value={name}/><br/>
              {'isActive: '}<input type="checkbox" onClick={checkboxHandler} defaultChecked={checkboxValue?'checked':''} /><br/>
              {'\nType: '}<input type="text"       onChange={typeHandler}  value={type} style={{width:'50px', height:'10px'}}/><br/>
              {'\nLevel: '}<input type="text"      onChange={levelHandler} value={level} style={{width:'20px', height:'10px'}}/><br/>
              {'\nExistance_Status: '}<input type="text" onChange={existanceStatusHandler}  value={existanceStatus} style={{width:'20px', height:'10px'}}/><br/>
              <button onClick={submitHandler}> 修改 </button>
              <button style={{}}> 取消 </button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default OutlinedCard