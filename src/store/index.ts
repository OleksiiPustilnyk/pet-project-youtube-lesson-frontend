import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth'
import assetSlice from './slice/assets'
import watchlistSlice from './slice/watchlist'
import newsSlice from './slice/news'

const store = configureStore({
    reducer: {
        auth: authReducer,
        assets: assetSlice,
        watchlist: watchlistSlice,
        news: newsSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
