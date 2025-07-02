import { createContext, useContext } from "react"
import { useLoan as useLoanProvider } from "../hooks/useLoan"

export const LoanContext = createContext();

export const useLoan = () => {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error("useLoan debe utilizarse dentro de LoanProvider")
  }
  return context
};

export const LoanProvider = ({ children }) => {
  const loan = useLoanProvider()

  return (
    <LoanContext.Provider value={loan}>
      {children}
    </LoanContext.Provider>
  );
};