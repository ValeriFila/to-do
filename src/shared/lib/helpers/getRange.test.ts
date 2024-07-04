import moment from 'moment/moment'
import { useMemo } from 'react'
import { getRange } from './getRange'

describe('Test getRange', () => {
    test('Valid data in range of 3 days', () => {
        const range = () => {
            return [
                moment(new Date())
                    .set('date', 1),
                moment(new Date())
                    .set('date', 4),
            ]
        }

        expect(Array.from(getRange({
            startDate: range()[0],
            endDate: range()[1],
            type: 'day'
        }).keys())).toEqual([
            moment(new Date())
                .set('date', 1)
                .format('YYYY-MM-DD'),
            moment(new Date())
                .set('date', 2)
                .format('YYYY-MM-DD'),
            moment(new Date())
                .set('date', 3)
                .format('YYYY-MM-DD'),
        ])
    })

    test('Valid data in range of 1 days', () => {
        const range = () => {
            return [
                moment(new Date())
                    .set('date', 1),
                moment(new Date())
                    .set('date', 1),
            ]
        }

        expect(Array.from(getRange({
            startDate: range()[0],
            endDate: range()[1],
            type: 'day'
        }).keys())).toEqual([])
    })
})
