import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLanguageOutline } from 'react-icons/io5'
import { setLanguage } from '@/features/model/storeSlices/switchLanguageSlice.ts'
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
            <IoLanguageOutline
                color={'var(--primary-event-color)'}
                size={'3rem'}
            />
        </Button>
    )
}
