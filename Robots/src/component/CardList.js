import React from 'react';
import Cards from './Card';
const CardList =({robots_cardList})=>
{

	// if(true)
	// {throw new Error("Noooooo broooo")}
	const cardComponent=robots_cardList.map(
		(user,i)=>
	    {
			return(
			 < Cards 
			 key={robots_cardList[i].id}
			 id={robots_cardList[i].id}
			 name={robots_cardList[i].name} 
			 email={robots_cardList[i].email}
			 />
		     );
	    })

	return(
		<div>
		  	  {cardComponent}
		  </div>
		);
} 

export default CardList;