import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import './Button.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
    children?: React.ReactNode
    onClick: () => void
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        onClick
    } = props

    return (
        <button
            type='button'
            onClick={onClick}
            className={classNames('', {}, [className!, theme!])}
        >
            {children}
        </button>
    )
}
