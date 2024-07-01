import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './NotFoundPage.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames('NotFoundPage', {}, [className!])}>
            {t('Страница не найдена')}
        </div>
    )
}

export default NotFoundPage
