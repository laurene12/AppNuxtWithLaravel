<template>
  <div>
    <v-card class="pa-5">
      <ValidationObserver v-slot="{ invalid }">
        <v-form @submit.prevent="onSubmit">
          <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
            <v-text-field
              v-model="form.email"
              label="Email"
              outlined
              dense
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:8|max:12">
            <v-text-field
              v-model="form.password"
              label="Password"
              outlined
              type="password"
              dense
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <v-btn
            color="success"
            class="mr-4"
            type="submit"
            :disabled="invalid"
          >
            Connected
          </v-btn>
        </v-form>
      </ValidationObserver>

      <nuxt-link :to="switchLocalePath('en')" class="mx-5">
        English
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">
        Français
      </nuxt-link>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit () {
      this.$auth.loginWith('laravelJWT', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  display: block;
  color:red
}
</style>
