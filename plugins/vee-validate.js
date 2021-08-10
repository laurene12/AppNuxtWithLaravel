import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'

extend('email', email)
extend('min', min)
extend('max', max)
extend('required', {
  ...required,
  message: 'This field is required'
})

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
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
