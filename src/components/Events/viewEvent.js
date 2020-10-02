import React, { Component } from 'react'
import Layout from '../Layout/index'
import EventImage from './eventImage.png'

export default class viewEvent extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenEvents">
                <div style={{borderRadius:"5px",paddingTop:"30px",marginBottom:"40px"}} id="event-list-wraper2">
                    <div className="view-event">
                        <h1>Ted Talk @ MUSON</h1>
                        <img src={EventImage} alt="" srcset=""/>

                        <div className="aboutEvent">
                            <h1>Event Description </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas ut 
                                perspiciatis facilis sequi dignissimos, 
                                provident omnis est adipisci accusamus dolorem tempora dolore, esse
                                 modi soluta corrupti, sit cum ducimus.</p>
                        </div>
                        <div className="evenTiming">
                            <div className="eventTiming1">
                                <h1>Schedule</h1>
                                <p>Friday, 10 June 2020 at 10AM - 2PM</p>
                            </div>
                            <div className="eventTiming2">
                            <h1>Location</h1>
                                <p> Marina Exit, Lagos Island, Lagos, Nigeria</p>
                            </div>
                            <div className="eventTiming3">
                            <h1>Presenter</h1>
                                <p>John Davius</p>
                            </div>
                            <div className="eventTiming4">
                            <h1>Event Type</h1>
                                <p>Paid</p>
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
