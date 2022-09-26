import React, { useContext } from 'react';
import { StyledCurrencyBox } from '../../../styling/Styled';
import { AppContext } from '../context/AppContext';
import getTotalExpenses from '../utils/getTotalExpenses';

export default function RemainingBudget(){
    const { expenses, budget } = useContext(AppContext);

    return(
        <StyledCurrencyBox>
            <span>Remaining: {budget - getTotalExpenses(expenses)} sek</span>
        </StyledCurrencyBox>
    )
}