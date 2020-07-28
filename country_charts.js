
console.log("Entered country_charts.js");


var reason_data=[];
var reason_labels=[];
reason_data[0]=0;
reason_labels[0]=" ";
reason_data[1]=rs_selected_country_data.reasons["askedtoleave"];
reason_labels[1]="Owner or renter may ask me to leave";
reason_data[2]=rs_selected_country_data.reasons["family"];
reason_labels[2]="Disagreements with family or relatives";
reason_data[3]=rs_selected_country_data.reasons["money"];
reason_labels[3]="Lack of money or other resources";
reason_data[4]=rs_selected_country_data.reasons["death"];
reason_labels[4]="Death of a household member";
reason_data[5]=rs_selected_country_data.reasons["government"];
reason_labels[5]="Government may seize";
reason_data[6]=rs_selected_country_data.reasons["companies"];
reason_labels[6]="Companies may seize";
reason_data[7]=rs_selected_country_data.reasons["customary"];
reason_labels[7]="Issues with customary authorities";

var c_r = new Chartist.Bar('.ch-reasons', {
  labels: reason_labels,
  series: [reason_data] 
}, {
  height: 300,
  showLabel: true,
  reverseData: true,
  chartPadding: {
    right : 30
  },
  horizontalBars: true,
  axisY: {
  showGrid : false,
    offset: 280,
    labelOffset: {
        y: 1
    },

  },
  axisX: {
showGrid: false,
showLabel: false    
},
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
            console.log(data);
            if (data.value['x'] == -1) {
                data.value['x'] = 0;

                return data.x2
                 +100;
                console.log("Question not asked")};
          console.log("data.x2="+data.x2);
        
        if (data.x2 > 310){
          console.log("X2 upper path triggering");
          console.log(data.value);
          return data.x2 + 18;
      } else {
        return data.x2 + 15;
      } 
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-reasons-labels",
      labelInterpolationFnc: function (text) {
        if (text > 0.5) {
          return text + '%';
      } else if (text > 0) {
        return " ";
      } else if (text <= 0) {
            text = 0;
            value = 0;
        return " ––– ";
      } else {
            return " "
        }
      }
    })
  ]
});

console.log("data structure");
console.log(rs_selected_country_data);

var c_t = new Chartist.Pie('.ch-allprop', {
//  labels:
//  chart_tenure_data['labels'],
  series:
    rs_selected_country_data.insecurity.allprop.allresp 
    
}, {
  donut: true,
  donutWidth: 50,
  donutSolid: true,
  chartPadding:70,
  width: 400,
  height:400,
 startAngle: 0,

  showLabel: true,
  labelInterpolationFnc: function (text) {
        if (text > 6) {
          return text + '%';
      } else {
        return "";
      }
      },
      labelOffset: 60,
      plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<i style=""></i>',
                    position: 'bottom',
                    offsetY : 5,
                    offsetX: 0
                }, {
                    content: 'All<br>Property'
                }]
            })
        ],
});

var c_t = new Chartist.Pie('.ch-main', {
//  labels:
//  chart_tenure_data['labels'],
  series:
      rs_selected_country_data.insecurity.homes.allresp 
     
}, {
  donut: true,
  donutWidth: 50,
  donutSolid: true,
  chartPadding:70,
  width: 400,
  height:400,
 startAngle: 0,
  showLabel: true,
  labelInterpolationFnc: function (text) {
        if (text > 6) {
            return text + '%';
        } else {
            return "";
        }
      },
      labelOffset: 60,

      plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<i class="pie-label"></i>',
                    position: 'bottom',
                    offsetY : 5,
                    offsetX: 0
                }, {
                    content: 'Homes'
                }]
            })
        ],
});



var c_ad = new Chartist.Bar('#chart-allpropdocs', {

  series: [
    [rs_selected_country_data.docs.allprop.allresp[0]],
    [rs_selected_country_data.docs.allprop.allresp[1]],
    [rs_selected_country_data.docs.allprop.allresp[2]],
  ]
}, {
  stackBars: true,
chartPadding: {  top: 0 },
    horizontalBars: true,
      axisY: {
  showGrid : false,
  showLabel: false,
  offset: 0
  },
  axisX: {
    showGrid : false,
    showLabel: false,
    
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x2 - 20
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-documentation-labels",
      labelInterpolationFnc: function (text) {
        if (text > 12) {
            return text + '%';
        } else {
            return "";
        }
      }
    })
  ]
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 25px'
    });
  }
});

