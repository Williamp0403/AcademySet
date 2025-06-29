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

function App() {
  return (
    <UserProvider>
      <Toaster richColors/>
      <BrowserRouter>
          <Routes>

            // Contenido con Header
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/libros" element={<BooksPage/>}/>
              <Route path="/usuarios" element={<UsersPage/>}/>
              <Route path="/historial" element={<HistoryPage/>}/>
              <Route path='*' element={<NotFound404Page/>}/>
            </Route>
          
            // Contenido sin Header
            <Route element={<MinimalLayout />}>  
              <Route path='/crear-usuario' element={<RegisterUserPage/>}/>
            </Route>

          </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
