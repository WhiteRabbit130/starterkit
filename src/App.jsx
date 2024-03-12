import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Counter from '@pages/Counter';
import withAuthLayout, { withNonAuthLayout } from './components/layouts/withLayout';

import '@styles/App.css';

function App() {
const [isLoggedIn, setLogIn] = useState(false);

  const onLogin = (e) => {
    setLogIn(true);
  }

  return (
    <div className="app">
      <header className="header">
        <Link to="/" >Home</Link>
        <Link to="/counter" >Counter</Link>
        <Link to="/settings" >Settings</Link>
        <Link to="/account" >My Account</Link>
        <button onClick={onLogin}>Log In</button>
      </header>

      <div className="content">
        {isLoggedIn 
          ? <p>User has been logged in.</p>
          : <p>User is not logged in.</p> 
        }

        <Routes>
          {/* Anyone can see */}
          <Route path='/' exact element={withNonAuthLayout(<Home />)} />
          <Route path='/counter' exact element={withNonAuthLayout(<Counter />)} />

          {/* Authenticated */}
          <Route path='/settings' exact element={withAuthLayout(<Home />, isLoggedIn)} />
          <Route path='/account' exact element={withAuthLayout(<Counter />, isLoggedIn)} />        
         </Routes>
      </div>
    </div>
  );
}

export default App;
