import React, { useEffect,useState } from 'react'
import {httpGet} from '../helpers/httpMethods'
import {Link} from 'react-router-dom'
import { showLoader,hideLoader } from '../helpers/loader'

 const UsersUpdates = ()=> {
const [topTenTopics, setTopTenTopics] = useState([])

const getTopTenGrps = async()=>{
    showLoader()
    const res = await httpGet('users/')
    setTopTenTopics(res.data)
    hideLoader()
    }

    useEffect(() => {
        getTopTenGrps()
      }, []); 
      

    

        return (
            <div>
                {console.log(topTenTopics)}
                <div className="grpInfo1">
                <div className="grpInfoChildHeader1">Top 10 Users</div>
                    <div className="grpInfoChildHeader2">10 Least Active Users</div>
                    <div className="grpInfoChildHeader3">New Users</div>
                    <div className="grpInfoChildHeader4">All Users</div>
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
                            <li>Led Zeppefrrlin </li>
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
                            topTenTopics.slice(0,10).map((data, i) => {
                            return(
                                
                            <li><Link to={`/user_info/${data.id}`}>{`${data.first_name} ${data.last_name}`}</Link></li>
                               
                            )
                            })
                        }
                           
                           
                            <li><Link to="/all_Topics">View More</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

export default UsersUpdates