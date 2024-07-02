import moment from 'moment'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './NoteModal.scss'
import { Button } from '@/shared/ui/Button/Button.tsx'
import { NotesSection } from '@/widgets/NotesSection/NotesSection.tsx'
import { IoMdClose } from 'react-icons/io'

export interface NoteModalProps {
    open: boolean,
    notes: {
        id: number
        title: string
        start: Date
        end: Date
    }[]
    onClose: () => void
    slot: Date
}

export const NoteModal = (props: NoteModalProps) => {
    const {
        open,
        notes,
        onClose,
        slot
    } = props

    const getCurrentEvents = () => {
        return notes.reduce((accum: NoteModalProps['notes'], item) => {
            if (moment(slot).isBetween(item.start, item.end)) {
                accum.push(item)
            } else if (new Date(item.start).toLocaleDateString() === new Date(slot).toLocaleDateString()) {
                accum.push(item)
            }

            return accum
        }, [])
    }
    
    return (
        <>
            {open && (
                <div
                    className={classNames('NoteModal')}
                >
                    <div
                        className={classNames('NoteModal__custom-dialog')}
                    >
                        <div className={classNames('NoteModal__close-button')}>
                            <Button
                                type='button'
                                onClick={onClose}
                            >
                                <IoMdClose
                                    size={30}
                                />
                            </Button>
                        </div>
                        <NotesSection />
                    </div>
                </div>

            )}
        </>
    )
}
