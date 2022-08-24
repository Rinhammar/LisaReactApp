import { useState } from 'react';
import './App.css';
import NavBar from './navigation/NavBar';
import Routing from './navigation/NavCompRouting';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes.js';
import { StyledSwitch, PageContainer } from './Styled.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* Displays the NavBar components  */}
      <NavBar />
      <PageContainer fontFamily='Roboto, sans-serif'>
        <Routing />
        <StyledSwitch>
          <Switch 
            onChange={themeToggler}
            checked={theme === 'dark'}
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
