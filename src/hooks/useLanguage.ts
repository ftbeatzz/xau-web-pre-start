import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
	const { i18n } = useTranslation()

	const currentLanguage = i18n.language

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language)
	}

	return {
		currentLanguage,
		changeLanguage,
	}
}
