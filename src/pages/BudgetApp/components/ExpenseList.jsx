import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import { StyledExpenseList } from '../../../styling/Styled';

export default function ExpenseList(){
    const { expenses } = useContext(AppContext);
    
    return(
        <>
            <StyledExpenseList>
                {expenses.map(((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                )))}
            </StyledExpenseList>
        </>
    )
}