import './App.css';
import NavBar from './navigation/NavBar';
import Routing from './navigation/NavCompRouting';

function App() {
  return (
    <>
    {/* Displays the NavBar components  */}
      <NavBar />
      <div className="container">
        <Routing />
      </div>
    </>
  )
}

export default App;
