<template>
  <div>
    <div id="chart">
      <apexchart type="polarArea" height="350" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DepartementSales',
  data () {
    return {
      series: [70, 50, 80, 100],
      chartOptions: {
        chart: {
          height: 350,
          type: 'polarArea'
        },
        labels: ['Cricket', 'Laurax', 'Zindu', 'Mariaz'],
        title: {
          text: 'Consumer Base',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1784a4 '
          }
        },
        // colors: ['#3EA5E6', '#000', '#1784A4', '#0D2499'],
        colors: ['#1784a4'],
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        },
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        }
      }
    }
  }
}
</script>
