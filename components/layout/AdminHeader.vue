<template>
  <v-row justify="space-between" align="center" class=" header">
    <v-col>
      <div class="logo">
        <img
          alt="logo-app"
          class="logo-img"
          height="70px"
          src="~assets/images/jpeg/logo.png"
        >
      </div>
    </v-col>

    <v-col class="params-user">
      <div class="d-flex">
        <v-avatar color="blue">
          <span class="white--text text-h5">LB</span>
        </v-avatar>
        <div class="user-name">
          <span class="name-user-logged">
            Laurène Bitota
          </span>
          <v-icon class="ml-3">
            mdi-chevron-down
          </v-icon>
        </div>
      </div>
      <v-divider vertical class="mx-4" />
      <div class="notifications">
        <v-badge
          color="blue"
          content="2"
          overlap
          top
        >
          <v-icon
            large
            color="black"
          >
            mdi-bell-outline
          </v-icon>
        </v-badge>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.header{
  background-color: #fff;
  height: 100px;
  .logo-img{
    margin-top: 10px;
  }
  .params-user{
    display: flex;
    justify-content: flex-end;
  }
  .user-name{
    margin: 15px;
    .name-user-logged{
      font-weight: 600;
    }
  }
  .v-divider--vertical {
    border-width: 2px;
  }
  .notifications{
    margin: 10px 0px;
  }
}
</style>
