import React, { useEffect,useState } from 'react'
import {httpGet} from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import ViewGrpStatictics from './viewGrpStatictics'
 import ClosedGrpRequests from '../Tables/closedGrpRequests'
export  const ViewGroup =(props)=> {
   const Uid = props.match.params.id
    const [getTopTenGrpsData, SetgetTopTenGrpsData] = useState([])

    const getTopTenGrps = async()=>{
        showLoader()
        const res = await httpGet(`groups/${Uid}/`)
        SetgetTopTenGrpsData(res.data)
        hideLoader()
        }
    
        useEffect(() => {
            getTopTenGrps()
          }, []); 

        return (
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenGroup" page="groups-overview" >

                <div className="viewgroupTitle"> <h1>Bright Minds Fish Club</h1></div>
               
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1>  Total Posts</h1>
    <p>{getTopTenGrpsData.number_of_post}</p>
    </div>

    <div className="grp-overview1">
    <h1>

 Total Comments</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1>Total Likes</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>Last Active Date</h1>
<p>12/01/2020</p>
        </div>

        <div className="grp-overview1">
       

       <h1 onClick={()=>props.history.push(`/group_members/${getTopTenGrpsData.id}`)}> Members</h1>
<p onClick={()=>props.history.push(`/group_members/${getTopTenGrpsData.id}`)}>{getTopTenGrpsData.members_count}</p>
       </div>
</div>
               
<div className="grp-overview-table">
<ViewGrpStatictics/>
</div>
<div className="viewgroupTitle" style={{marginBottom:"20px",marginTop:"-20px",marginLeft:"3px"}}> <h1>Group Join Request</h1></div>
      <div className="closedGRpRequests">
          
          <ClosedGrpRequests/>
          </div>
            </Layout>
        )
    }
