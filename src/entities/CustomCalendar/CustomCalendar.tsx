import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/nb'
import './CustomCalendar.scss'

moment.locale(localStorage.getItem('i18nextLng') || 'ru') // !!! подключить redux toolkit чтобы перерисовывать ui
const localizer = momentLocalizer(moment)

const events = [
    {
        title: 'Сделать пет-проект...',
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 2)),
    },
    {
        title: 'Убрать дома',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
    }
]

export const CustomCalendar = () => (
    <div className='calendar-body'>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 600 }}
        />
    </div>
)
