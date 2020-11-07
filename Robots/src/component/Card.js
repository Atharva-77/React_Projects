import React from 'react';

const Card=({name,email,id})=>
{
  return(
  	// <h1> Robots Heading</h1>..error as only one thing should be returned...thus one div or array
  	//Width x Ht.
  	  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  	  	<img alt='Robots bhai ' src={`https://robohash.org/${id}?size=200x200`} />
  	  																
  	  	 <div>
  	  	 	<h2>{name}</h2>
  	  	 	<p>{email}</p>
  	  	 	
  	  	 </div>

  	  </div>


		);
}
export default Card;