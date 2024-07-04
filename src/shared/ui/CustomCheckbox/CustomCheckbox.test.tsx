import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CustomCheckbox } from './CustomCheckbox'

describe('Test components', () => {
    test('Input is in the document', () => {
        render(<CustomCheckbox
            onChange={() => console.log('hello from test')}
            checked={false}
        />)
        const input = screen.getByRole('checkbox')
        expect(input).toBeInTheDocument()
    })
})
