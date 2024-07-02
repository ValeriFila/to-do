import moment from 'moment'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './NoteModal.scss'
import { Button } from '@/shared/ui/Button/Button.tsx'
import { NotesSection } from '@/widgets/NotesSection/NotesSection.tsx'

interface NoteModalProps {
    open: boolean,
    notes: {
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
                                ❌
                            </Button>
                        </div>
                        <div>
                            {getCurrentEvents().map((note) => (
                                <p
                                    key={note.title + note.end}
                                >
                                    {note.title}
                                </p>
                            ))}
                        </div>
                        <NotesSection />
                    </div>
                </div>

            )}
        </>
    )
}
