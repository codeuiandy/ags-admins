import React from 'react'
import './index.css'

export default function Route(props) {
    return (
        <div className="routeWrapper">
            <span className="wereTopic">
                {
                    props.Route
                }
            </span>
    <span className="Routedestininition">{props.destination}</span>
        </div>
    )
}
