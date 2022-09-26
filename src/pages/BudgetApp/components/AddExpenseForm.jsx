import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import getTotalExpenses from '../utils/getTotalExpenses';
import { StyledFormButton, StyledFormDiv } from '../../../styling/Styled';

export default function AddExpenseForm(){
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const { budget, expenses } = useContext(AppContext);

    const onSubmit = (event) => {
        const totalExpenses = getTotalExpenses(expenses);
        event.preventDefault();
        // event.target.reset();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        if(expense.cost + totalExpenses <= budget){
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
        else {
            alert(`You went over budget by ${expense.cost + totalExpenses - budget} sek. You got ${budget - totalExpenses} sek left to spend.`)
        }
        // Clears form after an expense has been added
        setName('');
        setCost('');
    };

    return(
        <form onSubmit={onSubmit}>
            <StyledFormDiv>
                    <label for='name'>Name: </label>
                    <input
                        required='required'
                        type='text' id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}>
                    </input>
                    
                    <label for='cost'>Cost: </label>
                    <input
                        required='required'
                        type='text'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>
                    <StyledFormButton type='submit'>Save</StyledFormButton>
            </StyledFormDiv>
        </form>
    )
}