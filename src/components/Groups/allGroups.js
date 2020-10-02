

import React, { useState,useEffect } from 'react'
import { httpGet } from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
import {GroupTable} from '../Tables/GroupTable'
import {DeletModal} from '../Modals/deleteModal'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
export  const  AllGroups=(props)=> {

  const [getGroup, setGroup] = useState([])
  let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)
  useEffect(() => {
    getAllGroups()
      if (getDeletDetails.reload_state === true) {
            getAllGroups()
      }
  }, [getDeletDetails.reload_state === true])

 const getAllGroups = async()=>{
     showLoader()
   const res = await httpGet("groups/");
   console.log(res.data)
   console.log(res.status)
   if (res.status === 200) {
    hideLoader()

    setDeletDetails({...getDeletDetails,reload_state:false})
setGroup(res.data)
console.log("app Groups",res)
  }}
        return (
            <div>
            <Layout RouteUserLayout={
                props.history
            } page="all_groups" activepage="keepOpenGroup">
                
                <div className="allGroups allTopics">
                    {/* <GroupsTable getGroup={getGroup}/> */}
                    <GroupTable getGroup={getGroup}/>    
                </div>   
                 
            </Layout> 
            <DeletModal/>
            </div>
        )
    }


