<template>
  <div id="industry" class="echarts">
  </div>
</template>

<script>
  export default {
    name: 'Industry',
    mounted: function () {
      let industryChart = this.$echarts.init(document.getElementById('industry'))
      let option = {
        title: {
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d})'
        },
        color: ['#c7d7f0', '#82aef7', '#5892f6', '#4381cc', '#4774ab', '#386093', '#18549c', '#11427d', '#4d515c', '#a4a4a4', '#b6bfce'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20%',
          containLabel: true
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['电子信息', '智能制造', '新能源', '新型交通', '航空航天', '新材料', '生命科学', '创新服务', '医疗康养', '文化旅游',
            '其他']
        },
        series: [
          {
            name: '数据显示',
            type: 'pie',
            radius: ['25%', '50%'],
            center: ['50%', '40%'],
            data: [
              {value: 35, name: '电子信息'},
              {value: 10, name: '智能制造'},
              {value: 24, name: '新能源'},
              {value: 24, name: '新型交通'},
              {value: 24, name: '航空航天'},
              {value: 24, name: '新材料'},
              {value: 24, name: '生命科学'},
              {value: 24, name: '创新服务'},
              {value: 24, name: '医疗康养'},
              {value: 24, name: '文化旅游'},
              {value: 24, name: '其他'}

            ],
            label: {
              normal: {
                formatter: '{b}\n{d}'
              }

            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      industryChart.setOption(option)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
