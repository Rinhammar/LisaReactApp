import React, { useState } from 'react';
import { StyledEditButton } from '../../../styling/Styled';

export default function EditBudget(props){
	// Takes props which were passed down from BudgetTotal
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<StyledEditButton
				type='button'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</StyledEditButton>
		</>
	);
};