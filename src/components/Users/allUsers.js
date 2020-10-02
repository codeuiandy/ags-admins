import React, { Component } from 'react'
import Alluser from '../Tables/allUsers'
import Layout from '../Layout/index'
import PageRouteInfo from '../UserRoute/Route'
import ProfilePic from '../Tables/profilePic.jpg'
export default class allUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            allUsers:[{
                avatar:ProfilePic,
                name:"John Dooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Gold",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },
            {
                avatar:ProfilePic,
                name:"John Dooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Gold",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },

            {
                avatar:ProfilePic,
                name:"Rohn kooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Silver",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }

            ,{
                avatar:ProfilePic,
                name:"kohn Dooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Gold",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                avatar:ProfilePic,
                name:"cohn Dooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Silver",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                avatar:ProfilePic,
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                subscriptionStatus:"Silver",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }
        ]
        }
    }
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="allUsers" page="allUsers">
                  
                <div className="allusersWrap">
                <Alluser allUsers={this.state.allUsers}/>
                </div>
               
            </Layout>
        )
    }
}
