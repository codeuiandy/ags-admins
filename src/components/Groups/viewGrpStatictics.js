
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {Link} from 'react-router-dom'
import {httpGet,httpDelete} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import { NotificationManager } from "react-notifications";

class viewGrpStatictics extends Component {
  constructor(props) {
    super(props);
    console.log(">>>>grapgh",this.props)
    
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

  componentDidMount(){
   this.getGroupDetails()
  }
  // today_comment_count: 0
  // today_likes_count: 0
  // today_post_count: 0
    
  getGroupDetails = async()=>{
    let {today_post_count, today_likes_count, today_comment_count,id} = await this.props.getGroupDetailsData
    this.setState({
      series:[{
        name: "seriesvvv",
        data: [10, 90, 30]
      }]
    })
         }

  render() {
    console.log(">>>>",this.props.getGroupDetailsData)
    let{today_post_count, today_likes_count, today_comment_count,id} = this.props.getGroupDetailsData
    return (
      <div>
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
             <Link to={`/edit_group/${id}`}><button>Edit Group</button> 
             
              </Link> 
              <button  type="button"  data-toggle="modal" data-target="#deleteGroupModal" >Block Group</button>
              <button style={{
                 background: "orange",
                 border: "none",
                 marginRight:"30px",
                 color: "white",
                 fontWeight: 600,
                 borderRadius: "5px",
                width: "113px",
                 height: "45px",
              }} type="button" class="btn btn-primary" data-toggle="modal" data-target="#groupEvent">Add Event</button>
             
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
     
      </div>
    );
  }
}

export default viewGrpStatictics;
