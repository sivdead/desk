<template>
  <div id="source" class="echarts">
  </div>
</template>

<script>
  export default {
    name: 'Source',
    mounted: function () {
      let option = {
        title: {
          text: '资源贡献来源排名'
        },
        color: ['#4472C4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['产融中心', '莞深区域', '战略重心', '广清区域', '总裁办', '北京区域', '江苏区域', '湖南区域', '浙江区域', '辽宁区域', '天津区域'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              rotate: 45,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            type: 'bar',
            barWidth: '60%',
            data: [326, 262, 229, 223, 212, 209, 197, 176, 154, 143, 132]
          }
        ]
      }

      var sourceChart = this.$echarts.init(document.getElementById('source'))

      sourceChart.setOption(option)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
