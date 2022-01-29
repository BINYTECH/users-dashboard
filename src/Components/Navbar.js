import React from 'react';

import world from "../Images/globe-earth.png"
export default function Navbar() {
  return <>
         <nav className='navdis'>
          <img className='img' src={world} alt="logpo"/>
          <h2 className='navHead'>my travel journal.</h2>
      </nav>

  </>
      
      
  ;
}
