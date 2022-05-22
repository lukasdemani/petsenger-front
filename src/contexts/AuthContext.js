import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const LOCAL_STORAGE_KEY = "petsenger-token";
const persistedToken = localStorage.getItem(LOCAL_STORAGE_KEY);

export function AuthProvider({ children }) {
  const [nameToken, setNameToken] = useState(persistedToken);

  function signIn(nameToken) {
    setNameToken(nameToken);
    localStorage.setItem(LOCAL_STORAGE_KEY, nameToken);
  }

  function signOut() {
    setNameToken(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ nameToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
