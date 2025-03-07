import { ToggleTheme } from '@/shared/ui/ToggleTheme/ToggleTheme.tsx'
import { useTranslation } from 'react-i18next'
import { ToggleLanguage } from '@/shared/ui/ToggleLanguage/ToggleLanguage.tsx'
import { CustomCalendar } from '@/widgets/CustomCalendar/CustomCalendar'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Calendar.scss'
import CalendarIcon from '@/shared/assets/icons/calendar-svgrepo-com.svg'

interface CalendarProps {
    className?: string
}

const Calendar = ({ className }: CalendarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames('Calendar', {}, [className!])}>
            <div className='Calendar__page-name'>
                <div
                    className={classNames('Calendar__page-name__label')}
                >
                    <CalendarIcon />
                    <div
                        className={classNames('Calendar__page-name__label__text')}
                    >
                        {t('To-Do Лист')}
                    </div>
                </div>
                <div
                    className={classNames('Calendar__page-name__settings')}
                >
                    <ToggleTheme />
                    <ToggleLanguage />
                </div>
            </div>
            <CustomCalendar />
        </div>
    )
}

export default Calendar
