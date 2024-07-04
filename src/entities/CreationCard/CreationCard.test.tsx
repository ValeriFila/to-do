import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CreationCard } from './CreationCard'

describe('Test components', () => {
        test('Render components', () => {
        render(<CreationCard
            remaining={'200'}
            onClick={() => console.log()}
            onChange={() => console.log()}
            value={'New note...'}
        />)
        const btn = screen.getByRole('button')
        const textArea = screen.getByText('New note...')
        expect(btn).toBeInTheDocument()
        expect(textArea).toBeInTheDocument()
    })
})
