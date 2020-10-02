import React, { useEffect,useState } from 'react'
import {httpGet} from '../helpers/httpMethods'
import {Link} from 'react-router-dom'
import { showLoader,hideLoader } from '../helpers/loader'

 const GrpUpdates = ()=> {
const [getTopTenGrpsData, SetgetTopTenGrpsData] = useState([])

const getTopTenGrps = async()=>{
    showLoader()
    const res = await httpGet('groups/')
    SetgetTopTenGrpsData(res.data)
    hideLoader()
    }

    useEffect(() => {
        getTopTenGrps()
      }, []); 
      

    

        return (
            <div>
                {console.log(getTopTenGrpsData)}
                <div className="grpInfo1">
                    <div className="grpInfoChildHeader1">Top Groups</div>
                    <div className="grpInfoChildHeader2">10 Least Performing Groups</div>
                    <div className="grpInfoChildHeader3">Latest Groups</div>
                    <div className="grpInfoChildHeader4">All Groups</div>
                    <div className="grpInfoChild1">
                        <ul>
                            <li>Led Zeppelin </li>
                            <li>Deep Purple </li>
                            <li>Black Sabbath </li>
                            <li>The Who The Eagles </li>
                            <li>The Doors Pink Floyd </li>
                            <li>The Rolling </li>
                            <li>Stones Blonde</li>
                            <li> Pigeons</li>
                            <li> Blonde Koalas</li>
                            <li> Blonde Koalas</li>
                        </ul>
                    </div>
                    <div className="grpInfoChild2">
                    <ul>
                            <li>Led Zeppelin </li>
                            <li>Deep Purple </li>
                            <li>Black Sabbath </li>
                            <li>The Who The Eagles </li>
                            <li>The Doors Pink Floyd </li>
                            <li>The Rolling </li>
                            <li>Stones Blonde</li>
                            <li> Pigeons</li>
                            <li> Blonde Koalas</li>
                            <li> Blonde Koalas</li>
                        </ul>
                    </div>
                    <div className="grpInfoChild3">
                    <ul>
                            <li>Led Zeppelin </li>
                            <li>Deep Purple </li>
                            <li>Black Sabbath </li>
                            <li>The Who The Eagles </li>
                            <li>The Doors Pink Floyd </li>
                            <li>The Rolling </li>
                            <li>Stones Blonde</li>
                            <li> Pigeons</li>
                            <li> Blonde Koalas</li>
                            <li> Blonde Koalas</li>
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