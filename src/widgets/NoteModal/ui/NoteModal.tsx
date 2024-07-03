import React, { useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { classNames } from '@/shared/lib/classNames/classNames'
import './NoteModal.scss'
import { Button } from '@/shared/ui/Button/Button'
import { NotesSection } from '@/widgets/NotesSection'
import { CustomPopupWrapper } from '@/shared/ui/CustomPopupWrapper/CustomPopupWrapper'

export interface NoteModalProps {
    open: boolean
    onClose: () => void
}

export const NoteModal = (props: NoteModalProps) => {
    const {
        open,
        onClose,
    } = props
    const ref = useRef(null)
    
    return (
        <>
            {open && (
                <CustomPopupWrapper
                    onClose={onClose}
                    innerElementRef={ref}
                >
                    <div
                        className={classNames('NoteModal__custom-dialog')}
                        ref={ref}
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
                </CustomPopupWrapper>

            )}
        </>
    )
}
