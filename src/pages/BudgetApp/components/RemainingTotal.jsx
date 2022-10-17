import React, { useContext } from 'react';
import { StyledCurrencyBox } from '../../../styling/Styled';
import { AppContext } from '../context/AppContext';
import getTotalExpenses from '../utils/getTotalExpenses';

export default function RemainingBudget(){
    const { expenses, budget } = useContext(AppContext);

    return(
        // Calculates the remaining budget by subtracting the budget with the total expenses and displays it inside the span
        <StyledCurrencyBox>
            <span style={{fontWeight:"300"}}>Remaining: <span style={{fontWeight:"500"}}>{budget - getTotalExpenses(expenses)} sek</span></span>
        </StyledCurrencyBox>
    )
}