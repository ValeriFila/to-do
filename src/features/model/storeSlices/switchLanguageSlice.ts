import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SwitchLanguageState {
    language: string
}

const initialState: SwitchLanguageState = {
    language: localStorage.getItem('i18nextLng') || 'ru',
}

export const switchLanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
    },
})

export const { setLanguage } = switchLanguageSlice.actions

export default switchLanguageSlice.reducer
