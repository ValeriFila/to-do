import React, { useMemo } from 'react'
import { useAppSelector } from '@/shared/lib/hooks'
import { CreatedNote, NewNote } from '@/features'
import './NotesSection.scss'

type Note = {
    id: string
    title: string
    start: Date
    fulfilled: boolean
}

export const NotesSection = () => {
    const notes  = useAppSelector((state) => state.notes.lsNotes)
    const createdNotes = useMemo(() => {
        if (notes) {
            const arrayNotes: [string, Note][] = Object.entries(notes)
            // console.log(arrayNotes)

            return arrayNotes.map((note, index) => {
                const id = note[0]
                const noteBody = note[1]

                return (
                    <CreatedNote
                        key={`note_${index.toString()}`}
                        id={id}
                        title={noteBody.title}
                        start={noteBody.start.getDate().toString()}
                    />
                )
            })
        }

        return null
    }, [notes])

    return (
        <div className='notes-page'>
            <div className='notes-page__notes-section'>
                {createdNotes}
                <NewNote />
            </div>
        </div>
    )
}
