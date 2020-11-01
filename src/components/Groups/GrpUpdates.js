import React, { useEffect,useState } from 'react'
import {httpGet} from '../helpers/httpMethods'
import {Link} from 'react-router-dom'
import { showLoader,hideLoader } from '../helpers/loader'

 const GrpUpdates = (props)=> {
const [getTopTenGrpsData, SetgetTopTenGrpsData] = useState([])
const [getGroupStatsData, getGroupStatsDataSet] = useState([])
const getTopTenGrps = async()=>{
    showLoader()
    const res = await httpGet('groups/')
    SetgetTopTenGrpsData(res.data)
    hideLoader()
    }

    

    useEffect(() => {
        getTopTenGrps()
        getGroupStatsDataSet(props.groupStatsDatax)

      }, [props.groupStatsDatax]); 
      
 
    let latestGrps = getGroupStatsData.latest === undefined ? "Loading..." : getGroupStatsData.latest

        return (
            <div>

                <div className="grpInfo1">
                    <div className="grpInfoChildHeader1">Top Groups</div>
                    <div className="grpInfoChildHeader2">10 Least Performing Groups</div>
                    <div className="grpInfoChildHeader3">Latest Groups</div>
                    <div className="grpInfoChildHeader4">All Groups</div>
                    <div className="grpInfoChild1">
                        <ul>
                        {
                          getGroupStatsData.top === undefined ? "Loading..." : getGroupStatsData.top.length === 0 ? "No Data Found" : getGroupStatsData.top.slice(0,10).map((data, i) => {
                            return(
                                
                            <li><Link to={`/view_group/${data.id}`}>{data.name}</Link></li>
                               
                            )
                            })
                        }
                        </ul>
                    </div>
                    <div className="grpInfoChild2">
                    <ul>
                        {
                            console.log("res>>>>",getGroupStatsData)
                        }
                    {
                          getGroupStatsData.low === undefined ? "Loading..." : getGroupStatsData.low.length === 0 ? "No Data Found" : getGroupStatsData.low.slice(0,10).map((data, i) => {
                            return(
                                
                            <li><Link to={`/view_group/${data.id}`}>{data.name}</Link></li>
                               
                            )
                            })
                        }
                        </ul>
                    </div>
                    <div className="grpInfoChild3">
                    <ul>
                    {
                          getGroupStatsData.latest === undefined ? "Loading..." : getGroupStatsData.latest.length === 0 ? "No Data Found" : getGroupStatsData.latest.slice(0,10).map((data, i) => {
                            return(
                                
                            <li><Link to={`/view_group/${data.id}`}>{data.name}</Link></li>
                               
                            )
                            })
                        }
                        </ul>
                    </div>
                    <div className="grpInfoChild4">
                    <ul>

                        {
                            getTopTenGrpsData.slice(0,10).map((data, i) => {
                            return(
                                
                            <li><Link to={`/view_group/${data.id}`}>{data.name}</Link></li>
                               
                            )
                            })
                        }
                           
                           
                            <li><Link to="/all_groups">View More</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

export default GrpUpdates