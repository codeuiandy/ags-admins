import React, { useEffect,useState } from 'react'
import Layout from '../Layout/index'
import GrpMembers from '../Tables/topicFollowers'
import {httpGet,httpPost} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import avatar from '../Users/avatar.png'
export const TopicFollowers =(props)=> {
    const Uid = props.match.params.id
    const [getGroupMembers, SetgetGroupMembers] = useState([])

    const groupMembers = async()=>{
        showLoader()
        const res = await httpGet(`topics/${Uid}/get_members`)
        SetgetGroupMembers(res.data)
        console.log(res.data)
        hideLoader()
        }
    
        useEffect(() => {
            groupMembers()
          }, []); 

        const upgradeUserRole =async(UserId,role)=>{
           
            if (role === "select") {
                console.log("listening...")
            }

            else{
           console.log(UserId,role)
            const userCurrentRole = {
               user_id:UserId,
               option:role,
            };
         
            try {
                showLoader()
                const res = await httpPost(`topics/${props.match.params.id}/assign_admin/`,userCurrentRole)
                console.log(res)
                groupMembers()
            } catch (error) {
                
            }
        }
        }
        return (
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenTopics" page="groups-overview" >
               
                   
                   
                <div className="allGrpsWrapper">
                <GrpMembers getGroupMembers={getGroupMembers} upgradeUserRole={upgradeUserRole}/>    
                </div>
                
            </Layout>
        )
    }

