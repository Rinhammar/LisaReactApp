import { useState } from 'react';
import './App.css';
import NavBar from './navigation/NavBar';
import Routing from './navigation/NavCompRouting';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes.js';
import { StyledSwitch, PageContainer } from './Styled.jsx';

function App() {
  const LIGHT = 'light';
  const DARK = 'dark';

  const [theme, setTheme] = useState(LIGHT);

  const themeToggler = () => {
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT)
  }
  return (
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      {/* Displays the NavBar components  */}
      <NavBar />
      <PageContainer fontFamily='Roboto, sans-serif'>
        <Routing />
        <StyledSwitch>
          <Switch 
            onChange={themeToggler}
            checked={theme === DARK}
            onColor='#234a5c'
            offColor='#cea6d9'
            checkedIcon= {false}
            uncheckedIcon={false}>
          </Switch>
          </StyledSwitch>
      </PageContainer>
    </ThemeProvider>
  )
}

export default App;
