import Quiz from '../pages/QuizApp/Quiz';
import Home from '../pages/Home';
import Budget from '../pages/BudgetApp/Budget';

const navItems = [
    { to: '/', element: <Home />, name: 'Home'},
    { to: '/quiz-app', element: <Quiz />, name: 'Quiz App' },
    { to: '/budget-management-app', element: <Budget />, name: 'Budget Management App' }
  ]

export default navItems;