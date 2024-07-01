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

    // test('Input is in the document', () => {
    //     render(<Button />)
    //     const btn = screen.getByRole('button')
    //     expect(screen.queryByText('label')).toBeNull()
    //     fireEvent.click(btn)
    //     expect(screen.findByText('label')).toBeInTheDocument()
    //     fireEvent.click(btn)
    //     expect(screen.queryByText('label')).toBeNull()
    // })

    // test('Async test of the label', async () => {
    //     render(<Button
    //         onClick={() => console.log('hello from test')}
    //     />)
    //     screen.debug()
    //     const label = await screen.findByText(/smth/i, {}, { timeout: 2000 })
    //     expect(label).toBeInTheDocument()
    //
    //     // Вот так не работает, потому что стандартный таймаут 1000мс, а в Button.tsx было 2000мс
    //     // expect(await screen.findByText(/smth/i)).toBeInTheDocument()
    //
    //     screen.debug()
    // })
})

//Awaited<Type>
//Partial<Type>
//Required<Type>
//Readonly<Type>

//Record<Keys, Values>

//Omit<Type, Keys>
//Pick<Type, Keys>

//Exclude<UnionType, ExcludeMembers>
//Extract<Type, Union>
//NonNullable<Type>

//Parameters<Type>
//ConstructorParameters<Type>

//ReturnType<Type>

//Uppercase<StringType>
//Lowercase<StringType>
//Capitalize<StringType>
//Uncapitalize<StringType>

// interface Person {
//     name: string
//     surname: string
//     age: number
//     isMarried: boolean
//     address: {
//         city: string
//         street: string
//         house: number
//     }
// }
//
// type WeekDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
//
// type Weekends = Uppercase<Extract<WeekDays, 'saturday' | 'sunday'>>
//
// type PersonAddress = Pick<Person, 'address'>
//
// interface PersonFIO extends Required<Omit<Person, 'address' | 'isMarried' | 'age'>> {}
//
// const userFio: PersonFIO = {
//     name: 'Lera',
//     surname: 'Filatova',
// }
//
// const userAddress: PersonAddress = {
//     address: {
//         city: 'Spb',
//         street: 'smth',
//         house: 8,
//     }
// }
//
// const userAddress2: Person['address'] = {
//     city: 'Spb',
//     street: 'smth',
//     house: 8,
// }
