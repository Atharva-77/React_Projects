import React from 'react';

const SearchBox= ({yo,searchchange})=>
{

	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search here..'
			// value={yo}
			onChange={searchchange}
			/>
			{/* {console.log(searchchange)} */}
		{/*<div> yooo{robot_in}</div>*/}
		</div>

		);
} 
export default SearchBox;
// var a=1;
// export const a;