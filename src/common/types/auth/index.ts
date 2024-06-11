import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IPropsLogin<
    TFieldValues extends FieldValues = LoginFormFields,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = RegisterFormFields,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IAuthState {
    user: any
    isLogged: boolean
    isLoading: boolean
}

interface IPublicUser {
    id: number | null
    firstName: string
    username: string
    email: string
    createdAt: string
    updateAt: string
    watchlist: [IWatchlist]
}

interface IWatchlist {
    id: number | null
    name: string
    assetId: string
    createdAt: string
    updateAt: string
    user: number | null
}

interface LoginFormFields {
    email: string
    password: string
}

interface RegisterFormFields {
    email: string
    password: string
    name?: string
    username?: string
    confirmPassword?: string
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    email: string
    password: string
    firstName: string
    username: string
}
