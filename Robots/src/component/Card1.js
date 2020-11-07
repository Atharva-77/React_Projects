//Card.js 1
import React from 'react';

const Card=(props)=>
{
  return(
  	// <h1> Robots Heading</h1>..error as only one thing should be returned...thus one div or array
  	//Width x Ht.
  	  <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
  	  	<img alt='Robots bhai ' src={`https://robohash.org/${props.idd}?size=200x200`} />
  	  																
  	  	 <div>
  	  	 	<h2>{props.name}</h2>
  	  	 	<p>{props.email}</p>
  	  	 	
  	  	 </div>

  	  </div>


		);
}
export default Card;