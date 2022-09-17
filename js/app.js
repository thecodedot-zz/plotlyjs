var SE_data = [
    {x: '2000/01/01-2000/01/10', y: 2.5}, 
    {x: '2000/01/12-2000/01/15', y: 3.7},
    {x: '2000/01/13-2000/01/17', y: 1}
];

var TST_data = [
    {x: '2000/01/01-2000/01/10', y: 70},
    {x: '2000/01/12-2000/01/15', y: 81},
    {x: '2000/01/13-2000/01/17', y: 71}
];

var EDS_data = [
    {x: '2000/01/01-2000/01/10', y: 22},
    {x: '2000/01/12-2000/01/15', y: 21},
    {x: '2000/01/13-2000/01/17', y: 24}
];

var Bedtime_consistency_data = [
    {x: '2000/01/01-2000/01/10', y: 4},
    {x: '2000/01/12-2000/01/15', y: 5},
    {x: '2000/01/13-2000/01/17', y: 9}
];

SE_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [2.5, 3.7, 1],
  title: 'SE_data',
  name: 'SE_data',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'red',
    size: [20, 20, 20, 20]
  },
  position: 'top',
};

TST_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [4, 5, 9],
  title: 'TST_data',
  name: 'TST_data',
  yaxis: 'y2',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'purple',
    size: [20, 20, 20, 20]
  },
  position: 'top',
};

EDS_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [22, 21, 24],
  title: 'EDS_data',
  name: 'EDS_data',
  yaxis: 'y3',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'green',
    size: [20, 20, 20, 20]
  },
  position: 'top',
};

Bedtime_consistency_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [70, 81, 71],
  title: 'Bedtime_consistency_data',
  name: 'Bedtime_consistency_data',
  yaxis: 'y4',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'blue',
    size: [20, 20, 20, 20]
  },
  position: 'top',
};

var layout = {
  title: {
    text:'',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'x Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
    showgrid:true,
    zeroline: false
  },

  yaxis: {
    title: {
      text: 'SE',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      },
    },
    showgrid:false,
    zeroline: false
  },

  yaxis2: {
    title: 'TST',
    titlefont: {color: '#ff7f0e'},
    tickfont: {color: '#ff7f0e'},
    anchor: 'free',
    overlaying: 'y',
    side: 'left',
    position: 0.05,
    showgrid:false,
    zeroline: false
  },
  yaxis3: {
    title: 'EDS',
    titlefont: {color: '#d62728'},
    tickfont: {color: '#d62728'},
    anchor: 'x',
    overlaying: 'y',
    side: 'right',
    showgrid:false,
    zeroline: false
  },
  yaxis4: {
    title: 'Bedtime Consistency',
    titlefont: {color: '#9467bd'},
    tickfont: {color: '#9467bd'},
    anchor: 'free',
    overlaying: 'y',
    side: 'right',
    position: 0.95,
    showgrid:false,
    zeroline: false
  }

};

var data = [SE_data, TST_data, EDS_data, Bedtime_consistency_data];

Plotly.newPlot(tester, data, layout);
