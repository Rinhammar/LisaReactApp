import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import getTotalExpenses from '../utils/getTotalExpenses';
import { StyledButton, StyledFormDiv } from '../../../styling/Styled';

export default function AddExpenseForm(){
    const { dispatch } = useContext(AppContext);

    function capitaliseFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    let [name, setName] = useState('');
    const [cost, setCost] = useState('');
    // Using function to capitalise first letter of the name of the expense
    name = capitaliseFirstLetter(name);

    const { budget, expenses } = useContext(AppContext);

    const onSubmit = (event) => {
        const totalExpenses = getTotalExpenses(expenses);
        event.preventDefault();
        // Creates expense with a unique id, name from input and cost (only numbers) from input
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        // If the new expense and the total of expenses is less than or adds to equal of the budget, then add the expense
        if(expense.cost + totalExpenses <= budget){
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
        // If they override the budget, don't add the expense and fire and alert to let the user know how much it goes over the budget and how much of the budget is left
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
                        type='text'
                        id='name'
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
                    <StyledButton type='submit'>Save</StyledButton>
            </StyledFormDiv>
        </form>
    )
}