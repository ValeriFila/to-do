import { useEffect, useMemo, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { setDate } from '@/features/model/dateToCreateNote.ts'
import { NoteModal } from '@/widgets/NoteModal/ui/NoteModal.tsx'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import 'moment/locale/nb'
import './CustomCalendar.scss'

export const CustomCalendar = () => {
    const dispatch = useAppDispatch()
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
        dispatch(setDate(slot.slots[0].toISOString()))
    }

    const myEvents = useMemo(() => {
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
                    onClose={() => setDetailedModal(false)}
                />
            }
        </div>
    )
}
