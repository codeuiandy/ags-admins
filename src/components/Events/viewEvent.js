import React, { Component } from 'react'
import Layout from '../Layout/index'
import EventImage from './eventImage.png'
import {httpPostFormData,httpPut,httpPatch,httpGet} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import 'moment-timezone';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications'

export default class viewEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            eventDate:"recentEvents",
            event:[],

        }
    } 


     getEvents=async()=>{
         console.log(this.props)
        try {
            const res = await httpGet(`events/${this.props.match.params.id}/`)
            if (res.status === 200) {
                this.setState({
                    event:res.data,

                })
            }
            console.log(this.state)
        } catch (error) {
            
        }
    }
    
    componentDidMount(){
        this.getEvents()
    }

  


    render() {
        let event = this.state.event
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenEvents">
                <div style={{borderRadius:"5px",paddingTop:"30px",marginBottom:"40px"}} id="event-list-wraper2">
                    <div className="view-event">
                        <h1>{event.title}</h1>
                        <img src={event.banner} alt="" srcset=""/>
         
{/* city: "Lagos"
created_at: "2020-11-05T11:03:05.761173Z"
cta_button: ""
description: "Ladies Monday talk with Code Ui Andy"
end_datetime: "2020-11-10T11:15:00.000000Z"
event_type: "internal"
free: false
id: 10
is_flagship: false
liked: []
link: "https://codeuiandy.netlify.app/"
location: null
medium: "hybrid"
modified_at: "2020-11-05T11:03:05.761188Z"
price: "2000.00"
registration_link: ""
seats: 700
start_datetime: "2020-11-07T10:30:00.000000Z"
status: null
title: "Ladies Monday Talk" */}
                        <div className="aboutEvent">
                            <h1>Event Description </h1>
                            <p>{event.description}</p>
                        </div>
                        <div className="evenTiming">
                            <div className="eventTiming1">
                                <h1>Schedule</h1>
                                 <p>{moment(event.start_datetime).format("DD-MM-YYYY hh:mm")} To {moment(event.end_datetime).format("DD-MM-YYYY hh:mm")}</p>
                            </div>
                            <div className="eventTiming2">
                            <h1>Location</h1>
                                <p>{event.address}</p>
                            </div>
                            <div className="eventTiming3">
                            <h1>Presenter</h1>
                                <p>{event.user ? event.user.first_name : null} {event.user ? event.user.last_name : null}</p>
                            </div>
                            <div className="eventTiming4">
                            <h1>Event Type</h1>
                                <p>{event.event_type}</p>
                            </div>
                        </div>

                        <div className="evenStatictics">
                            <h1>Event Statistics</h1>
                            <h2>Conversion</h2>

                            <div className="viewEventOverView">
                                <div className="santictic-nums">
                                    <div>
                            <h1>132</h1>
                            <p>Unique Visitors</p>
                                    </div>
                                    <div>
                                    <h1>132</h1>
                            <p>Registration</p>
                                    </div>
                                    <div>
                                    <h1>132</h1>
                            <p>Shares</p>
                                    </div>
                                </div>
                                <hr/>

                                <div className="box">
																		<div className="percentage">
																			<svg>
																				<circle cx="70" cy="70" r="70"></circle>
																				<circle
																					style={{
																						strokeDashoffset:
																							"calc(440 - (440 * 70) / 100)",
																						stroke: "#FDAD00",
																					}}
																					cx="70"
																					cy="70"
																					r="70"
																				></circle>
																			</svg>
																			<div className="atendeNumber">
																				<h3>70%</h3>
																			</div>
																		</div>
                                                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
