<template>
  <v-container fluid class="login-container">
    <div class="login-section">
      <!-- Start of form login -->
      <v-card
        class="mx-auto pa-5 card-login"
        width="850px"
      >
        <v-row>
          <v-col cols="12" lg="6" class="section-img-access-account">
            <img
              alt="access-account-img"
              class="access-account-img"
              src="~assets/images/svg/accessAcount.svg"
            >
          </v-col>
          <v-col cols="12" lg="6" class="section-form">
            <div class="img-male-avatar">
              <img
                alt="male-avatar"
                class="male-avatar"
                src="~assets/images/svg/maleAvatar.svg"
              >
            </div>
            <div>
              <h4 class="sign-text">
                Sign in to your Account
              </h4>
            </div>
            <div class="forms">
              <ValidationObserver>
                <v-form @submit.prevent="onSubmit">
                  <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
                    <v-text-field
                      v-model="form.email"
                      outlined
                      label="Email"
                      hide-details="auto"
                      class="mt-6"
                      rounded
                      dense
                    />
                    <small v-show="errors[0]" class="mt-1 ml-1" small>
                      <v-icon small color="red">mdi-alert-circle-outline</v-icon> {{ errors[0] }}
                    </small>
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:8|max:12">
                    <v-text-field
                      v-model="form.password"
                      label="Password"
                      outlined
                      class="mt-6"
                      rounded
                      type="password"
                      hide-details="auto"
                      dense
                    />
                    <small v-show="errors[0]" class="mt-1 ml-1" small>
                      <v-icon small color="red">mdi-alert-circle-outline</v-icon> {{ errors[0] }}
                    </small>
                  </ValidationProvider>
                  <h4 class="link-forgot">
                    Forgot Password ?
                  </h4>
                  <div class="actions-forms">
                    <v-btn
                      class="mr-4 sign-in"
                      type="submit"
                      rounded
                    >
                      Sign In
                    </v-btn>
                    <v-btn
                      class="mr-4 sign-up"
                      rounded
                      outlined
                      type="submit"
                    >
                      Sign Up
                    </v-btn>
                  </div>
                  <h4 class="other-access-connect">
                    OR LOGIN WITH
                  </h4>
                  <div class="other-access-login-social-links">
                    <v-btn
                      color="white"
                      fab
                      dark
                    >
                      <v-icon color="blue">
                        mdi-facebook
                      </v-icon>
                    </v-btn>
                    <v-btn
                      color="white"
                      fab
                      dark
                      class="mx-5"
                    >
                      <v-icon color="red">
                        mdi-google
                      </v-icon>
                    </v-btn>
                    <v-btn
                      color="white"
                      fab
                      dark
                    >
                      <v-icon color="blue">
                        mdi-linkedin
                      </v-icon>
                    </v-btn>
                  </div>
                </v-form>
              </ValidationObserver>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <!-- End of form login -->

      <div class="copyright-text d-flex justify-center pt-10">
        <p class="text-gray-light-1 text-body-2">
          © All rights reserved 2021 - Laurène BITOTA
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inLogin: false,
      form: {
        name: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-container{
    small{
      color: red;
    }
    .login-section{
      margin-top: 50vh;
      transform: translateY(-50%);
    }
    .section-img-access-account{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 80px 0px;
      .access-account-img{
        width: 200px;
      }
    }
    .section-form{
      h4{
        text-align: center;
      }
      .sign-text{
        margin-top: -15px;
      }
      .img-male-avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
        .male-avatar{
          width: 60px;
        }
      }

      .forms{
        margin-top: 20px;
        .link-forgot{
          color: #0f2ed8;
          margin-top: 20px;
        }
      }
      .actions-forms{
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        .sign-in{
          background-color: #0f2ed8 ;
          border-color: #0f2ed8 ;
          color: white;
        }
        .sign-up{
          color: #0f2ed8;
          border-color: #0f2ed8;
          background-color: #ffffff;
        }
      }
      .other-access-connect{
        margin-top: 30px;
        font-weight: 300;
      }
      .other-access-login-social-links{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
</style>
