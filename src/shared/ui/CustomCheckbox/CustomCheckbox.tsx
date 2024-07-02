import './CustomCheckbox.scss'
import React, { FC } from 'react'

interface Checkbox {
    onChange: () => void;
    checked: boolean;
}

export const CustomCheckbox: FC<Checkbox> = ({ onChange, checked }) => {
    return (
        <input
            type='checkbox'
            className='custom-checkbox'
            onChange={onChange}
            checked={checked}
        />
    )
}
