import React from 'react'
import { memo, useCallback } from 'react'
import { setNotes } from '@/features/model/storeSlices/notesSlice.ts'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { CreatedNoteCard } from '@/entities/CreatedNoteCard/CreatedNoteCard.tsx'

interface CreatedNoteProps {
    id: number
    title: string
}

export const CreatedNote = memo((props: CreatedNoteProps) => {
    const {
        id,
        title,
    } = props

    const dispatch = useAppDispatch()
    const notes = useAppSelector((state) => state.notes.lsNotes)

    const removeNote = useCallback((id: number) => {
        const notesArray = Object.entries(notes)
        const filteredArray = notesArray.filter((note) => {
            const i = +note[0]
            
            return i !== id
        })
        dispatch(setNotes({ ...Object.fromEntries(filteredArray) }))
    }, [dispatch, notes])

    const fulfillNote = useCallback((id: number) => {
        const targetNote = { [id]: { ...notes[id], fulfilled: !notes[id].fulfilled } }
        dispatch(setNotes({ ...notes, ...targetNote }))
    }, [dispatch, notes])

    return (
        <CreatedNoteCard
            cardBody={{
                id,
                noteText: title,
            }}
            onClickButton={() => removeNote(id)}
            onChangeCheckbox={() => fulfillNote(id)}
            fulfilled={notes[id].fulfilled}
        />
    )
})
