import React, { Component } from 'react'
import Layout from '../Layout/index'
import GrpMembers from '../Tables/grpMembers'
import UserRoute from '../UserRoute/Route'
export default class grpMembers extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } page="all_groups" activepage="keepOpenGroup">
                   
                   
                <div className="allGrpsWrapper">
                <GrpMembers/>    
                </div>
                
            </Layout>
        )
    }
}
