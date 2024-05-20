import './App.css'
import LoginPage from './components/auth/login'
import Home from './components/home'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './utils/router/privateRouter'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route element={<PrivateRouter />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default App
