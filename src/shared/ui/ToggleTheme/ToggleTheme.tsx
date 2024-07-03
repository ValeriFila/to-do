import React from 'react'
import { CiDark } from 'react-icons/ci'
import { CiLight } from 'react-icons/ci'
import { useTheme } from '@/shared/lib/hooks'
import Theme from '@/shared/lib/types/themeType'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'

interface ToggleThemeProps {
    className?: string
}

export const ToggleTheme = ({ className }: ToggleThemeProps) => {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className!])}
        >
            { theme === Theme.WHITE ? (
                <CiDark
                    color={'var(--primary-event-color)'}
                    size={'3rem'}
                />
            ) : ( 
                <CiLight
                    color={'var(--primary-event-color)'}
                    size={'3rem'}
                />
            )}
        </Button>
    )
}
