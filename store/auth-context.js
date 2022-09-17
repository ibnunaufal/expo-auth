import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

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
    AsyncStorage.setItem('token', token)
  }
  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token')
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
