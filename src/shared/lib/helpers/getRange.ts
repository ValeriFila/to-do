import moment, { Moment } from 'moment'

interface Range {
    startDate: Moment
    endDate: Moment
    type: moment.unitOfTime.Diff
}

export const getRange = (props: Range): Map<string, number> => {
    const {
        startDate,
        endDate,
        type
    } = props

    const fromDate = moment(startDate)
    const toDate = moment(endDate)
    const diff = toDate.diff(fromDate, type)
    const range = new Map()
    const format = 'YYYY-MM-DD'

    for (let i = 0; i < diff; i++) {
        range.set(moment(startDate).add(i, type).format(format), i)
    }

    return range
}
