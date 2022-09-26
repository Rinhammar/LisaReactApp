import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import getTotalExpenses from '../utils/getTotalExpenses';
import { StyledCurrencyBox } from '../../../styling/Styled'; 

export default function ExpensesTotal(){
    const { expenses } = useContext(AppContext);

    return(
        <StyledCurrencyBox>
            <span>Expenses: {getTotalExpenses(expenses)} sek</span>
        </StyledCurrencyBox>
    )
}