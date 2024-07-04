import moment from 'moment'
import { DateCellWrapperProps } from 'react-big-calendar'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './CustomDayWrapper.scss'

interface CustomDayWrapperProps extends DateCellWrapperProps {
    monthDaysStatus: string
    datesRange: Map<string, string>
}

export const CustomDayWrapper = (props: CustomDayWrapperProps) => {
    const {
        value,
        monthDaysStatus,
        datesRange
    } = props

    const rbcToday = moment(value).isSame(new Date(), 'date')

    const isDayOff = () => {
        const index = datesRange.get(moment(value).format('YYYY-MM-DD'))!

        if (monthDaysStatus) return monthDaysStatus[+index] !== '0'

        return false
    }

    return (
        <div className={classNames('rbc-day-bg', {
            rbcToday: rbcToday,
            isDayOff: isDayOff(),
        })}
        />
    )
}
