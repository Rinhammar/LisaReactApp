import React from 'react';
import { PageHeader, BudgetContainer, StyledBudgetContainer } from "../../styling/Styled.jsx";
import BudgetTotal from './components/BudgetTotal';
import RemainingBudget from './components/RemainingTotal';
import ExpensesTotal from './components/ExpensesTotal';
import ExpenseList from './components/ExpenseList.jsx';
import AddExpenseForm from './components/AddExpenseForm.jsx';
import AppProvider from './context/AppContext';
import GaugeChart from './components/GaugeChart.jsx';
import BarChart from './components/BarChart.jsx';

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
				<div style={{paddingTop:"50px"}}>
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