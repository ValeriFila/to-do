import { classNames } from './classNames'

describe('classNamesTest', () => {
    test('Все значения пустые', () => {
        expect(classNames('', {}, [])).toBe('')
    })
    test('Есть только cls', () => {
        expect(classNames('smthClass', {}, [])).toBe('smthClass')
    })
    test('Есть только mods', () => {
        expect(classNames('', { active: true }, [])).toBe('active')
    })
    test('Есть только additional', () => {
        expect(classNames('', {}, ['clear'])).toBe('clear')
    })
    test('Есть все значения', () => {
        expect(classNames('smth', { active: true }, ['clear'])).toBe('smth clear active')
    })
})
