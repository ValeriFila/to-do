import { createSlice } from '@reduxjs/toolkit'

interface NotesState {
    id: number
    title: string
    start: Date
    end: Date
    fulfilled: boolean
}

const notes = localStorage.getItem('notes')

const lsNotes: Record<number, NotesState> = !notes ? {} : { ...JSON.parse(notes) }

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        lsNotes,
    },
    reducers: {
        setNotes: (state, action) => {
            state.lsNotes = action.payload
        },
    },
})

export const { setNotes } = notesSlice.actions
export default notesSlice.reducer
