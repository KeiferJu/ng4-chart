import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnChanges {
  @Input() type: any;

  xAxisData = [];
  data1 = [];
  data2 = [];

  chartOption1 = {
    title: {
      text: '公司某周访问记录'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
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
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 16, 34, 54, 34, 12, 16]
      }
    ]
  };


  chartOption2 = {
    title: {
      text: '某产品类目图'
    },
    legend: {
      data: ['bar', 'bar2'],
      align: 'left'
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack', 'tiled']
        },
        // dataView: {},
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: this.xAxisData,
      silent: false,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [{
      name: 'bar',
      type: 'bar',
      data: this.data1,
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: 'bar2',
      type: 'bar',
      data: this.data2,
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };

  dataset2 = [
    [
      200,
      32,
      444,
      666,
      88,
      352,
      380
    ]
  ];

  chartOption3 = {
    title: {
      text: '财务信息'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['利润', '支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    series: [
      {
        name: '利润',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
      }
    ]
  };

  ngOnChanges(e: any) {
    if (this.type === 'bar2') {
      for (let i = 0; i < 100; i++) {
        this.xAxisData.push('类目' + i);
        this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
    }
  }

}
