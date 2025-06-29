import { createContext, useContext } from "react"
import { useUser as useUserProvider } from "../hooks/useUser"

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe utilizarse dentro de uSErovider")
  }
  return context
};

export const UserProvider = ({ children }) => {
  const user = useUserProvider()

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};