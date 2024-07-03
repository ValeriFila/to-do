import { setTheme } from '@/features/model/themeSlice'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import Theme from '@/shared/lib/types/themeType'

interface UseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector((store) => store.theme.theme)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.WHITE : Theme.DARK
        dispatch(setTheme(newTheme))
        localStorage.setItem('theme', newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
