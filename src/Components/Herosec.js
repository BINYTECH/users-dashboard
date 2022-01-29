import React from 'react';
import mount from '../Images/pin.png'
import pager from '../Images/Mf.jpg'

export default function Herosec(props) {
  
  return <div className='Display'>
        <img className="Image-dis" src={props.item.cimg} alt="Mountain" />
        <div className='description'>
         <h4 className='country map'><img className="pin" alt="map" src={mount}/>{props.item.country} <a className='mapLink' href="#">view on google map</a></h4>
         <h1>{props.item.place}</h1>
         <h5 className='date'>{props.item.date}</h5>
         <p>{props.item.description}</p>
        </div>
  </div>
}
