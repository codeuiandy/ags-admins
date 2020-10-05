import React, { useEffect,useState } from 'react'
import Layout from '../Layout/index'
import TopicFollowerx from '../Tables/topicFollowers'
import {httpGet} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import UserRoute from '../UserRoute/Route'
export const TopicFollowers =(props)=> {
    const Uid = props.match.params.id
    const [getGroupMembers, SetgetGroupMembers] = useState([])

    const groupMembers = async()=>{
        showLoader()
        const res = await httpGet(`topics/${Uid}/`)
        SetgetGroupMembers(res.data.followers)
        hideLoader()
        }
    
        useEffect(() => {
            groupMembers()
          }, []); 


        return (
            <Layout RouteUserLayout={
                props.history
            } page="all_groups" activepage="keepOpenGroup">
                   
                   
                <div className="allGrpsWrapper">
                <TopicFollowerx getGroupMembers={getGroupMembers}/>    
                </div>
                
            </Layout>
        )
    }

