export default function json2render(json) {
  let { container, qcharts, data, dataFields, graphics } = json
  let { Chart } = qcharts
  if (Chart) {
    let chart = new Chart({
      container: container
    })
    chart.source(data, dataFields)
    graphics.forEach(graphic => {
      let { type, attrs, styles } = graphic
      if (qcharts[type]) {
        let curGraphic = new qcharts[type](attrs)
        if (styles) {
          for (let key in styles) {
            curGraphic.style(key, styles[key])
          }
        }
        chart.add(curGraphic)
      } else {
        err('qcharts do not contains Class ' + type)
      }
    })
    chart.render()
    return chart
  } else {
    err('qcharts do not contains Class Chart')
  }
}
function err(msg) {
  console.error(msg)
}
