import React, { Component } from 'react'
import Layout from '../Layout/index'
import ReportedTable from '../Tables/reportedPosts'
import UserRoute from '../UserRoute/Route'

export default class reportedPostTable extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="reported_posts_table">
                 
                <div className="reportePostTable">
                     <ReportedTable />
                </div>

               
            </Layout>
        )
    }
}
