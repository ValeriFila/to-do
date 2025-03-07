import React from 'react'
import './CreationCard.scss'
import { Button } from '@/shared/ui/Button/Button'
import { RiStickyNoteAddLine } from "react-icons/ri";

interface CreationCardProps {
    remaining: string
    onClick: () => void
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    value: string
}

export const CreationCard = (props: CreationCardProps) => {
    const {
        remaining,
        onClick,
        onChange,
        value,
    } = props

    return (
        <div className='create-note'>
            <textarea
                placeholder='Новая заметка...'
                className='create-note__text-area'
                value={value}
                onChange={onChange}
            />
            <div className='create-note__bottom-part'>
                <p className='create-note__bottom-part__remaining'>{remaining}</p>
                <Button
                    onClick={onClick}
                >
                    <RiStickyNoteAddLine
                        size={'2rem'}
                    />
                </Button>
            </div>
        </div>
    )
}
