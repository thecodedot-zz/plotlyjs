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
  name: 'SE_data',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'red',
    size: [20, 20, 20, 20]
  }
};

TST_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [4, 5, 9],
  name: 'TST_data',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'purple',
    size: [20, 20, 20, 20]
  }
};

EDS_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [22, 21, 24],
  name: 'EDS_data',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'green',
    size: [20, 20, 20, 20]
  }
};

Bedtime_consistency_data = {
  x: ['2000/01/01-2000/01/10', '2000/01/12-2000/01/15', '2000/01/13-2000/01/17'],
  y: [70, 81, 71],
  name: 'Bedtime_consistency_data',
  type: 'scatter',
  opacity: 1,
  line: {
    color: 'blue',
    size: [20, 20, 20, 20]
  }
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
  },
  yaxis: {
    title: {
      text: 'SE TST EDS Bedtime Consistency',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      },
    }
  }
};

var data = [SE_data, TST_data, EDS_data, Bedtime_consistency_data];

Plotly.newPlot(tester, data, layout);
