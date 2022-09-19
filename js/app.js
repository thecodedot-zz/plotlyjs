function arr(str) {
  return str.split('-').join(' ').split(' ');
}
const str = '2000/01/01-2000/01/10 2000/01/12-2000/01/15 2000/01/13-2000/01/17';
const xData = arr(str);
console.log(xData);

SE_data = {
  x: xData,
  y: [2.5, 3.7, 1, 33, 22],
  mode: 'lines+markers+text',
  name: 'SE',
  text: ['2.5', '3.7', '1'],
  textposition: 'top',
  type: 'scatter',
  marker: {
    size: 10,
  },
  textfont: {
    size: 16
  }
};

TST_data = {
  x: xData,
  y: [70, 81, 71],
  mode: 'lines+markers+text',
  name: 'TST',
  text: ['70', '81', '71'],
  textposition: 'top',
  type: 'scatter',
  marker: {
    size: 10,
  },
  textfont: {
    size: 16
  }
},

EDS_data = {
  x: xData,
  y: [22, 21, 24],
  mode: 'lines+markers+text',
  name: 'EDS',
  text: ['22', '21', '24'],
  textposition: 'top',
  type: 'scatter',
  marker: {
    size: 10,
  },
  textfont: {
    size: 16
  }
},

Bedtime_consistency_data = {
  x: xData,
  y: [4, 5, 9],
  mode: 'lines+markers+text',
  name: 'Bedtime Consistency',
  text: ['4', '5', '9'],
  textposition: 'bottom',
  type: 'scatter',
  marker: {
    size: 10,
  },
  textfont: {
    size: 16
  }
}

let layout = {
showlegend: true,
height: 700,
width: 1200,
xaxis: {
  showgrid: false,
  zeroline: false,
  showline: true,
  showticklabels: true,
  linewidth: 2,
  autotick: false,
},
yaxis: {
  showgrid: false,
  zeroline: false,
  showline: false,
  showticklabels: true,

},

shapes: [{
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/01',
  y0: 0,
  x1: '2000/01/01',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
}, {
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/10',
  y0: 0,
  x1: '2000/01/10',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
}, {
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/12',
  y0: 0,
  x1: '2000/01/12',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
}, {
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/13',
  y0: 0,
  x1: '2000/01/13',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
},{
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/15',
  y0: 0,
  x1: '2000/01/15',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
}, {
  type: 'line',
  xref: 'x',
  yref: 'paper',
  x0: '2000/01/17',
  y0: 0,
  x1: '2000/01/17',
  y1: 1,
  line: {
    color: 'rgb(30, 30, 30)',
    width: 1,
    dash: 'dot',
  }
}]
};

let data = [SE_data, TST_data, EDS_data, Bedtime_consistency_data];

Plotly.newPlot(tester, data, layout);
