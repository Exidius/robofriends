import React from 'react';

const Card = ({id,name,email}) => {
	return(
		<div className='bg-light-blue dib br2 pa1 ma1 grow shadow-4 bw2'>
			<img alt='portrait' src={'https://robohash.org/'+name+'?size=150x150'} />
			<div>
			<h2> {name}</h2>
			<p> {email} </p>
			</div> 
		</div>
		);
}

export default Card; 