import React from 'react'
import { useTranslation } from 'react-i18next'
import Lang from '../../assets/icons/book-dictionary-education-svgrepo-com.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface ToggleLanguageProps {
    className?: string
}

export const ToggleLanguage = ({ className }: ToggleLanguageProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className!])}
        >
            <Lang />
        </Button>
    )
}
