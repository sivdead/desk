<template>
  <div class="echarts" id="overAll">
  </div>
</template>

<script>
  export default {
    name: 'OverAll',
    mounted: function () {
      let overAllChart = this.$echarts.init(document.getElementById('overAll'))
      const option = {
        title: {
          text: '项目资源库整体情况',
          left: '20%'
        },
        legend: {
          orient: 'vertical',
          itemGap: 28,
          right: '-20',
          top: '60',
          align: 'left',
          silent: true,
          data: [{
            name: '已初期沟通',
            icon: 'circle'
          }, {
            name: '已正式拜访',
            icon: 'circle'
          }, {
            name: '已签约MOU',
            icon: 'circle'
          }, {
            name: '已确定项目选址',
            icon: 'circle'
          }, {
            name: '已正式签约',
            icon: 'circle'
          }, {
            name: '已正式入驻',
            icon: 'circle'
          }
          ]
        },
        color: ['#81ADF6'],
        series: [
          {
            type: 'funnel',
            left: '20%',
            width: '60%',
            label: {
              normal: {
                // position: 'inside',
                // formatter: '{b}预期',
                show: false
              },
              emphasis: {
                // position: 'inside',
                // formatter: '{b}预期: {c}%',
                show: false
              }
            },
            gap: 10,
            sort: 'none',
            silent: true,
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.4
              }
            },
            data: [
              {value: 100, name: '已初期沟通'},
              {value: 100, name: '已正式拜访'},
              {value: 100, name: '已签约MOU'},
              {value: 100, name: '已确定项目选址'},
              {value: 100, name: '已正式签约'},
              {value: 100, name: '已正式入驻'},
              {
                value: 100,
                name: '隐藏',
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                }
              }
            ]
          },
          {
            type: 'funnel',
            left: '20%',
            width: '60%',
            maxSize: '90%',
            gap: 10,
            sort: 'none',
            silent: true,
            label: {
              normal: {
                position: 'inside',
                formatter: '{c}',
                textStyle: {
                  color: '#fff'
                },
                align: 'right'
              },
              emphasis: {
                position: 'inside',
                formatter: '{b}: {c}'
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                borderColor: '#fff',
                borderWidth: 2
              }
            },
            data: [
              {value: 88, name: '已初期沟通'},
              {value: 76, name: '已正式拜访'},
              {value: 63, name: '已签约MOU'},
              {value: 56, name: '已确定项目选址'},
              {value: 40, name: '已正式签约'},
              {value: 25, name: '已正式入驻'},
              {
                value: 15,
                name: '隐藏',
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                },
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      }

// 使用刚指定的配置项和数据显示图表。
      overAllChart.setOption(option)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