var c_ad = new Chartist.Bar('#chart-homedocs', {

  series: [
    [rs_selected_country_data.docs.homes.allresp[0]],
    [rs_selected_country_data.docs.homes.allresp[1]],
    [rs_selected_country_data.docs.homes.allresp[2]],
  ]
}, {
  stackBars: true,
chartPadding: {  top: 0 },
    horizontalBars: true,
      axisY: {
  showGrid : false,
  showLabel: false,
  offset: 0
  },
  axisX: {
    showGrid : false,
    showLabel: false,
    
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x2 - 20
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-documentation-labels",
      labelInterpolationFnc: function (text) {
        if (text > 12) {
            return text + '%';
        } else {
            return "";
        }
      }
    })
  ]
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 25px'
    });
  }
});



  //  <div class="ch-owners" id="chart-tenure-owners"><BR>


var c1_insec = new Chartist.Pie('#chart-insec-1', {
//  labels:
//  chart_tenure_data['labels'],
  series: 
    rs_selected_country_data.insecurity['homes'].urban
    
}, {
  donut: true,
  donutWidth: 50,
  donutSolid: true,
  chartPadding:10,
width: 250,
  height:250,
 startAngle: 0,

  showLabel: true,
  labelInterpolationFnc: function (text) {
        if (text > 5) {
            return text + '%';
        } else {
            return "";
        }
      },
      labelOffset: 0,
      
});


var c1_docs = new Chartist.Bar('#chart-docs-1', {
  //labels: chart_documentation_data.labels,
  series: [
    [rs_selected_country_data.docs.homes.urban[0]],
    [rs_selected_country_data.docs.homes.urban[1]],
    [rs_selected_country_data.docs.homes.urban[2]],
  ]
}, {
  stackBars: true,
chartPadding: 10,
width:225,
    horizontalBars: true,
      axisY: {
  showGrid : false,
  showLabel: true,
  offset: 1
  },
  axisX: {
    showGrid : false,
    showLabel: false,
    labelOffset: 3
    
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x2 - 20
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-documentation-labels",
      labelInterpolationFnc: function (text) {
        if (text > 16) {
            return text + '%';
        } else {
            return "";
        }
      }
    })
  ]
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 25px'
    });
  }
});


var c2_insec = new Chartist.Pie('#chart-insec-2', {
//  labels:
//  chart_tenure_data['labels'],
  series: 
    rs_selected_country_data.insecurity['homes'].rural
    
}, {
  donut: true,
  donutWidth: 50,
  donutSolid: true,
  chartPadding:10,
width: 250,
  height:250,

 startAngle: 0,

  showLabel: true,
  labelInterpolationFnc: function (text) {
        if (text > 5) {
            return text + '%';
        } else {
            return "";
        }
      },
      labelOffset: 0,
      
});


var c2_docs = new Chartist.Bar('#chart-docs-2', {
  //labels: chart_documentation_data.labels,
  series: [
    [rs_selected_country_data.docs.homes.rural[0]],
    [rs_selected_country_data.docs.homes.rural[1]],
    [rs_selected_country_data.docs.homes.rural[2]],
  ]
}, {
  stackBars: true,
chartPadding: 10,
    horizontalBars: true,
width:225,
      axisY: {
  showGrid : false,
  showLabel: true,
  offset: 0
  },
  axisX: {
    showGrid : false,
    showLabel: false,
    
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x2 - 20
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-documentation-labels",
      labelInterpolationFnc: function (text) {
        if (text > 16) {
            return text + '%';
        } else {
            return "";
        }
      }
    })
  ]
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 25px'
    });
  }
});


var c3_insec = new Chartist.Pie('#chart-insec-3', {
//  labels:
//  chart_tenure_data['labels'],
  series: 
    rs_selected_country_data.insecurity['homes'].urban
    
}, {
  donut: true,
  donutWidth: 50,
  donutSolid: true,
  chartPadding:10,
width: 250,
  height:250,

 startAngle: 0,

  showLabel: true,
  labelInterpolationFnc: function (text) {
        if (text > 5) {
            return text + '%';
        } else {
            return "";
        }
      },
      labelOffset: 0,
      
});


var c3_docs = new Chartist.Bar('#chart-docs-3', {
  //labels: chart_documentation_data.labels,
  series: [
    [rs_selected_country_data.docs.homes.urban[0]],
    [rs_selected_country_data.docs.homes.urban[1]],
    [rs_selected_country_data.docs.homes.urban[2]],
  ]
}, {
  stackBars: true,
width:225,
chartPadding: 10,
    horizontalBars: true,
      axisY: {
  showGrid : false,
  showLabel: true,
  offset: 0
  },
  axisX: {
    showGrid : false,
    showLabel: false,
    
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x2 - 20
        }
      },
      labelOffset: {
        y: 5
      },
      labelClass: "ch-documentation-labels",
      labelInterpolationFnc: function (text) {
        if (text > 16) {
            return text + '%';
        } else {
            return "";
        }
      }
    })
  ]
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 25px'
    });
  }
});
