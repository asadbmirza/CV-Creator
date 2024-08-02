import { useState } from 'react'

import '../styles/info.css'

function Info({setName, setNumber, setEmail}) {
  return (
    <>
      <li>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name 'onInput={setName}/>
      </li>
      <li>
        <label htmlFor='number'>Phone Number</label>
        <input type="text" id='number 'onInput={setNumber}/>
      </li>
      <li>
        <label htmlFor='email'>Email</label>
        <input type="email" id='email 'onInput={setEmail}/>
      </li>
    </>
    
  );
}

export default Info
