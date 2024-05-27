import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IPropsLogin<
    TFieldValues extends FieldValues = LoginFormFields,
    // TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = RegisterFormFields,
    // TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IAuthState {
    user: IPublicUser
    isLogged: boolean
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
