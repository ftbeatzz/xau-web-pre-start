import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Импорт переводов
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
import de from './locales/de.json'
import it from './locales/it.json'
import fr from './locales/fr.json'
import kk from './locales/kk.json'
import tr from './locales/tr.json'
import pl from './locales/pl.json'
import cs from './locales/cs.json'

const resources = {
	en: {
		translation: en,
	},
	ru: {
		translation: ru,
	},
	es: {
		translation: es,
	},
	pt: {
		translation: pt,
	},
	de: {
		translation: de,
	},
	it: {
		translation: it,
	},
	fr: {
		translation: fr,
	},
	kk: {
		translation: kk,
	},
	tr: {
		translation: tr,
	},
	pl: {
		translation: pl,
	},
	cs: {
		translation: cs,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
