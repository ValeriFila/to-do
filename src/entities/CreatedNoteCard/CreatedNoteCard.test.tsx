import { userEvent } from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CreatedNoteCard } from './CreatedNoteCard'

describe('Test components', () => {
    const user = userEvent.setup()
    const notes = {
        1: {
            end: "2024-07-08T21:00:00.000Z",
            fulfilled : true,
            id: 1,
            start: "2024-07-08T21:00:00.000Z",
            title: "Note 1",
        },
        2: {
            end: "2024-07-08T21:00:00.000Z",
            fulfilled : false,
            id: 2,
            start: "2024-07-08T21:00:00.000Z",
            title: "Note 2",
        }
    }

    test('Text become uncrossed', async () => {
        render(<CreatedNoteCard
            cardBody={{
                id: notes[1].id,
                noteText: notes[1].title,
            }}
            onClickButton={() => console.log()}
            onChangeCheckbox={() => console.log()}
            fulfilled={notes[1].fulfilled}
        />)
        const btn = screen.getByRole('button')
        const checkbox = screen.getByRole('checkbox')
        const noteText = screen.getByText(notes[1].title)
        expect(btn).toBeInTheDocument()
        expect(checkbox).toBeInTheDocument()
        expect(noteText).toHaveClass('note__text--crossed')
        await user.click(btn)
        expect(noteText).toHaveClass('note__text')
    })

    test('Text become crossed', async () => {
        render(<CreatedNoteCard
            cardBody={{
                id: notes[2].id,
                noteText: notes[2].title,
            }}
            onClickButton={() => console.log()}
            onChangeCheckbox={() => console.log()}
            fulfilled={notes[1].fulfilled}
        />)
        const btn = screen.getByRole('button')
        const checkbox = screen.getByRole('checkbox')
        const noteText = screen.getByText(notes[2].title)
        expect(btn).toBeInTheDocument()
        expect(checkbox).toBeInTheDocument()
        expect(noteText).toHaveClass('note__text')
        await user.click(btn)
        expect(noteText).toHaveClass('note__text--crossed')
    })
})
