import React, { useState } from 'react';

export default function Select() {
    const [flowers,setFlowers] = useState('Jasmine')
  return (
    <div>
        <form>
            <select
             value={flowers}
             onChange={(e)=>{
                setFlowers(e.target.value);
             }}
             >
                
                <option value="Rose">Rose</option>
                <option value="NightQueen">NightQueen</option>
                <option value="Jasmine">Jasmine</option>

            </select>
            <h3>Selected flowers:{flowers}</h3>
        </form>
    </div>
  )
}

 