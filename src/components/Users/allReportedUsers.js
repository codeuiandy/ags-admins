// import React, { Component } from 'react'
// import AllReportedUser from '../Tables/allReportedUsers'
// import Layout from '../Layout/index'
// import PageRouteInfo from '../UserRoute/Route'
// export default class allReportedUsers extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             allReportedUser:[{
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             },
//             {
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             },

//             {
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             }

//             ,{
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             },{
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             },{
//                 name:"bohn Dooe",
//                 email:"codeuiandy@gmail.com",
//                 Reportedon:"12/12/2020",
//                 reportedFor:"Spam",
//                 reportedBy:"John Matins"
//             }
//         ]	
//         }
//     }

//     getAllReportedUsers=async()=>{

//     }
//     render() {
//         return (
//             <Layout RouteUserLayout={
//                 this.props.history
//             } activepage="reportedUsers" page="reportedUsers">
               
//                 <div className="allusersWrap">
//                 <AllReportedUser allReportedUser={this.state.allReportedUser}
                
//                 />
//                 </div>
               
//             </Layout>
//         )
//     }
// }





import React, { Component } from 'react'
import AllReportedUser from '../Tables/allReportedUsers'
import Layout from '../Layout/index'
import PageRouteInfo from '../UserRoute/Route'
import ProfilePic from '../Tables/profilePic.jpg'
import {httpGet, httpPost} from '../helpers/httpMethods'
import {Link} from 'react-router-dom'
import { showLoader,hideLoader } from '../helpers/loader'
import BlockModal from '../Modals/blockUser'
export default class allUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            usersData:[],
            isActiveUser:"",
            userBlockId:"",
            
        }
        console.log(this.state)
    }

    componentDidMount(){
        this.getUsers()
     
    }

   getUsers = async()=>{
        showLoader()
        const res = await httpGet('reports/')
        console.log(res)
        this.setState({usersData:res.data,isActiveUser:res.data.is_active})
        console.log("ggg",res.data)
        console.log(this.state.isActiveUser)
        hideLoader()
        }

        getUserId=async(id)=>{
      
        let appUsers = this.state.usersData;
        console.log(">>>uID", this.state.userBlockId)
        appUsers.filter((user)=>{

            if (user.id === id) {
                console.log(user.is_active)
                this.setState({
                    isActiveUser:user.is_active,
                    userBlockId:user.id
                })
            }
        })
        console.log(">>>uID", this.state.userBlockId,this.state.isActiveUser)
        }
        

        blockUser=async()=>{
          
            let statusCheck = this.state.isActiveUser === true ? "deactivate" : "activate";
            let data = {status:statusCheck}
          try {
            showLoader()
              const res = httpPost(`users/${this.state.userBlockId}/user_activation/`,data)
              console.log(res)
              this.getUsers()
          } catch (error) {
            hideLoader()
          }
        }

    render() {
        return (
            <div>
            <Layout RouteUserLayout={
                this.props.history
            } activepage="allUsers" page="allUsers">
                  
                <div className="allusersWrap">
                <AllReportedUser allUsers={this.state.usersData} getUserId={this.getUserId}/>
                </div>
               
            </Layout>
            <BlockModal blockUser={this.blockUser} userStatus={this.state.isActiveUser}/>
            </div>
        )
    }
}
