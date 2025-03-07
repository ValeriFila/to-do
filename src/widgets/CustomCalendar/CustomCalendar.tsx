import React from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import 'moment/locale/nb'
import { Calendar, DateCellWrapperProps, momentLocalizer, ToolbarProps } from 'react-big-calendar'
import { getRange } from '@/shared/lib/helpers/getRange.ts'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { useFetchDaysOffQuery } from '@/features/model/apiSlices/isDayOffApi/isDayOffApi.ts'
import { setDate } from '@/features/model/storeSlices/dateToCreateNoteSlice.ts'
import { CustomDayWrapper } from '@/features/ui/CustomDayWrapper/CustomDayWrapper.tsx'
import { PageLoader } from '@/widgets/PageLoader'
import { CustomToolbar } from '@/widgets/CustomToolbar'
import { NoteModal } from '@/widgets/NoteModal'
import './CustomCalendar.scss'

export const CustomCalendar = memo(() => {
    const dispatch = useAppDispatch()
    const notes  = useAppSelector((store) => store.notes.lsNotes)
    const lng = useAppSelector((state) => state.language.language)
    const [actualDate, setActualDate] = useState<Date>(new Date())
    const [isDetailedModal, setDetailedModal] = useState<boolean>(false)
    const [currentSlot, setCurrentSlot] = useState<Date[]>([])

    moment.locale(lng)
    const localizer = momentLocalizer(moment)

    const format = 'YYYYMMDD'

    const dates = useMemo(() => {
        return [
            moment(actualDate)
                .subtract(1, 'months')
                .set('date', 1),
            moment(actualDate)
                .add(1, 'months')
                .endOf('month')
        ]
    }, [actualDate])

    const { data, isFetching } = useFetchDaysOffQuery({
        date1: dates[0].format(format),
        date2: dates[1].format(format)
    })

    const onSelectSlot = useCallback((slot: { action: string, slots: Date[] }) => {
        setDetailedModal(true)
        setCurrentSlot(slot.slots)
        dispatch(setDate(slot.slots[0].toISOString()))
    }, [])

    const myEvents = useMemo(() => {
        if (notes) return Object.values(notes)

        return []
    }, [notes])

    const components = () => {
        const range = getRange({
            startDate: dates[0],
            endDate: dates[1],
            type: 'day'
        })

        return {
            toolbar: (toolbar: ToolbarProps) => CustomToolbar(toolbar),
            dateCellWrapper: (props: DateCellWrapperProps) => CustomDayWrapper({
                monthDaysStatus: data!,
                datesRange: range,
                ...props
            }),
        }
    }

    useEffect(() => {
        moment.locale(lng)
    }, [lng])

    return (
        <div className='calendar-body'>
            {isFetching && (
                <PageLoader className={'calendar-body__loader'}/>
            )}
            <Calendar
                selectable
                localizer={localizer}
                events={myEvents}
                onSelectSlot={onSelectSlot}
                onDrillDown={() => {
                }}
                components={components()}
                onNavigate={(newDate) => {
                    setActualDate(newDate)
                }}
                startAccessor='start'
                endAccessor='end'
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
