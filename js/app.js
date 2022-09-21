function arr(str) {
  return str.split('-').join(' ').split(' ');
}
const str = '2000/01/01-2000/01/10 2000/01/12-2000/01/15 2000/01/13-2000/01/17';
const xData = arr(str);
console.log(xData);

function linspace(start, stop, num, endpoint = true) {
  const div = endpoint ? (num - 1) : num;
  const step = (stop - start) / div;
  return Array.from({length: num}, (_, i) => start + step * i);
}

var yaxis_SE_data_min = Math.min(...[2.5, 3.7, 1]);
var yaxis_SE_data_max = Math.max(...[2.5, 3.7, 1]);

var yaxis_SE_ticks = linspace(yaxis_SE_data_min, yaxis_SE_data_max, 3);

var yaxis_SE_data_range = [0.000006 * yaxis_SE_data_min, 3.5 * yaxis_SE_data_max];

console.log(yaxis_SE_data_range, yaxis_SE_ticks);

let SE_data = {
  x: xData,
  y: [2.5, 3.7, 1],
  //mode: 'lines+markers+text',
  name: 'SE',
  //text: ['2.5', '3.7', '1'],
  //textposition: 'top',
  type: 'scatter',
  // marker: {
  //   size: 10,
  // },
  // textfont: {
  //   size: 16
  // },
  // range: yaxis_SE_data_range,
  //   tickvals: yaxis_ticks
};

var yaxis2_TST_data_max = Math.max(...[70, 81, 71]);
var yaxis2_TST_data_min = Math.min(...[70, 81, 71]);
var yaxis2_TST_ticks = linspace(yaxis2_TST_data_min, yaxis2_TST_data_max, 3)
var yaxis2_TST_data_range = [0.00000001 * yaxis2_TST_data_min, yaxis2_TST_data_max];

console.log(yaxis2_TST_data_range, yaxis2_TST_ticks);

let TST_data = {
  x: xData,
  y: [70, 81, 71],
  //mode: 'lines+markers+text',
  name: 'TST',
  //text: ['70', '81', '71'],
  // textposition: 'top',
  yaxis: 'y2',
  type: 'scatter',
  // marker: {
  //   size: 10,
  // },
  // textfont: {
  //   size: 16
  // },
  // range: yaxis2_TST_data_range,
  //   tickvals: yaxis2_TST_ticks
};

var yaxis3_EDS_data_max = Math.max(...[22, 21, 24]);
var yaxis3_EDS_data_min = Math.min(...[22, 21, 24]);
var yaxis3_EDS_data_ticks = linspace(yaxis3_EDS_data_min, yaxis3_EDS_data_max, 3)
var yaxis3_EDS_data_range = [0.000005 * yaxis3_EDS_data_min, 1.3 *  yaxis3_EDS_data_max];

console.log(yaxis3_EDS_data_range, yaxis3_EDS_data_ticks);

let EDS_data = {
  x: xData,
  y: [22, 21, 24],
  //mode: 'lines+markers+text',
  name: 'EDS',
  //text: ['22', '21', '24'],
  //textposition: 'top',
  yaxis: 'y3',
  type: 'scatter',
  // marker: {
  //   size: 10,
  // },
  // textfont: {
  //   size: 16
  // }
    // range: yaxis3_EDS_data_range,
  //   tickvals: yaxis3_EDS_ticks
};

//fix the yaxis range

// Bedtime point 9 create problem on layout yaxis range

var yaxis4_Bedtime_consistency_data_max = Math.max(...[4, 5, 9]);
var yaxis4_Bedtime_consistency_data_min = Math.min(...[4, 5, 9]);
var yaxis4_Bedtime_consistency_ticks = linspace(yaxis4_Bedtime_consistency_data_min, yaxis4_Bedtime_consistency_data_max, 3);
var yaxis4_Bedtime_consistency_data_range = [0.000006 * yaxis4_Bedtime_consistency_data_min, 1.2 * yaxis4_Bedtime_consistency_data_max];

console.log(yaxis4_Bedtime_consistency_data_range, yaxis4_Bedtime_consistency_ticks);

let Bedtime_consistency_data = {
  x: xData,
  y: [4, 5, 9],
  //mode: 'lines+markers+text',
  name: 'Bedtime Consistency',
  //text: ['4', '5', '9'],
  //textposition: 'bottom',
  yaxis: 'y4',
  type: 'scatter',
  // marker: {
  //   size: 10,
  // },
  // textfont: {
  //   size: 16
  // }
  // range: yaxis4_Bedtime_consistency_data_range,
  //   tickvals: yaxis4_Bedtime_consistency_ticks
};

let layout = {
showlegend: true,
height: 700,
width: 1200,
margin: {
  l: 200,
  r: 50,
},
xaxis: {
  // showgrid: false,
  // zeroline: false,
  // showline: true,
  // showticklabels: true,
  // linewidth: 2,
  autotick: false,
    type : "category",
        showline: true,
},
// yaxis: {
//   showgrid: false,
//   zeroline: false,
//   showline: false,
//   showticklabels: false,
// },

yaxis: {
  title: 'yaxis title',
  showline: true,
  range: yaxis_SE_data_range,
  tickvals: yaxis_SE_ticks
},

yaxis2: {
  title: 'yaxis2 title',
  titlefont: {color: 'rgb(148, 103, 189)'},
  tickfont: {color: 'rgb(148, 103, 189)'},
  overlaying: 'y',
  // side: 'right',
  range: yaxis2_TST_data_range,
  tickvals: yaxis2_TST_ticks
},

yaxis3: {
  title: 'yaxis3 title',
  titlefont: {color: 'rgb(148, 103, 189)'},
  tickfont: {color: 'rgb(148, 103, 189)'},
  overlaying: 'y',
  // side: 'right',
  range: yaxis3_EDS_data_range,
  tickvals: yaxis3_EDS_ticks
},

yaxis4: {
  title: 'yaxis3 title',
  titlefont: {color: 'rgb(148, 103, 189)'},
  tickfont: {color: 'rgb(148, 103, 189)'},
  overlaying: 'y',
  // side: 'right',
  range: yaxis4_Bedtime_consistency_data_range,
  tickvals: yaxis4_Bedtime_consistency_ticks
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
}],

// yaxis2: {
//   title: 'TST',
//   titlefont: {color: '#ff7f0e'},
//   tickfont: {color: '#ff7f0e'},
//   anchor: 'free',
//   overlaying: 'y',
//   side: 'left',
//   position: 0.01,
//   showgrid:false,
//   zeroline: false,
//   showline: true,
// },
// yaxis3: {
//   title: 'EDS',
//   titlefont: {color: '#d62728'},
//   tickfont: {color: '#d62728'},
//   anchor: 'x',
//   overlaying: 'y',
//   side: 'left',
//   showgrid:false,
//   zeroline: false,
// },
// yaxis4: {
//   title: 'Bedtime Consistency',
//   titlefont: {color: '#9467bd'},
//   tickfont: {color: '#9467bd'},
//   anchor: 'free',
//   overlaying: 'y',
//   side: 'left',
//   showgrid:false,
//   zeroline: false
// },


};

let data = [SE_data, TST_data, EDS_data, Bedtime_consistency_data];

Plotly.newPlot(tester, data, layout);
