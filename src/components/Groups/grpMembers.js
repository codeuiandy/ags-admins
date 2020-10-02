import React, { useEffect,useState } from 'react'
import Layout from '../Layout/index'
import GrpMembers from '../Tables/grpMembers'
import {httpGet} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import UserRoute from '../UserRoute/Route'
export const GrpMembersView =(props)=> {
    const Uid = props.match.params.id
    const [getGroupMembers, SetgetGroupMembers] = useState([])

    const groupMembers = async()=>{
        showLoader()
        const res = await httpGet(`groups/${Uid}/`)
        SetgetGroupMembers(res.data.members)
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
                <GrpMembers getGroupMembers={getGroupMembers}/>    
                </div>
                
            </Layout>
        )
    }

