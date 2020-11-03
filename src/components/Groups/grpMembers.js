import React, { useEffect,useState } from 'react'
import Layout from '../Layout/index'
import GrpMembers from '../Tables/grpMembers'
import {httpGet,httpPatch,httpPost} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import avatar from '../Users/avatar.png'
import BlockGroupMemberModal from '../Modals/blockGroupUser'
import {NotificationManager} from 'react-notifications'
export const GrpMembersView =(props)=> {
    const Uid = props.match.params.id
    const [getGroupMembers, SetgetGroupMembers] = useState([])
    const [blockUserId , setblockUserId]  = useState()
    const [is_user_blocked , setis_user_blocked]  = useState()
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

        const  blockUser = async ()=>{
            const userId ={
                user_id:blockUserId
            }
            try {
                showLoader()
                const res = await httpPost(`groups/${props.match.params.id}/${is_user_blocked === true ?"unblock_user":"block_user"}/`,userId)
                console.log(res)
                if (res.status === 201) {
                    groupMembers()
                    NotificationManager.success(
                        " Succesfully",
                        "Yepp",
                        3000
                    );
                     console.log(res)
                groupMembers()
                hideLoader()
                }
                hideLoader()
            } catch (error) {
                hideLoader()
            }
        }

        const getUserId =(id,is_user_blocked)=>{
            setblockUserId(id)
            setis_user_blocked(is_user_blocked)
            
        }

        return (
            <div>
            <Layout RouteUserLayout={
                props.history
            } page="all_groups" activepage="keepOpenGroup">
                   
                   
                <div className="allGrpsWrapper">

                <GrpMembers 
                getGroupMembers={getGroupMembers}
                 upgradeUserRole={upgradeUserRole}
                 getUserId={getUserId}
                 /> 
                    
                </div>
                
            </Layout>
            <BlockGroupMemberModal userStatus={is_user_blocked} blockUser={blockUser} />
            </div>
        )
    }

