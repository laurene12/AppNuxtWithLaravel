<template>
  <div>
    <div class="head-title">
      <h1>
        My Dashboard
      </h1>
    </div>
    <div class="graphics">
      <SalesGraphics />
    </div>
  </div>
</template>
<script>
import SalesGraphics from '~/components/dashComponent/SalesGraphics.vue'
export default {
  components: {
    SalesGraphics

  },
  layout: 'AdminLayout'
}
</script>
<style lang="scss" scoped>
.head-title{
  margin-bottom: 10px;
}
.graphics{
  padding: 25px;
}
</style>
