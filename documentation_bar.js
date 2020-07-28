
function rs_get_c1ctx () {
var ctx = document.getElementById("c-1-doc").getContext('2d');

console.log(ctx);
return ctx;
}

function rs_get_c1config() {

  const c1data = [
    {

    label : "Formal Documentation",
    data: [rs_selected_country_data.docs.homes.urban[0]],
    backgroundColor: "rgba(63,103,126,1)",
    hoverBackgroundColor: "rgba(63,103,126,1)",
    datalabels: {
              align: 'center',
              anchor: 'center',
              formatter : function(value, context) {
                var result = numeral(value).format('(0,0[.]0)')+ '%';
                return result;
                },
              backgroundColor: function(context) {
                return context.dataset.backgroundColor;
              },
              borderColor: 'white',
              borderRadius: 0,
              borderWidth: 0,
              color: 'white',
              font: {
                weight: 'bold'
              }
       
          
            },
    },
      {

    label : "Informal Documentation",
    data: [rs_selected_country_data.docs.homes.urban[1]],
    backgroundColor: "rgba(163,103,126,1)",
    hoverBackgroundColor: "rgba(163,103,126,1)",
    datalabels: {
              align: 'center',
              anchor: 'center',
              formatter : function(value, context) {
                var result = numeral(value).format('(0,0[.]0)')+ '%';
                return result;
                },
              backgroundColor: function(context) {
                return context.dataset.backgroundColor;
              },
              borderColor: 'white',
              borderRadius: 25,
              borderWidth: 2,
              color: 'white',
              font: {
                weight: 'bold'
              }
       
          
            },
    },
    {

    label : "No Documentation",
    data: [rs_selected_country_data.docs.homes.urban[2]],
    backgroundColor: "rgba(63,203,226,1)",
    hoverBackgroundColor: "rgba(63,203,226,1)",
    datalabels: {
              align: 'center',
              anchor: 'center',
              formatter : function(value, context) {
                var result = numeral(value).format('(0,0[.]0)')+ '%';
                return result;
                },
              backgroundColor: function(context) {
                return context.dataset.backgroundColor;
              },
              borderColor: 'white',
              borderRadius: 0,
              borderWidth: 0,
              color: 'white',
              font: {
                weight: 'bold'
              }
       
          
            },
    },
    
    ];
var config = {
type: 'horizontalBar',
    data: {
   //   labels : project_labels,
      datasets : c1data,
      labels: [[ "one"], ["two"], ["three"]],
    },
    options: {
        barOptions_stacked: true,
        responsive: false,
        animation: {
          duration: 0,
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontSize: 14,
            fontStyle: 'bold',
                      
          }
        },
        tooltips: {
          enabled: false,
         },

        plugins: {
          datalabels: {
            color: 'white',
            display: function(context) {

         //  console.log(context);
              return context.dataset.data[context.dataIndex] > 15;
            },
            font: {
              weight: 'bold'
            },
            formatter: Math.round
          }
        },
        scales: {
          xAxes: [{ 
            display: false,
            stacked: true, 
            gridLines: { display: false },
          //  barThickness : 140,
            categoryPercentage: 0.9,
            barPercentage: 1.0,
  //          ticks: {
    //          callback: function(value, index, values) {
      //          console.log("value "+value+"index "+index+"values "+values);
        //        var newtick = value+" (Total Committed: "+numeral(financialprogresstotal[index]).format('($0,0[.]]00 a)')+")";
          //      return newtick; 
            //  },
          //  }
            }],
          yAxes: [{ 
            stacked: true, 
            display: false
            
            }],
        }, // scales

    }
};
console.log(config);
return config;
};
//var chart_1_documentation = new Chart(ctx, config);


