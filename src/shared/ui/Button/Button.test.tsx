import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Test components', () => {
    test('Button is in the document', () => {
        render(<Button
            onClick={() => console.log('hello from test')}
        />)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })

    test('Input is not in the document', () => {
        render(<Button
            onClick={() => console.log('hello from test')}
        />)
        const btn = screen.queryByRole('input')
        expect(btn).toBeNull()
    })
})
