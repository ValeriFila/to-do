import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '@/features/model/dateToCreateNote'
import switchLanguageReducer from '@/features/model/switchLanguageSlice'
import notesReducer from '@/features/model/notesSlice'

export const store = configureStore({
    reducer: {
        language: switchLanguageReducer,
        notes: notesReducer,
        date: dateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
