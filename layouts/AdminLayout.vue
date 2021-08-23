<template>
  <v-app :key="key">
    <div class="layout-container">
      <AdminHeader class="px-8" @reRender="key++" />
      <div class="layout-body">
        <AdminNavigation />
        <nuxt class="page" />
      </div>
    </div>
  </v-app>
</template>
<script>

import AdminNavigation from '~/components/layout/AdminNavigation.vue'
import AdminHeader from '~/components/layout/AdminHeader.vue'

export default {
  components: {
    AdminNavigation,
    AdminHeader
  },
  data () {
    return {
      key: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.v-application, html{
  background-color: #cccccc66 ;
  text-align: left;
  .layout-body{
    margin-top: 14px;
    display: flex;
  }
  .page{
    text-align: left;
    margin-top: 24px;
    max-width: 1400px;
    padding: 0px 30px;
  }
}
</style>
