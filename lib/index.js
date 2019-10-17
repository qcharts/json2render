"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = json2render;

function json2render(json) {
  var container = json.container,
      qcharts = json.qcharts,
      data = json.data,
      dataFields = json.dataFields,
      graphics = json.graphics;
  var Chart = qcharts.Chart;

  if (Chart) {
    var chart = new Chart({
      container: container
    });
    chart.source(data, dataFields);
    graphics.forEach(function (graphic) {
      var type = graphic.type,
          attrs = graphic.attrs,
          styles = graphic.styles;

      if (qcharts[type]) {
        var curGraphic = new qcharts[type](attrs);

        if (styles) {
          for (var key in styles) {
            curGraphic.style(key, styles[key]);
          }
        }

        chart.add(curGraphic);
      } else {
        err('qcharts do not contains Class ' + type);
      }
    });
    chart.render();
    return chart;
  } else {
    err('qcharts do not contains Class Chart');
  }
}

function err(msg) {
  console.error(msg);
}
//# sourceMappingURL=index.js.map