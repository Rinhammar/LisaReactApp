import React from 'react';
import { PageHeader, BudgetContainer, StyledBudgetContainer } from "../../styling/Styled";
import BudgetTotal from './components/BudgetTotal';
import RemainingBudget from './components/RemainingTotal';
import ExpensesTotal from './components/ExpensesTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import AppProvider from './context/AppContext';
import GaugeChart from './components/charts/GaugeChart';
import BarChart from './components/charts/BarChart';

export default function Budget() {
    return (
		<AppProvider>
        	<PageHeader>Budget Management App</PageHeader>
        	<BudgetContainer>
				{/* <h1>My Budget Planner</h1> */}
				<GaugeChart />
				<StyledBudgetContainer>
					<BudgetTotal/>
					<RemainingBudget />
					<ExpensesTotal />
				</StyledBudgetContainer>
				<div style={{paddingTop:"75px"}}>
					<BarChart />
				</div>
				<div style={{paddingTop:"25px"}}>
					<h3>Expenses</h3>
					<ExpenseList />
				</div>
				
				<div style={{paddingTop:"25px"}}>
					<h3>Add Expense</h3>
					<AddExpenseForm />
				</div>
    		</BudgetContainer> 
		</AppProvider>
    )
}