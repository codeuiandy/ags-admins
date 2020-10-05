import React, { useEffect,useState } from 'react'
import {httpGet} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
// import './index.css'
import {Link} from 'react-router-dom'
import TopicStatictics from './topicStatictics'
import moment from 'moment'
export  const ViewTopic =(props)=> {
   const Uid = props.match.params.id
    const [getGroupDetailsData, SetgetGroupDetailsData] = useState([])

    const getGroupDetails = async()=>{
        showLoader()
        const res = await httpGet(`topics/${Uid}/`)
        SetgetGroupDetailsData(res.data)
        hideLoader()
        }
    
        useEffect(() => {
            getGroupDetails()
          }, []); 

        return (
          <Layout RouteUserLayout={
            props.history
        } activepage="keepOpenTopics" page="groups-overview" >

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
        <p>{moment(getGroupDetailsData.lastest_update).format("DD/MM/YYYY")}</p>
        </div>

        <div className="grp-overview1">
       

       <h1 onClick={()=>props.history.push(`/topic_followers/${getGroupDetailsData.id}`)}> Members</h1>
<p onClick={()=>props.history.push(`/topic_followers/${getGroupDetailsData.id}`)}>{getGroupDetailsData.number_of_followers}</p>
       </div>
</div>
               
<div className="grp-overview-table">
<TopicStatictics getGroupDetailsData={getGroupDetailsData}/>
</div>
{/* <div className="viewgroupTitle" style={{marginBottom:"20px",marginTop:"-20px",marginLeft:"3px"}}> <h1>Group Join Request</h1></div>
      <div className="closedGRpRequests">
          
          <ClosedGrpRequests/>
          </div> */}
            </Layout>
        )
    }
