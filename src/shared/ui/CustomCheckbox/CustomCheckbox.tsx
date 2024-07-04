import React from 'react'
import './CustomCheckbox.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'

interface CheckboxProps {
    onChange: () => void;
    checked: boolean;
}

export const CustomCheckbox = (props: CheckboxProps) => {
    const {
        onChange,
        checked
    } = props

    return (
        <input
            type='checkbox'
            className={classNames('custom-checkbox')}
            onChange={onChange}
            checked={checked}
        />
    )
}
