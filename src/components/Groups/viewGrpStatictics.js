
import React, { Component } from "react";
import Chart from "react-apexcharts";

class viewGrpStatictics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Today Posts", "Today Likes", "Today Comments"]
        }
      },
      series: [
        {
          name: "series",
          data: [30, 40, 95]
        },
    
    
      ]
      ,fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      colors:['#F44336', '#E91E63', '#9C27B0']
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
        <div className="col col-md-6 col-sm-12">
          <div className="mixed-chart">
          <div className="grpoDetails">
              <span>Today Posts </span> <span>30</span>
          </div>

          <div className="grpoDetails">
              <span>Today Likes</span> <span>40</span>
          </div>

          <div className="grpoDetails">
              <span>Today Comments </span> <span>95</span>
          </div>
          </div>  

          <div className="grpActionView">
              <button>Edit Group</button>
              <button>Delete Group</button>
          </div>

        </div>

        <div className="col col-md-6 col-sm-12">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              
            />
          </div>  
        </div>
          
        </div>
      </div>
    );
  }
}

export default viewGrpStatictics;
