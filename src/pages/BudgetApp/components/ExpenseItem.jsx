import React, { useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { StyledExpenseItemList, StyledCostDiv, StyledCostSpan, StyledDeleteIcon } from '../../../styling/Styled'

export default function ExpenseItem(props){
    const { dispatch } = useContext(AppContext);
    // Calls to delete the expense (fron AppContext). Matches the payload with the correct id.
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }
    return(
        <StyledExpenseItemList>
            {props.name} 
            <StyledCostDiv>
                <StyledCostSpan>{props.cost} sek</StyledCostSpan>
                <StyledDeleteIcon><TiDelete onClick={handleDeleteExpense} size='1.5em'></TiDelete></StyledDeleteIcon>
            </StyledCostDiv>
        </StyledExpenseItemList>
    )
}