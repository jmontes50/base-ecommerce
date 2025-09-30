import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Navbar from './modules/ui/Navbar'
import HomeView from './modules/Home/HomeView'
import CartView from './modules/Cart/CartView'
import RegisterView from './modules/Auth/RegisterView'
import NotFoundView from './modules/NotFound/NotFoundView'

const App = () => {
  return (
    // aquí podría estar BrowserRouter
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/register" element={<RegisterView />} />
        {/* 404, esta ruta tiene que estar al final */}
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
