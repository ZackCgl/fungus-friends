/* eslint-disable eqeqeq */
import React from 'react'
import 'reactjs-popup/dist/index.css';
import "./App.css"
import { MapContainer, TileLayer} from 'react-leaflet'
import Filter from "./Components/Filter"

export interface Properties{
  colors: number | string;
  spots: number | string;
}


function App() {
 
return ( 
  <>

    <div className="app">
    <h1>FUNGUS FRIENDS</h1>
    <p>All kinds of fungus friends can be found in the garden of SpronQ</p>
      {/*A simple OpenStreetmap as a background with z-index*/}
      
      <MapContainer center={[51.505, -0.00]} zoom={3} scrollWheelZoom={false} >
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer>

      {/*A filter to filter the mushrooms*/}

      <Filter />

    </div>
    </>
  );
}

export default App