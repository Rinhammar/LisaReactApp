import React from 'react';
import { StyledEditButton } from '../../../styling/Styled';

export default function ViewBudget(props){
	return (
		<>
			<span style={{paddingRight: '5px', fontWeight:"300"}}>Budget: <span style={{fontWeight:"500"}}>{props.budget} sek</span></span>
			<StyledEditButton type='button' onClick={props.handleEditClick}>
				Edit
			</StyledEditButton>
		</>
	);
};