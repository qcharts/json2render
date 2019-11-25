# json2render

use json to render qcharts graphics

```
  const data = [
    { date: '05-01', category: '图例一', sales: 15.2 },
    { date: '05-02', category: '图例一', sales: 39.2 },
    { date: '05-03', category: '图例一', sales: 31.2 },
    { date: '05-04', category: '图例一', sales: 65.2 },
    { date: '05-05', category: '图例一', sales: 55.2 },
    { date: '05-06', category: '图例一', sales: 75.2 },
    { date: '05-07', category: '图例一', sales: 95.2 },
    { date: '05-08', category: '图例一', sales: 65.2 },
  ]
  let data1 =
  [
    { date: '05-01', category: '图例一', sales: 18.2 },
    { date: '05-02', category: '图例一', sales: 49.2 },
    { date: '05-03', category: '图例一', sales: 51.2 },
    { date: '05-04', category: '图例一', sales: 45.2 },
    { date: '05-05', category: '图例一', sales: 35.2 },
    { date: '05-06', category: '图例一', sales: 55.2 },
    { date: '05-07', category: '图例一', sales: 75.2 },
    { date: '05-08', category: '图例一', sales: 25.2 },
  ]
  let chart = json2render({
    container:'#app',
    qcharts: qcharts,
    data:data,
    dataFields:{row: 'category',value: 'sales',text: 'date'},
    graphics:[
      {
        type:'Line',
        attrs:{ smooth: true},
        styles:{
          guideline:false,
          point:{strokeColor:'#fff',fillColor:'#00f',size:5},
          line:function(attrs, data, i){
            return {strokeColor:'#f00'}
          }
        }
      },
      {
        type: 'Axis',
        attrs: { orient: 'left' },
      },
      {
        type: 'Axis',
        attrs: { orient: 'bottom' },
      },
        {
        type: 'Legend',
        attrs: {  align: ['center', 'bottom'] },
        styles: {
          icon: { borderRadius: 10 },
          text: { fontSize: 12 }
        }
      },
    ]
  })
  //改变数据
  setTimeout(_=>{
    chart.source(data1)
  },1000)
```
