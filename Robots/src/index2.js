// Index.js 2
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';

import 'tachyons';
import {robotInfo} from './robot_info'
// Name should be same as used in export in robot_info.js...not necessary for defaultthough
//not used default hence in curly brackets.eg:-	
//import {robotInfo, dogs} from './robot_info'

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
				<div>	
					<CardList robots_cardList={robotInfo} />
				</div>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
