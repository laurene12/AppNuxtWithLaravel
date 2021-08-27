<template>
  <v-row>
    <v-col cols="3">
      <v-card class="chiffre">
        <div class="sectiion-chiffre">
          <div class="number">
            <h1>5000 K</h1>
            <span>Products Deliver</span>
          </div>
          <div>
            <v-icon x-large>
              mdi-cart-check
            </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="chiffre">
        <div class="sectiion-chiffre">
          <div class="number">
            <h1>3500</h1>
            <span>Inventory turnover</span>
          </div>
          <div>
            <v-icon x-large>
              mdi-screen-rotation
            </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="chiffre">
        <div class="sectiion-chiffre">
          <div class="number">
            <h1>75</h1>
            <span>New Projects</span>
          </div>
          <div>
            <v-icon x-large>
              mdi-text-box-multiple-outline
            </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="chiffre">
        <div class="sectiion-chiffre">
          <div class="number">
            <h1>362</h1>
            <span>Clients Meetings</span>
          </div>
          <div>
            <v-icon x-large>
              mdi-account-group-outline
            </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

.chiffre{
  padding: 30px;
  .sectiion-chiffre{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  i{
    color: #1784a4;
  }
  h1{
    color: #1784a4;
  }
}
</style>
