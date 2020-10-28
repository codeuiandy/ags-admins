
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {Link} from 'react-router-dom'
class viewGrpStatictics extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    let{today_post_count, today_likes_count, today_comment_count} = this.props.getGroupDetailsData
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
          data: [30, 40, 0]
        },
    
    
      ]
      ,fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      colors:['#F44336', '#E91E63', '#9C27B0']
    };
  }

  render() {
    console.log(this.props.getGroupDetailsData)
    let{today_post_count, today_likes_count, today_comment_count,id} = this.props.getGroupDetailsData
    return (
      <div className="app">
        <div className="row">
        <div className="col col-md-6 col-sm-12">
          <div className="mixed-chart">
          <div className="grpoDetails">
    <span>Today Posts </span> <span>{today_post_count}</span>
          </div>
  
          <div className="grpoDetails">
    <span>Today Likes</span> <span>{ today_likes_count}</span>
          </div>

          <div className="grpoDetails">
    <span>Today Comments </span> <span>{today_comment_count}</span>
          </div>
          </div>  

          <div className="grpActionView">
             <Link to={`/edit_topic/${id}`}><button>Edit Topic</button></Link> 
              <button  type="button"  data-toggle="modal" data-target="#deleteTopicModal" >Block Topic</button>
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
