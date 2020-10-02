import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class topicUpdates extends Component {
    render() {
        return (
            <div>
                <div className="grpInfo1">
                    <div className="grpInfoChildHeader1">Top Topics</div>
                    <div className="grpInfoChildHeader2">10 Least Performing Topics</div>
                    <div className="grpInfoChildHeader3">Latest Topics</div>
                    <div className="grpInfoChildHeader4">All Topics</div>
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
                    <div className="grpInfoChild3">
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
                            <li><Link to="/all_topics">View More</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
