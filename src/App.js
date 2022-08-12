import Map from './Map'
import BtnGroup from './BtnGroup'
import {useEffect, useState} from 'react'

function App() {
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
        //console.log(info)
        setData(info)
    })
  }, [])

  return (
    <div className="App">
      {data==true ? 'loading' : <Map data = {data}/>}
      <BtnGroup/>
    </div>
  );
}

export default App;
