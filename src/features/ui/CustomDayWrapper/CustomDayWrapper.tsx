import moment from 'moment'
import { DateCellWrapperProps } from 'react-big-calendar'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './CustomDayWrapper.scss'

interface CustomDayWrapperProps extends DateCellWrapperProps {
    monthDaysStatus?: string
}

export const CustomDayWrapper = (props: CustomDayWrapperProps) => {
    const {
        value,
        monthDaysStatus
    } = props

    const rbcToday = moment(value).isSame(new Date(), 'date')

    const isDayOff = () => {
        const index = moment(value).dayOfYear() - 1

        if (monthDaysStatus) {

            return monthDaysStatus[index] !== '0'
        }

        return false
    }

    return (
        <div className={classNames('rbc-day-bg', {
            rbcToday: rbcToday,
            isDayOff: isDayOff(),
        })}
        >

        </div>
    )
}
