import './App.css';
import NavBar from './NavBar';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Budget from './pages/Budget';

// Function which let's us switch between different pages
function App() {
  let component
  switch (window.location.pathname) {   // Finds the pathname in the url
    case "/":   // http://localhost:3000/
      component = <Home />    // Displays whatever is in Home.js
      break
    case "/quiz-app":   // http://localhost:3000/quiz-app
      component = <Quiz />
      break
     case "/budget-management-app" :    // http://localhost:3000/budget-management-app
      component = <Budget />
      break
      default:
      component = <Home />
  }
  return (
    <>
    {/* Displays the NavBar components  */}
      <NavBar />
      {/* Displays whichever component (Home, Quiz or Budget) has been assigned to the variable "component" */}
      {component} 
    </>
  )
}

export default App;
