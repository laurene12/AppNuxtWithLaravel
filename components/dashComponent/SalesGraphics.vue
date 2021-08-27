<template>
  <div id="chart">
    <apexchart type="area" height="350" :options="chartOptions" :series="series" />
  </div>
</template>
<script>
export default {
  name: 'DepartementSales',
  data () {
    return {
      series: [{
        name: 'Computers',
        data: [31, 40, 28, 51, 42, 109, 100, 50, 80]
      },
      {
        name: 'Monitor',
        data: [80, 32, 45, 50, 34, 100, 41, 100, 90]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: []
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z', '2018-09-19T07:30:00.000Z', '2018-09-19T09:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        },
        title: {
          text: 'Sales',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1784a4 '
          }
        },
        colors: ['#1784a4', '#22C0F0']
      }
    }
  }
}
</script>
