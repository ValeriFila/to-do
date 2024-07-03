import moment from 'moment/moment'
import React, { memo, useCallback, useMemo } from 'react'
import { useAppSelector } from '@/shared/lib/hooks'
import { CreatedNote, NewNote } from '@/features'
import './NotesSection.scss'

interface Note {
    id: number
    title: string
    start: Date
    end: Date
    fulfilled: boolean
}

export const NotesSection = memo(() => {
    const notes  = useAppSelector((state) => state.notes.lsNotes)
    const date = useAppSelector((state) => state.date.date)

    const getCurrentEvents = useCallback(() => {
        return Object.values(notes).reduce((accum: Record<number, Note>, item) => {
            if (moment(date).isBetween(item.start, item.end)) {
                accum[item.id] = item
            } else if (new Date(item.start).toLocaleDateString() === new Date(date).toLocaleDateString()) {
                accum[item.id] = item
            }

            return accum
        }, {})
    }, [date, notes])

    const createdNotes = useMemo(() => {
        if (notes) {
            const arrayNotes: [string, Note][] = Object.entries(getCurrentEvents())

            return arrayNotes.map(([id, noteBody], index) => {

                return (
                    <CreatedNote
                        key={`note_${index.toString()}`}
                        id={id}
                        title={noteBody.title}
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
})
