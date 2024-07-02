import React, { useEffect, useState } from 'react'
import { setNotes } from '../../model/notesSlice.ts'
import { CreationCard } from '@/entities/CreationCard/CreationCard.tsx'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'

export const NewNote = () => {
    const dispatch = useAppDispatch()
    const notes = useAppSelector((state) => state.notes.lsNotes)
    const [note, setNote] = useState('')
    const [remain, setRemain] = useState(200)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [dispatch, notes])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 200) {
            setNote(e.target.value)
            setRemain(200 - e.target.value.length)
        }
    }
    const createNote = () => {
        if (note.trim().length > 0) {
            const id = Date.now()
            dispatch(setNotes({ ...notes,
                [id]: {
                    id,
                    title: note,
                    start: new Date(),
                    end: new Date(new Date().setHours(new Date().getHours() + 1)),
                    fulfilled: false,
                },
            }))
            setNote('')
            setRemain(200)
        }
    }

    return (
        <CreationCard
            remaining={remain.toString()}
            onClick={createNote}
            onChange={(e) => handleChange(e)}
            value={note}
        />
    )
}
