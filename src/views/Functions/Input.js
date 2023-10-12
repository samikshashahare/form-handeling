import React from 'react'
import { useState } from 'react';

export default function Input() {
      const[fullname, setFullname] = useState('');

  return (
    <div><h1>input box handeling</h1>

        {fullname}
        <form>
        <input type='text' placeholder='full name'  onChange={(e)=>{setFullname(e.target.value)}}
         value={fullname}/>
      </form>
    </div>
  )
}

