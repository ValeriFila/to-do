import { NoteModal } from '@/widgets/NoteModal/ui/NoteModal.tsx'
import { useEffect, useMemo, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import 'moment/locale/nb'
import './CustomCalendar.scss'

// const myEvents = [
//     {
//         title: 'Сделать пет-проект...',
//         start: new Date(),
//         end: new Date(new Date().setHours(new Date().getHours() + 2)),
//     },
//     {
//         title: 'Сделать пет-проект...',
//         start: new Date(),
//         end: new Date(new Date().setHours(new Date().getHours() + 3)),
//     },
//     {
//         title: 'Сделать пет-проект...',
//         start: new Date(),
//         end: new Date(new Date().setHours(new Date().getHours() + 4)),
//     },
//     {
//         title: 'Убрать дома',
//         start: new Date(new Date().setDate(new Date().getDate() + 1)),
//         end: new Date(new Date().setHours(new Date().getHours() + 1)),
//     }
// ]

export const CustomCalendar = () => {
    const notes  = useAppSelector((store) => store.notes.lsNotes)
    const [isDetailedModal, setDetailedModal] = useState<boolean>(false)
    const [currentSlot, setCurrentSlot] = useState<Date[]>([])

    const lng = useAppSelector((state) => state.language.language)
    moment.locale(lng)
    const localizer = momentLocalizer(moment)

    useEffect(() => {
        moment.locale(lng)
    }, [lng])

    const onSelectSlot = (slot: { action: string, slots: Date[] }) => {
        setDetailedModal(true)
        setCurrentSlot(slot.slots)
    }

    const myEvents = useMemo(() => {
        console.log('notes', notes)
        if (notes) return Object.values(notes)

        return []
    }, [notes])

    return (
        <div className='calendar-body'>
            <Calendar
                selectable
                localizer={localizer}
                events={myEvents}
                onSelectSlot={onSelectSlot}
                onDrillDown={() => {
                }}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 600 }}
            />
            {isDetailedModal &&
                <NoteModal
                    open={isDetailedModal}
                    notes={myEvents}
                    onClose={() => setDetailedModal(false)}
                    slot={currentSlot[0]}
                />
            }
        </div>
    )
}
