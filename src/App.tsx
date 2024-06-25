import HomePage from './pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './utils/router/privateRouter'
import AuthRootPage from './pages/auth/AuthRootPage'
import { ColorModeContext, useMode } from './theme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import LayoutComponent from './components/layout/LayoutComponent'
import WatchlistPage from './pages/watchlist/WatchlistPage'
import NewsPage from './pages/news/NewsPage'
import SettingsPage from './pages/settings/SettingsPage'
import SingleAssetPage from './pages/single-asset/SingleAssetPage'

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <div className="app">
                    <Routes>
                        <Route element={<LayoutComponent />}>
                            <Route element={<PrivateRouter />}>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/watchlist"
                                    element={<WatchlistPage />}
                                />
                                <Route path="/news" element={<NewsPage />} />
                                <Route
                                    path="/settings"
                                    element={<SettingsPage />}
                                />
                                <Route
                                    path="/single/:id"
                                    element={<SingleAssetPage />}
                                />
                            </Route>
                            <Route path="login" element={<AuthRootPage />} />
                            <Route path="register" element={<AuthRootPage />} />
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
