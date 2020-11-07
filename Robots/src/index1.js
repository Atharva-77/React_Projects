// Index.js 1
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Card';
import CardList from './CardList'
import 'tachyons';
import {robotInfo} from './robot_info'
// Name should be same as used in export in robot_info.js...not necessary for defaultthough
//not used default hence in curly brackets.eg:-	
//import {robotInfo, dogs} from './robot_info'

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
				<div>	
					< Cards idd={robotInfo[0].id} name={robotInfo[0].name} email={robotInfo[0].email}/>
					< Cards idd={robotInfo[1].id} name={robotInfo[1].name} email={robotInfo[1].email}/>
					< Cards idd={robotInfo[2].id} name={robotInfo[2].name} email={robotInfo[2].email}/>
				</div>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
