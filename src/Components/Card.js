import React from 'react'
export default function Card(props) {
console.log(props)
  return (
    <div className='carddisplay'>
    <img className="card" src="../Images/{props.item.cimg}"  alt="people"/>
    <div className='description'>
        <img src="" alt="star"/>
        <span>5.0 6 USA</span>
        <p>{props.item.title}</p>
        <p>From {props.item.price}/person</p>
    </div>
   </div>
  )
}
