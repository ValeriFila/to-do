import { useFetchDaysOffQuery } from '@/features/model/apiSlices/isDayOffApi/isDayOffApi.ts'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { DateCellWrapperProps } from 'react-big-calendar'
import './CustomDayWrapper.scss'

export const CustomDayWrapper = (props: DateCellWrapperProps) => {
    const {
        value,
    } = props

    const rbcToday = new Date(value).getDate().toString() +
        new Date(value).getMonth().toString() +
        new Date(value).getFullYear().toString() ===
        new Date().getDate().toString() +
        new Date().getMonth().toString() +
        new Date().getFullYear().toString()

    const response = useFetchDaysOffQuery({
        year: value.getFullYear().toString(),
        month: (value.getMonth() + 1).toString(),
    })

    const isDayOff = () => {
        const index = value.getDate() - 1

        if (response.data) return response.data[index] !== '0'

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
