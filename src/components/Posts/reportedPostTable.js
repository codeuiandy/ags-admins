import React, { Component } from 'react'
import Layout from '../Layout/index'
import ReportedTable from '../Tables/reportedPosts'
import {httpGet, httpPatch, httpPostFormData,httpPut} from '../helpers/httpMethods'
import DeleteModal from '../Modals/comfirmModal'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'

export default class reportedPostTable extends Component {
    constructor(props){
        super(props)
        this.state={
            postController:"Icebreaker",
            startDate:new Date(),
            Icebreaker:[],
            deletId:"",
        }
    }

    
    componentDidMount(){
        this.getIcebreakers()
        // this.getPostToFeeds()
    }

    getDeletId=(id)=>{
    this.setState({deletId:id})
   
    }

    getIcebreakers=async()=>{
        showLoader()
       try {
        const res = await httpGet(`reports/`)
        console.log(res.status)
        if (res.status === 200) {
            this.setState({Icebreaker:res.data})
            console.log(res)
            hideLoader()

        }
       } catch (error) {
           
       }
    }

    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="reported_posts_table">
                 
                <div className="reportePostTable">
                     <ReportedTable Icebreaker={this.state.Icebreaker} getDeletId={this.getDeletId}/>
                </div>

               
            </Layout>
        )
    }
}
