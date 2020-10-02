import React, { Component } from 'react';
import './post.css'
import Layout from '../Layout/index'
import Newposts from './newPostGraph'
import WeeklypostChart from './weeklyPostsChart'
import YearlypostChart from './yearlyChart'
import ReportedPosts from './reportedPosts'
import ReportedPostsWeekly from './reportedWeekly'
import UserRoute from '../UserRoute/Route'
import AllPosts from '../Tables/allPosts'
class overview extends Component {
    constructor(props){
        super(props)
        this.state={
            actviveChart:"weeklyChart"
            ,
            reportedChart:"reportedChartweeklyChart",
            allUsers:[{
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            },
            {
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            },

            {
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            }

            ,{
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            },{
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            },{
                name:"Getting what you want as a pro jae",
                postedby:"John Doe",
                email:"codeuiandy@gmail.com",
                postDate:"12/12/2020",
                reported:"Yes"
            }
        ]
        }
    }
    
    SwitchChart=(actviveChart)=>{
if (actviveChart === "weeklyChart") {
    this.setState({
        actviveChart:"weeklyChart"
    })
}

if (actviveChart === "mothlyChart") {
    this.setState({
        actviveChart:"mothlyChart"
    })
}


if (actviveChart === "yearlyChart") {
    this.setState({
        actviveChart:"yearlyChart"
    })
}

    }

    reportedChartSwitchChart=(reportedChart)=>{
        if (reportedChart === "reportedChartweeklyChart") {
            this.setState({
                reportedChart:"reportedChartweeklyChart"
            })
        }
        
        if (reportedChart === "reportedChartmothlyChart") {
            this.setState({
                reportedChart:"reportedChartmothlyChart"
            })
        }
        
        
        if (reportedChart === "reportedChartyearlyChart") {
            this.setState({
                reportedChart:"reportedChartyearlyChart"
            })
        }
        
            }
    
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="postOverview">
                
                <div className="postsOverview">
                    <div className="postChart1">
                    <h1>New Posts</h1>
                        <div className="switchChart">
                            <span onClick={()=>{this.SwitchChart("weeklyChart")}} className={`weeklyChart ${this.state.actviveChart === "weeklyChart" ? "activeChart" :""}`}>Weekly Post</span>
                            <span onClick={()=>{this.SwitchChart("mothlyChart")}}   className={`weeklyChart ${this.state.actviveChart === "mothlyChart" ? "activeChart" :""}`}>Monthly</span>
                            <span onClick={()=>{this.SwitchChart("yearlyChart")}}   className={`weeklyChart ${this.state.actviveChart === "yearlyChart" ? "activeChart" :""}`}>Yearly</span>
                        </div>
                        {
                            this.state.actviveChart === "weeklyChart" ? (
                                <div>
                                     <WeeklypostChart />
                                </div>
                            )
                            :""
                        }

{
                            this.state.actviveChart === "mothlyChart" ? (
                                <div>
  <Newposts />
                                </div>
                            )
                            :""
                        }


{
                            this.state.actviveChart === "yearlyChart" ? (
                                <div>
                                      <YearlypostChart />
                                </div>
                            )
                            :""
                        }

                       
                    </div>




                    <div className="postChart2">
                    <h1>Reported Posts</h1>
                        <div className="switchCharcts">
                            <span onClick={()=>{this.reportedChartSwitchChart("reportedChartweeklyChart")}} className={` ${this.state.reportedChart === "reportedChartweeklyChart" ? "reportedCharts" :""}`}>Weekly Post</span>
                            <span onClick={()=>{this.reportedChartSwitchChart("reportedChartmothlyChart")}}   className={` ${this.state.reportedChart === "reportedChartmothlyChart" ? "reportedCharts" :""}`}>Monthly</span>
                            
                            <span style={{paddingRight:"30px"}} onClick={()=>{this.reportedChartSwitchChart("reportedChartyearlyChart")}}   className={` ${this.state.reportedChart === "reportedChartyearlyChart" ? "reportedCharts" :""}`}>Yearly</span>
                        </div>
                        {
                            this.state.reportedChart === "reportedChartweeklyChart" ? (
                                <div>
                                     <ReportedPostsWeekly />
                                </div>
                            )
                            :""
                        }

{
                            this.state.reportedChart === "reportedChartmothlyChart" ? (
                                <div>
  <ReportedPosts />
                                </div>
                            )
                            :""
                        }


{
                            this.state.reportedChart === "reportedChartyearlyChart" ? (
                                <div>
                                      <ReportedPosts />
                                </div>
                            )
                            :""
                        }

                       
                    </div>
                </div>

                <div className="allPostsOverview">
                    <br/>
<AllPosts  />
                </div>
                
            </Layout>
        );
    }
}

export default overview;
