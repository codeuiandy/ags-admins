import React, { useEffect,useState } from 'react'
import {httpGet,httpDelete} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import { NotificationManager } from "react-notifications";
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import ViewGrpStatictics from './viewGrpStatictics'
 import ClosedGrpRequests from '../Tables/closedGrpRequests'
 import moment from 'moment'
 import dateFormater from '../helpers/dateFormater'
 import {DeleteGroup} from '../Modals/DeleteGroup'
export  const ViewGroup =(props)=> {
   const Uid = props.match.params.id
    const [getGroupDetailsData, SetgetGroupDetailsData] = useState([])
    const [groupJoinRequest, SetgroupJoinRequest] = useState([])
    const getGroupDetails = async()=>{
        showLoader()
        const res = await httpGet(`groups/${Uid}/`)
        SetgetGroupDetailsData(res.data)
        hideLoader()
        }
    
        useEffect(() => {
            getGroupDetails()
            getGroupJoinRequests()
          }, []); 

        const  DeleteGroupd =async()=>{
            
  try {
    const res = await httpDelete(`groups/${props.match.params.id}/`)
    console.log(res)
    if (res.status === 204) {
      hideLoader()
      console.log(res)
      NotificationManager.success(
				"Delected Successfully",
				"Yepp!",
				3000
			);
   props.history.goBack()
    }
  } catch (error) {
    
  }
          
          }

        const  getGroupJoinRequests=async()=>{
            try {
              const res = await httpGet(`groups/${props.match.params.id}/get_group_request/`)
              console.log(res.data)
              SetgroupJoinRequest(res.data)
            } catch (error) {
              
            }
          }

        return (
            <div>
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenGroup" page="groups-overview" >

                <div className="viewgroupTitle"> <h1>{getGroupDetailsData.name}</h1></div>
               
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1>  Total Posts</h1>
    <p>{getGroupDetailsData.number_of_post}</p>
    </div>

    <div className="grp-overview1">
    <h1>

 Total Comments</h1>
   
<p>{getGroupDetailsData.total_comment}</p>


        </div>

        <div className="grp-overview1">
       
        <h1>Total Likes</h1>
<p>{getGroupDetailsData.total_likes}</p>
        </div>


        <div className="grp-overview1">
       

        <h1>Last Active Date</h1>
        <p>{dateFormater(getGroupDetailsData.lastest_update)}</p>
        </div>

        <div className="grp-overview1">
       

       <h1 onClick={()=>props.history.push(`/group_members/${getGroupDetailsData.id}`)}> Members</h1>
<p onClick={()=>props.history.push(`/group_members/${getGroupDetailsData.id}`)}>{getGroupDetailsData.members_count}</p>
       </div>
</div>
               
<div className="grp-overview-table">
<ViewGrpStatictics getGroupDetailsData={getGroupDetailsData}/>
</div>
     
          {
            groupJoinRequest.length? 
            <div>
               <div className="viewgroupTitle" style={{marginBottom:"20px",marginTop:"-20px",marginLeft:"3px"}}> <h1>Group Join Request</h1></div>
               <div className="closedGRpRequests">
            <ClosedGrpRequests groupJoinRequest={groupJoinRequest}/>
            </div>
            </div>
           
            
            :""
          }
         
      
          
            </Layout>
            <DeleteGroup DeleteGroupd={DeleteGroupd}/>
            </div>
        )
    }
