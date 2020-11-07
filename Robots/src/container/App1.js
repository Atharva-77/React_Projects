//App,js 1
import React from 'react';
import CardList from './CardList';
import Searchbox from './SearchBox'
import {robotInfo} from './robot_info';

const App= ()=>
{
	return(
			<div className="tc">
					<h1>Robofriends</h1>
					<Searchbox/>

					<CardList robots_cardList={robotInfo}/>

			</div>
		)
}

export default App;
