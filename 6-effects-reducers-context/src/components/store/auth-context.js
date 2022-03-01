import React from 'react';

// AuthContext is not a component, but it contains a component.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
