import moment from 'moment/moment'
import { getRange } from './getRange'

describe('Test getRange', () => {
    const range = (startDay: number, endDay: number) => {
        return [
            moment(new Date())
                .set('date', startDay),
            moment(new Date())
                .set('date', endDay),
        ]
    }

    test('Valid data in range of 3 days', () => {
        const r = range(1, 4)

        expect(Array.from(getRange({
            startDate: r[0],
            endDate: r[1],
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
        const r = range(1, 1)

        expect(Array.from(getRange({
            startDate: r[0],
            endDate: r[1],
            type: 'day'
        }).keys())).toEqual([])
    })
})
