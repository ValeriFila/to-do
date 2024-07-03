import './CreatedNoteCard.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { Button } from '@/shared/ui/Button/Button'
import { CustomCheckbox } from '@/shared/ui/CustomCheckbox/CustomCheckbox'
import { MdDeleteOutline } from "react-icons/md";

interface NoteCardProps {
    cardBody: {
        id: number,
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
            id={cardBody.id.toString()}
            className='note'
        >
            <p className={classNames('note__text', { 'note__text--crossed': fulfilled } )}>{cardBody.noteText}</p>
            <div className='note__bottom'>
                <div className='note__bottom__managing-area'>
                    <Button
                        onClick={onClickButton}
                    >
                        <MdDeleteOutline
                            size={'2rem'}
                        />
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
