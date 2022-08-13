import Map from './Map'
import BtnGroup from './BtnGroup'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {displayInfo} from './app/infoReducer2'

function App(){
  const info = useSelector(state => state.info)
  console.log(info.value)
  const dispatch = useDispatch()

  var [data, setData] = useState(true)
  useEffect(()=>{
    fetch('http://localhost:3001/electric-fence',{
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    .then(res => res.json())
    .then((info)=>{
        setData(info)
    })
  }, [])

  return (
    <div className="App">
      {data==true ? 'loading' : <Map data = {data} dislpay = {info.value}/>}
      <button onClick={(()=>dispatch(displayInfo()))} style={{position: 'fixed',top:0,right:0}}>123</button>
    </div>
  );
}

export default App;
