import React, { useEffect,useState } from 'react'
import Layout from '../Layout/index'
import GrpMembers from '../Tables/grpMembers'
import {httpGet,httpPost} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import avatar from '../Users/avatar.png'
export const GrpMembersView =(props)=> {
    const Uid = props.match.params.id
    const [getGroupMembers, SetgetGroupMembers] = useState([])

    const groupMembers = async()=>{
        showLoader()
        const res = await httpGet(`groups/${Uid}/get_members`)
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
                const res = await httpPost(`groups/${props.match.params.id}/assign_admin/`,userCurrentRole)
                console.log(res)
                groupMembers()
                hideLoader()
            } catch (error) {
                hideLoader()
            }
        }
        }
        return (
            <Layout RouteUserLayout={
                props.history
            } page="all_groups" activepage="keepOpenGroup">
                   
                   
                <div className="allGrpsWrapper">
                <GrpMembers getGroupMembers={getGroupMembers} upgradeUserRole={upgradeUserRole}/>    
                </div>
                
            </Layout>
        )
    }

