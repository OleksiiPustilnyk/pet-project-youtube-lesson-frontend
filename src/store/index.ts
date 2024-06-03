import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth'
import assetSlice from './slice/assets'
import watchlistSlice from './slice/watchlist'

const store = configureStore({
    reducer: {
        auth: authReducer,
        assets: assetSlice,
        watchlist: watchlistSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
