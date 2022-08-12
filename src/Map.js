import React from 'react'
import Map, {Marker, Source, Layer} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const geojson = {
    type: 'FeatureCollection',
    features: [
        {type: 'Feature', geometry: {type: "Polygon",coordinates: [[
            [
            120.648907689199,
            23.944939439090547,
            ],
            [
            120.64909994908754,
            23.944993386119037,
            ],
            [
            120.64929389546693,
            23.94503346103973,
            ],
            [
            120.64940857680286,
            23.94499338611903,
            ],
            [
            120.64948988757321,
            23.944926733997285,
            ],
            [
            120.64973433511952,
            23.94419503562438,
            ],
            [
            120.64939205374579,
            23.94411172614674,
            ],
            [
            120.6493043241403,
            23.944335715800264,
            ],
            [
            120.64905659656624,
            23.944393472977488,
            ],
            [
            120.64900603991636,
            23.944668396785453,
            ],
            [
            120.648907689199,
            23.944939439090547,
            ],
            ]]}}
      
    ]
  };

const postItStyle ={
    width:'20vw', 
    height:'40vh', 
    position:'relative', 
    display:'inline-block',
    borderStyle:'solid',
    borderWidth:'1px'
}

const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    }
};

function Map_(data) {
    //console.log(data.data.features)
    //console.log(data.data.features);
    var fence = []
    for(var i of data.data.features){
        console.log(i.properties)
        fence.push(
        <div style={postItStyle}>
            {
            '\nid: ' + i.properties.id +
            '\nName: ' + i.properties.Name +
            '\n isActive: ' + i.properties.isActive +
            '\nType: ' + i.properties.Type +
            '\nLevel: ' + i.properties.Level +
            '\nExistance_Status: ' + i.properties.Existance_Status
            }
        </div>)
    }
    return (
        <>
        {fence}
        {/*<Map
            initialViewState={{
            latitude: 23.944939439090547,
            longitude: 120.648907689199,
            zoom: 14
            }}
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
            mapboxAccessToken={'pk.eyJ1IjoiZDBvbzAiLCJhIjoiY2w2cDhnb3N4MDhiajNqbHB3NDczOXlocyJ9.bMt1-8OFtXipjEo81rLYpw'}
        >
            //{<Marker longitude={-122.4} latitude={37.8} color="red" />}
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </Map>*/}</>)
}

export default React.memo(Map_)