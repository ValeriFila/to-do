import { CustomToolbar } from '@/widgets/CustomToolbar'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Calendar, momentLocalizer, ToolbarProps } from 'react-big-calendar'
import moment from 'moment'
import { setDate } from '@/features/model/dateToCreateNote'
import { NoteModal } from '@/widgets/NoteModal'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import 'moment/locale/nb'
import './CustomCalendar.scss'

export const CustomCalendar = memo(() => {
    const dispatch = useAppDispatch()
    const notes  = useAppSelector((store) => store.notes.lsNotes)
    const lng = useAppSelector((state) => state.language.language)
    const [isDetailedModal, setDetailedModal] = useState<boolean>(false)
    const [currentSlot, setCurrentSlot] = useState<Date[]>([])

    moment.locale(lng)
    const localizer = momentLocalizer(moment)

    const onSelectSlot = useCallback((slot: { action: string, slots: Date[] }) => {
        setDetailedModal(true)
        setCurrentSlot(slot.slots)
        dispatch(setDate(slot.slots[0].toISOString()))
    }, [isDetailedModal, currentSlot]) //?

    const myEvents = useMemo(() => {
        if (notes) return Object.values(notes)

        return []
    }, [notes])

    const components = () => {
        const component: { toolbar: any } = {
            toolbar: (toolbar: ToolbarProps) => CustomToolbar(toolbar),
        }

        return component
    }

    useEffect(() => {
        moment.locale(lng)
    }, [lng])

    return (
        <div className='calendar-body'>
            <Calendar
                selectable
                localizer={localizer}
                events={myEvents}
                onSelectSlot={onSelectSlot}
                onDrillDown={() => {
                }}
                components={components()}
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
})
