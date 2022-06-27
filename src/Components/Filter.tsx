/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
import { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import Names from './Names';
import Image from './Image';
import "./Filter.css"

export interface Properties{
  colors: number | string;
  spots: number | string;

}

function Filter() {
 
  const [colors, setColors] = useState<Properties["colors"]>(100)
  const [spots, setSpots] = useState<Properties["spots"]>(100)


return ( 
  <>

    <div className="filter">

     {/*A filter to filter mushrooms*/}
      <div className='filter__properties'>
            <form>
              <label >Color: </label>
              <select onChange={e => {setColors(e.target.value)
              }}>
              <option value={1000}>-</option>
              <option value="0">Red</option>
              <option value="1">Green</option>
              <option value="2">Yellow</option>
              <option value="3">Blue</option>
             
             
              </select>
            
              <label >Spots: </label>
              <select onChange={e => {setSpots(e.target.value)
              }}>
                <option value={101}>-</option>
                {colors == 0 && <option value={0}>none</option>}
                {colors == 1 && <option value={1}>hidden</option>}
                {colors == 2 && <option value={1}>hidden</option>}
                {colors == 3 && <option value={1}>hidden</option>}
                {colors == 2 &&<option value={2}>dotted</option>}
                {colors == 3 &&<option value={2}>dotted</option>}
                {colors == 0 && <option value={3}>dashed</option>}
                {colors == 1 && <option value={3}>dashed</option>}
                {colors == 0 && <option value={4}>solid</option>}
                {colors == 0 && <option value={5}>double</option>}
                {colors == 3 && <option value={5}>double</option>}
                {colors == 1 && <option value={6}>groove</option>}
                {colors == 3 && <option value={6}>groove</option>}
                {colors == 0 && <option value={7}>ridge</option>}
                {colors == 3 && <option value={7}>ridge</option>}
                {colors == 2 && <option value={8}>inset</option>}
                {colors == 3 && <option value={8}>inset</option>}
                {colors == 0 && <option value={9}>outset</option>}
              </select>
            </form>
            <button onClick={(() => {window.location.reload()})}>Clear</button>
      </div>
           
        {/*renders the image for each mushroom*/}
        <Image colors={colors} spots={spots}/>
          

        {/*renders the name for each mushroom*/}
        <Names colors={colors} spots={spots}/>

    </div>
    </>
  );
}

export default Filter