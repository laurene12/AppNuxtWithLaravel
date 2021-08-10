import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'
import fr from 'vee-validate/dist/locale/fr.json'
import en from 'vee-validate/dist/locale/en.json'

extend('email', email)
extend('min', min)
extend('max', max)
extend('required', required)

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

export default function ({ app }) {
  localize('en', en)
  localize('fr', fr)

  localize({
    fr: {
      messages: {
        required: 'Ce champ est obligatoire',
        min: (_, { length }) => `this field must have no less than ${length} characters`,
        max: (_, { length }) => `this field must have no more than ${length} characters`
      }
    },
    en: {
      messages: {
        required: 'Field is required',
        min: (_, { length }) => `this field must have no less than ${length} characters`,
        max: (_, { length }) => `this field must have no more than ${length} characters`
      }
    }
  })

  // Localizing the app when user refresh or access a localized link
  localize((app.i18n.locales[0]))
  //  Called every time language change
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
    localize(newLocale)
  }
}
