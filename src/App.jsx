import { useRecoilState, useRecoilValue } from 'recoil'
import { Link, Routes, Route } from 'react-router-dom'

import Home from '@pages/Home'
import Counter from '@pages/Counter'
import { userState, getFullName } from './store'
import withAuthLayout, {
  withNonAuthLayout
} from '@components/layouts/withLayout'

import '@styles/App.css'

function App () {
  const [user, setUser] = useRecoilState(userState)
  const fullName = useRecoilValue(getFullName)

  const onLogin = () => {
    setUser({
        isLoggedIn: true,
        userEmail: "tk@gmail.com",
        firstName: "Daria",
        lastName: "Andrei"
    });
  };

  return (
    <div className='app'>
      <header className='header'>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/account'>My Account</Link>
        <button onClick={onLogin}>Log In</button>
      </header>

      <div className='content'>
        {user.isLoggedIn ? (
          <p>{fullName} has been logged in.</p>
        ) : (
          <p>User is not logged in.</p>
        )}

        <Routes>
            {/* Anyone can see */}
            <Route 
                path='/' 
                exact 
                element={withNonAuthLayout(<Home />)} 
            />
            <Route
                path='/counter'
                exact
                element={withNonAuthLayout(<Counter />)}
            />

            {/* Authenticated */}
            <Route
                path='/settings'
                exact
                element={withAuthLayout(<Home />)}
            />
            <Route
                path='/account'
                exact
                element={withAuthLayout(<Counter />)}
            />
        </Routes>
      </div>
    </div>
  )
}

export default App
