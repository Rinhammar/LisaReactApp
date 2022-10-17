import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import getTotalExpenses from '../utils/getTotalExpenses';
import { StyledCurrencyBox } from '../../../styling/Styled'; 

export default function ExpensesTotal(){
    const { expenses } = useContext(AppContext);

    return(
        // Gets the total expenses from the getTotalExpenses function and displays it inside the span
        <StyledCurrencyBox>
            <span style={{fontWeight:"300"}}>Expenses: <span style={{fontWeight:"500"}}> {getTotalExpenses(expenses)} sek</span> </span>
        </StyledCurrencyBox>
    )
}