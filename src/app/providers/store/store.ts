import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import dateReducer from '@/features/model/storeSlices/dateToCreateNoteSlice.ts'
import switchLanguageReducer from '@/features/model/storeSlices/switchLanguageSlice.ts'
import notesReducer from '@/features/model/storeSlices/notesSlice.ts'
import themeReducer from '@/features/model/storeSlices/themeSlice.ts'
import { rtkApi } from '@/shared/config/rtkApi/rtkApi'

export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        language: switchLanguageReducer,
        notes: notesReducer,
        date: dateReducer,
        theme: themeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rtkApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
