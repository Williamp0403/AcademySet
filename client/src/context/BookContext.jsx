import { createContext, useContext } from "react"
import { useBook as useBookProvider } from "../hooks/useBook"

export const BookContext = createContext();

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook debe utilizarse dentro de BookProvider")
  }
  return context
};

export const BookProvider = ({ children }) => {
  const book = useBookProvider()

  return (
    <BookContext.Provider value={book}>
      {children}
    </BookContext.Provider>
  );
};