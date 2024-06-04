import { createSlice } from '@reduxjs/toolkit'
import { getPublicUser, loginUser, registerUser } from '../../thunks/auth'

const initialState: any = {
    user: {
        id: null,
        firstName: '',
        username: '',
        email: '',
        createdAt: '',
        updateAt: '',
        watchlist: [
            {
                id: null,
                name: '',
                assetId: '',
                createdAt: '',
                updateAt: '',
                user: null,
            },
        ],
    },
    isLogged: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    },
})

export default authSlice.reducer
