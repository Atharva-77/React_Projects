// CardList.js 1
import React from 'react';
import Cards from './Card';
const CardList =({robots_cardList})=>
{
	return(
		

		  <div>
		  	  < Cards id={robots_cardList[0].id} name={robots_cardList[0].name} email={robots_cardList[0].email}/>
			  < Cards id={robots_cardList[1].id} name={robots_cardList[1].name} email={robots_cardList[1].email}/>
			  < Cards id={robots_cardList[2].id} name={robots_cardList[2].name} email={robots_cardList[2].email}/>
		  </div>

	


		);
} 

export default CardList;