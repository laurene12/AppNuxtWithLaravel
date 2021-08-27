<template>
  <v-row>
    <v-col cols="6">
      <v-card class="card-graphs">
        <h2>Results</h2>
        <div class="section">
          <div>
            <v-icon x-large color="blue">
              mdi-circle-small
            </v-icon>
            <span>Monitor</span>
            <h3>50 of 150 </h3>
          </div>
          <div>
            <h3>
              <v-progress-linear value="30" color="blue" class="progress" />
            </h3>
          </div>
        </div>
        <div class="section">
          <div>
            <v-icon x-large color="light-blue lighten-1">
              mdi-circle-small
            </v-icon>
            <span>Chargeur</span>
            <h3>50 of 150 </h3>
          </div>
          <div>
            <h3>
              <v-progress-linear value="50" color="light-blue lighten-1" class="progress" />
            </h3>
          </div>
        </div>
        <div class="section">
          <div>
            <v-icon x-large color="light-blue darken-4">
              mdi-circle-small
            </v-icon>
            <span>Mouse</span>
            <h3>50 of 150 </h3>
          </div>
          <div>
            <h3>
              <v-progress-linear value="80" color="light-blue darken-4" class="progress" />
            </h3>
          </div>
        </div>
        <div class="section">
          <div>
            <v-icon x-large color="light-blue accent-4">
              mdi-circle-small
            </v-icon>
            <span>Imprimante</span>
            <h3>50 of 150 </h3>
          </div>
          <div>
            <h3>
              <v-progress-linear value="60" color="light-blue accent-4" class="progress" />
            </h3>
          </div>
        </div>
        <div class="section">
          <div>
            <v-icon x-large color="purple">
              mdi-circle-small
            </v-icon>
            <span>Projector</span>
            <h3>50 of 150 </h3>
          </div>
          <div>
            <h3>
              <v-progress-linear value="90" color="purple" class="progress" />
            </h3>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="card-graphs">
        <div id="chart">
          <apexchart type="bar" height="350" :options="chartOptions" :series="series" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        fill: {
          opacity: 1
        },
        colors: ['#3EA5E6', '#b9ebfa', '#008ffb'],
        tooltip: {
          y: {
            formatter (val) {
              return '$ ' + val + ' thousands'
            }
          }
        },
        title: {
          text: 'Campaign Probability',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1784a4 '
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card-graphs{
  padding: 15px;
  height: 402px;
}
h3{
  font-weight: 200;
  margin-left: 20px;
}
span{
  color: #10344e;
  font-weight: bold;
  font-size: 20px;
}
h2{
  color: #1784a4;
}
.progress{
  width: 500px;
}
.section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
