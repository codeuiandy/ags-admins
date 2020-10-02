import React, { useState,useEffect } from 'react'
import { httpGet } from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
import {TopicsTable }from '../Tables/topicsTable'
import {DeletModal} from '../Modals/deleteModal'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
export  const  AllTopicsData=(props)=> {

  const [getTopic, setTopic] = useState([])
  let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)
  useEffect(() => {
    getAllTopics()
      if (getDeletDetails.reload_state === true) {
            getAllTopics()
      }
  }, [getDeletDetails.reload_state === true])

 const getAllTopics = async()=>{
     showLoader()
   const res = await httpGet("topics/");
   console.log(res.data)
   console.log(res.status)
   if (res.status === 200) {
    hideLoader()

    setDeletDetails({...getDeletDetails,reload_state:false})
setTopic(res.data)
console.log("app topics",res)
  }}
        return (
            <div>
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenTopics" page="all_topics">
                
                <div className="allTopics">
                    <TopicsTable getTopic={getTopic}/>
               
                </div>   
                 
            </Layout> 
            <DeletModal/>
            </div>
        )
    }

