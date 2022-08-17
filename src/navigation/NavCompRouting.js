import { Route, Routes } from 'react-router-dom';
import navItems from './navItems';

  function NavComponentsRouting(){
    const navComponents = navItems.map(({to, element}) => <Route exact path={to} element={element}/>);
    return (
      <>
        <Routes>
          {navComponents}
        </Routes>
      </>
    )
  }

  export default NavComponentsRouting;