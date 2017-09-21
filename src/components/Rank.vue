<template>
  <div id="rank" class="echarts">
  </div>
</template>

<script>
  export default {
    name: 'Rank',
    mounted: function () {
      let option = {
        title: {
          text: '区域项目进度排名'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: ['#81ADF6'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['重庆区域', '天津区域', '辽宁区域', '浙江区域', '湖南区域', '江苏区域', '北京区域', '广清区域', '莞深区域']
        },
        series: [
          {
            type: 'bar',
            barGap: '100%',
            barWidth: 17,
            data: [127, 132, 143, 154, 176, 197, 209, 223, 262]
          }
        ]
      }

      const rankChart = this.$echarts.init(document.getElementById('rank'))

      rankChart.setOption(option)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
