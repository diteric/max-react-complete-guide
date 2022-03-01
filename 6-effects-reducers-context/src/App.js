import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginWithLocalStorage = () => {
    const userLoginLocalStorage = localStorage.getItem('isLoggedIn');
    console.log(userLoginLocalStorage);
    if (userLoginLocalStorage === '1') {
      setIsLoggedIn(true);
    }
  };

  useEffect(loginWithLocalStorage, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    // provide the auth context to by wrapping other components inside its provider.
    <AuthContext.Provider value={{ isLoggedIn: { isLoggedIn } }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
