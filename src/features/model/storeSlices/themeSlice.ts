import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Theme from '@/shared/lib/types/themeType.ts'

export interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: localStorage.getItem('theme') as Theme || Theme.WHITE,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
