import './index.css'
import { MainLayout } from "./layouts/MainLayout";
import { MinimalLayout } from "./layouts/MinimalLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import { HomePage } from "./pages/HomePage"
import { Header } from "./components/Header"
import { BooksPage } from "./pages/BooksPage"
import { UsersPage } from "./pages/UsersPage"
import { HistoryPage } from "./pages/HistoryPage"
import { UserProvider } from "./context/UserContext"
import { NotFound404Page } from './pages/NotFound404Page'
import { RegisterUserPage } from './pages/RegisterUserPage'
import { LoanPage } from './pages/LoanPage';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <UserProvider>
      <BookProvider>
        <Toaster richColors/>
        <BrowserRouter>
            <Routes>

              {/* Contenido con Header Principal */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/libros" element={<BooksPage/>}/>
                <Route path="/usuarios" element={<UsersPage/>}/>
                <Route path="/historial" element={<HistoryPage/>}/>
                <Route path='*' element={<NotFound404Page/>}/>
              </Route>
            
              {/* Contenido con Header Secundario */}
              <Route element={<MinimalLayout />}>  
                <Route path='/crear-usuario' element={<RegisterUserPage/>}/>
                <Route path='/prestamo-libro' element={<LoanPage/>}/>
              </Route>

            </Routes>
        </BrowserRouter>
      </BookProvider>
    </UserProvider>
  )
}

export default App
