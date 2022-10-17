import { createContext, useReducer } from "react";

// The AppReducer is in charge of creating the new state object based on the actions it receives
// The AppReducer accepts the global state (state) which gets passed in by react and an action (action) which gets passed in by the dispatch function
export const AppReducer = (state, action) => {
    switch(action.type){
        // Case to add expense. This is used inside the AddExpenseForm
        case 'ADD_EXPENSE':
            const mergePayloadWithCurrentState = () => {
                // Array with the expenses from the state
                let result = state.expenses;
                // Finds the object that has the same name as the new payload (the new expense that is being added)
                const findObject = result.find((stateObject) => {
                    return stateObject.name === action.payload.name
                })
                // If findObject is true (there is an expense with the same name as the new expense), create a foreach that comes through the objects and adds the costs together with the objects that have the same name.
                if(findObject){
                    result.forEach((stateObject) => {
                      if (stateObject.name === action.payload.name) {
                        stateObject.cost = stateObject.cost + action.payload.cost;
                      }
                    })
                }
                // If findobject is false (there isn't an expense with the same name as the new expense), push the new expense (payload) into the result array
                else{
                     result.push(action.payload)
                }
                // Returns previous state and expenses from the result array
                return {
                    ...state,
                    expenses: result,
                }
            }
            return mergePayloadWithCurrentState()
        // Case to delete the expense. This is used inside the ExpenseItem file
        case 'DELETE_EXPENSE':
            // Returns previous state and filters expenses based of if their id exists in the action.payload
            return {
                ...state,
                expenses: state.expenses.filter ((expense) => expense.id !== action.payload)
            }
            // Case to edit budget. This is used inside the BudgetTotal file 
        case 'EDIT_BUDGET':
            // Returns previous state and handles updating the budget based of the user's input
            return {
                ...state,
                budget: action.payload,
            }
        default:
            return state;
    }
}
// Array for initialState (can be empty)
const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: "Groceries", cost: 100},
        { id: 2, name: "Holiday", cost: 100},
        { id: 3, name: "Clothes", cost: 500},
    ],
};

// Using context in order to hold global state
export const AppContext = createContext();

// AppContext to pass state values to the app (so that we can use it anywhere. The AppProvider is in the Budget.js file to wrap the whole Budget App. )
export default function AppProvider(props) {
    // Using useReducer since it gives the current state and a function to update the state. Here it gives us a dispatch function which is being used to dispacth actions whenever we call it.
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
    <AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}
