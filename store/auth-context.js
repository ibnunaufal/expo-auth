import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenthicate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenthicate(token) {
    console.log("inputting token "+token)
    setAuthToken(token);
  }
  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenthicate: authenthicate,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
