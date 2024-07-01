import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Calendar.scss'

interface CalendarProps {
    className?: string
}

const Calendar = ({ className }: CalendarProps) => {

    return (
        <div className={classNames('Calendar', {}, [className!])}>
            calendar
        </div>
    )
}

export default Calendar
