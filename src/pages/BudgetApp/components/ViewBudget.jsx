import React from 'react';

export default function ViewBudget(props){
	return (
		<>
			<span>Budget: {props.budget} sek</span>
			<button type='button' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};