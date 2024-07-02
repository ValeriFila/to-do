import './CreatedNoteCard.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { Button } from '@/shared/ui/Button/Button'
import { CustomCheckbox } from '@/shared/ui/CustomCheckbox/CustomCheckbox'
import DeleteButton from '@/shared/assets/icons/delete-2-svgrepo-com.svg'

interface NoteCardProps {
    cardBody: {
        id: string,
        noteText: string,
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
                <div className='note__bottom__managing-area'>
                    <Button
                        onClick={onClickButton}
                    >
                        <DeleteButton />
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
