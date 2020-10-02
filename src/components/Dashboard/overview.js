import React, { Component } from "react";
import "./index.css";

export default class overview extends Component {
	render() {
		return (
			<div>
				 <div className="grp-overview">
    <div className="grp-overview1">
	<h1> <i class="fa fa-users" aria-hidden="true"></i>Total Users</h1>
<p>12000</p>
    </div>

    

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i>Active Users</h1>
<p>12000</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-calendar" aria-hidden="true"></i> Active Events</h1>
<p>6000</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fas fa-briefcase"></i> Opportunities</h1>
<p>120</p>
       </div>

	   <div className="grp-overview1">
    <h1> <i class="fas fa-user-friends"></i> 

 Total Groups</h1>
   
<p>12</p>


        </div>
</div>
				{/* <div className="dashbordOverview">
					<span className="overviewWrap">
						<h1>80</h1>
						<span>New Registers. </span>
						<span>120 members</span>
						<hr />
					</span>
					<span className="overviewWrap">
						<h1>80</h1>
						<span>New Events</span>
						<span>52 Events</span>
						<hr />
					</span>
					<span className="overviewWrap">
						<h1>80</h1>
						<span>Opportunities</span>

						<hr />
					</span>
				</div> */}
			</div>
		);
	}
}
