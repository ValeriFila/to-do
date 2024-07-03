import { createSlice } from '@reduxjs/toolkit'

interface NotesSliceProps {
    date: string
}

const initialState: NotesSliceProps = {
    date: new Date().toISOString()
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.date = action.payload
        },
    },
})

export const { setDate } = notesSlice.actions
export default notesSlice.reducer
