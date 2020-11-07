import React, {Component} from 'react';
import CardList from '../component/CardList';
import Searchbox from '../component/SearchBox'
// import {robotInfo} from './robot_info';  //Using link in fetch()
import ScrollBar from '../component/Scroll'

class App extends Component
{
	constructor()
	{
		super()
		this.state=
		{
			// robot_in:robotInfo,
			robot_in:[],
			searchfield: '',
			yo:'hello app'
		}
	}
	componentDidMount()
	{
		// this.setState(
		// 	// {robot_in:robotInfo} 
		// 			)
			fetch("https://jsonplaceholder.typicode.com/users")
			.then(
					i=>
					{
						return i.json();
					}
				
					)
			.then(
					j=>
					{
						this.setState
						(
							{robot_in:j}
						)
					}
				)		
		
	}




	
    //Function inside a class is defined in this way
	onSearchChange=(event)=>
	{
		//to update value of variables defined in constructor& state, weuse setState 
		this.setState(
			//this is object
		 {
			 searchfield:event.target.value 
		 }
		,
		()=>{
			console.log("here",this.state.searchfield)
			}
		)	
		// console.log("out",this.state.searchfield)
	}

	render()
	{
		const filterRobot=this.state.robot_in.filter(
			(i) =>
		{
			return i.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return(
				<div className="tc">
						<h1>Robofriends</h1>
						<Searchbox searchchange={this.onSearchChange}/>
						<ScrollBar>
							<CardList robots_cardList={filterRobot}/>
						</ScrollBar>
				</div>
		);
	}
}

export default App;
