import { configureStore } from '@reduxjs/toolkit'
import switchLanguageReducer from '@/features/model/switchLanguageSlice'
import notesReducer from '@/features/model/notesSlice'

export const store = configureStore({
    reducer: {
        language: switchLanguageReducer,
        notes: notesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
