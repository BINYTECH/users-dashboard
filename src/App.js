import React from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Herosec'
import Data from './Data'
import './App.css'

export default function App() {
  const Desc=Data.map((x)=>{
    return <Hero key={x.id}
    item={x} />
  })
  return <div>
     <Navbar />
     {Desc}
  </div>;
}
