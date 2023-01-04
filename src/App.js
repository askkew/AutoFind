import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home } from './components/home';
import Topbar from './components/topbar';
import { Newcars } from './components/newcars';
import { Usedcars } from './components/usedcars';
import { About } from './components/about';
import { Account } from './components/account';
import { Contact } from './components/contact';
import { Budget } from './components/budget';
import { Signinsignup } from './components/signinsignup';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newcars' element={<Newcars />} />
          <Route path='/usedcars' element={<Usedcars />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signinsignup' element={<Signinsignup />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;