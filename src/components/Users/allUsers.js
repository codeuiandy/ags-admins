import React, { Component } from 'react'
import Alluser from '../Tables/allUsers'
import Layout from '../Layout/index'
import PageRouteInfo from '../UserRoute/Route'
import ProfilePic from '../Tables/profilePic.jpg'
import {httpGet} from '../helpers/httpMethods'
import {Link} from 'react-router-dom'
import { showLoader,hideLoader } from '../helpers/loader'
export default class allUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            usersData:[],
            
        }
    }

    componentDidMount(){
        this.getTopTenGrps()
    }

   getTopTenGrps = async()=>{
        showLoader()
        const res = await httpGet('users/')
        console.log(res)
        this.setState({usersData:res.data})
        hideLoader()
        }

    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="allUsers" page="allUsers">
                  
                <div className="allusersWrap">
                <Alluser allUsers={this.state.usersData}/>
                </div>
               
            </Layout>
        )
    }
}
