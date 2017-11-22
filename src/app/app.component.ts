import {Component, OnInit} from '@angular/core';
import * as smartmapx from '../assets/smartmapx/smartmapx.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private items: any[];
  type: any;
  id: any;
  map: any;
  marker: any;
  el: any;
  visibility = 'visible';

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'marker';
    this.el.style.backgroundImage = 'url(http://59.110.157.48/docs/static/map/images/default_marker.png)';
    this.el.style.width = '20px';
    this.el.style.height = '56px';
  }

  ngOnInit() {


    this.items = [
      {
        label: '柱状图',
        items: [
          {
            id: 'bar', label: '公司某周访问记录', title: 'bar1', icon: 'fa-bar-chart-o', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;


            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.29242, 40.042041], zoom: 12});
            this.marker = new smartmapx.Marker(this.el, {offset: [-10, -28]})
              .setLngLat([116.29242, 40.042041])
              .addTo(this.map);
          }
          },
          {
            id: 'bar', label: '某营业点周财务信息', title: 'bar3', icon: 'fa-bar-chart-o', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.40894, 39.94019001], zoom: 12});
            this.marker = new smartmapx.Marker(this.el, {offset: [-10, -28]})
              .setLngLat([116.40894, 39.94019001])
              .addTo(this.map);
          }
          },
          {
            id: 'bar', label: '某库产品类目对比图', title: 'bar2', icon: 'fa-bar-chart-o', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.47588, 39.99825999], zoom: 12});
            this.marker = new smartmapx.Marker(this.el, {offset: [-10, -28]})
              .setLngLat([116.47588, 39.99825999])
              .addTo(this.map);
          }
          }
        ]
      },
      {
        label: '饼状图',
        items: [
          {
            id: 'pie', label: '某市广告营销占比图', title: 'pie1', icon: 'fa-pie-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          }
        ]
      },
      {
        label: '折线图',
        items: [
          {
            id: 'line', label: '某网站日访问记录', title: 'line1', icon: 'fa-line-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            this.map.flyTo({center: [116.29242, 40.042041], zoom: 12});
            this.marker = new smartmapx.Marker(this.el, {offset: [-10, -28]})
              .setLngLat([116.29242, 40.042041])
              .addTo(this.map);
          }
          },
          {
            id: 'line', label: '雨量流量关系图', title: 'line2', icon: 'fa-line-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.41792, 39.92202], zoom: 12});
          }
          }
        ]
      },
      {
        label: '面积图',
        items: [
          {
            id: 'area', label: '广告营销占比图', title: 'area1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});

          }
          },
          {
            id: 'area', label: '河流流量对比图', title: 'area2', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});

          }
          }
        ]
      },
      {
        label: '散点图',
        items: [
          {
            id: 'splashes', label: '散点图', title: 'splashes1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          },
          // {
          //   id: 'splashes', label: '全国微博签到灯光图', title: 'splashes1', icon: 'fa-area-chart', command: e => {
          //
          //   if (this.marker) {
          //     this.marker.remove();
          //   }
          //
          //   // this.map.addLayer({
          //   //   'id': 'bga',
          //   //   'type': 'background',
          //   //   'maxzoom': 20,
          //   //   'paint': {
          //   //     'background-color': 'rgba(0, 0, 0, 0.7)'
          //   //   }
          //   // });
          //
          //   this.map.addSource('weibo', {
          //     type: 'geojson',
          //     data: 'http://59.110.157.48:8082/weibo.json'
          //   });
          //
          //   this.map.addLayer({
          //     id: 'weibo',
          //     type: 'circle',
          //     source: 'weibo',
          //     'paint': {
          //       'circle-radius': 1,
          //       'circle-color': {
          //         property: 'amount',
          //         type: 'categorical',
          //         stops: [
          //           [1, 'rgba(37, 140, 249, 0.8)'],
          //           [2, 'rgba(14, 241, 242, 0.8)'],
          //           [3, 'rgba(255, 255, 255, 0.8)']
          //         ]
          //       }
          //     }
          //   });
          // }
          // }
        ]
      },
      {
        label: '气泡图',
        items: [
          {
            id: 'bubble', label: '部分城市空气对比图', title: 'bubble1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          }
        ]
      },
      {
        label: '仪表盘',
        items: [
          {
            id: 'dashboard', label: '仪表盘', title: 'dashboard1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;
          }
          },
          {
            id: 'dashboard', label: '某业务完成率', title: 'dashboard2', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;
          }
          },

        ]
      },
      {
        label: '点密度图',
        items: [
          {
            id: 'pointdensity', label: '男女身高体重对比', title: 'pointdensity1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          }
        ]
      },
      {
        label: '混合图',
        items: [
          {
            id: 'hybird', label: '某地区降水监控', title: 'hybird1', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          },
          {
            id: 'hybird', label: '02-10年宏观经济统计', title: 'hybird2', icon: 'fa-area-chart', command: e => {
            this.id = e.item.id;
            this.type = e.item.title;

            if (this.marker) {
              this.marker.remove();
            }
            this.map.flyTo({center: [116.39738, 39.90579], zoom: 8});
          }
          }
        ]
      }];


    this.map = new smartmapx.Map({
      container: 'map',
      style: 'http://59.110.157.48/map/beijing_style.json',
      // style: 'http://192.168.58.128/map/beijing_style.json',
      center: [116.39738, 39.90579],
      zoom: 7
    });

  }

  onclick() {
    this.visibility === 'visible' ? this.visibility = 'none' : this.visibility = 'visible';
    this.map.setLayoutProperty('adm_县级市', 'visibility', this.visibility)
    this.map.setLayoutProperty('adm_area', 'visibility', this.visibility)
  }


  clostSta() {
    this.id = '';
    this.type = '';
    if (this.marker) {
      this.marker.remove();
    }
    this.map.flyTo({center: [116.39738, 39.90579], zoom: 7});
  }
}

