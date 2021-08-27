<template>
  <div class="main">
    <v-row>
      <h3>
        My Dashboard
      </h3>
    </v-row>
    <v-row>
      <v-col cols="7">
        <v-card class="card-graphs">
          <SalesGraphics />
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card class="card-graphs">
          <DepartmentSales />
        </v-card>
      </v-col>
    </v-row>
    <AnyChiffre />
    <Results />
  </div>
</template>
<script>
import SalesGraphics from '~/components/dashComponent/SalesGraphics.vue'
import DepartmentSales from '~/components/dashComponent/DepartmentSales.vue'
import AnyChiffre from '~/components/dashComponent/AnyChiffre.vue'
import Results from '~/components/dashComponent/Results.vue'
export default {
  components: {
    SalesGraphics,
    DepartmentSales,
    AnyChiffre,
    Results

  },
  layout: 'AdminLayout'
}
</script>
<style lang="scss" scoped>
.main{
  color: #1784a4;
  h3{
    margin: 0px 0px 10px 10px;
  }
}
.card-graphs{
  padding: 15px;
  height: 390px;
  /* background-color: #f8fbfc87;*/
}
</style>
