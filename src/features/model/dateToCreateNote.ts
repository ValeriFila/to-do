import { createSlice } from '@reduxjs/toolkit'

interface NotesSliceProps {
    date: Date
}

const initialState: NotesSliceProps = {
    date: new Date()
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
