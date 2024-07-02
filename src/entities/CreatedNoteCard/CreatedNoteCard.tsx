import './CreatedNoteCard.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { Button } from '@/shared/ui/Button/Button'
import { CustomCheckbox } from '@/shared/ui/CustomCheckbox/CustomCheckbox'

interface NoteCardProps {
    cardBody: {
        id: string,
        noteText: string,
        creationDate: string
    }
    onClickButton: () => void
    onChangeCheckbox: () => void
    fulfilled: boolean
}

export const CreatedNoteCard = (props: NoteCardProps) => {
    const {
        cardBody,
        onClickButton,
        onChangeCheckbox,
        fulfilled,
    } = props

    return (
        <div
            id={cardBody.id}
            className='note'
        >
            <p className={classNames('note__text', { 'note__text--crossed': fulfilled } )}>{cardBody.noteText}</p>
            <div className='note__bottom'>
                <p className='note__bottom__date'>{cardBody.creationDate}</p>
                <div className='note__bottom__managing-area'>
                    <Button
                        onClick={onClickButton}
                    >
                        УДАЛИТЬ
                    </Button>
                    <CustomCheckbox
                        onChange={onChangeCheckbox}
                        checked={fulfilled}
                    />
                </div>
            </div>
        </div>
    )
}
