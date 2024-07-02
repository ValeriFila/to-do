import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Lang from '../../assets/icons/book-dictionary-education-svgrepo-com.svg'
import { setLanguage } from '@/features/model/switchLanguageSlice.ts'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface ToggleLanguageProps {
    className?: string
}

export const ToggleLanguage = ({ className }: ToggleLanguageProps) => {
    const lng = useAppSelector((state) => state.language.language)
    const dispatch = useAppDispatch()
    const { t, i18n } = useTranslation()

    const toggle = useCallback(async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        dispatch(setLanguage(i18n.language))
    }, [lng])

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className!])}
        >
            <Lang />
        </Button>
    )
}
