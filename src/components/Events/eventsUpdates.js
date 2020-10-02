import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class GrpUpdates extends Component {
    render() {
        return (
            <div>
                <div className="grpInfo1 eventGridinfo">
                    <div className="grpInfoChildHeader1">Top Events</div>
                    <div className="grpInfoChildHeader2">10 Least Performing Events</div>
                    
                    <div className="grpInfoChildHeader4">All Events</div>
                    <div className="grpInfoChild1">
                        <ul>
                            <li>Led Zeppelin </li>
                            <li>Deep Purple </li>
                            <li>Black Sabbath </li>
                            <li>The Who The Eagles </li>
                            <li>The Doors Pink Floyd </li>
                            <li>The Rolling </li>
                            <li>Stones Blonde</li>
                            <li> Pigeons</li>
                            <li> Blonde Koalas</li>
                            <li> Blonde Koalas</li>
                        </ul>
                    </div>
                    <div className="grpInfoChild2">
                    <ul>
                            <li>Led Zeppelin </li>
                            <li>Deep Purple </li>
                            <li>Black Sabbath </li>
                            <li>The Who The Eagles </li>
                            <li>The Doors Pink Floyd </li>
                            <li>The Rolling </li>
                            <li>Stones Blonde</li>
                            <li> Pigeons</li>
                            <li> Blonde Koalas</li>
                            <li> Blonde Koalas</li>
                        </ul>
                    </div>
                  
                    <div className="grpInfoChild4">
                    <ul>
                            <li><Link to="/view_event">Led Zeppelin </Link></li>
                            <li><Link to="/view_event">Deep Purple </Link></li>
                            <li><Link to="/view_event">Black Sabbath</Link> </li>
                            <li><Link to="/view_event">The Who The Eagles</Link> </li>
                            <li><Link to="/view_event">The Doors Pink Floyd </Link></li>
                           
                            <li><Link to="/event_list">View More</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
