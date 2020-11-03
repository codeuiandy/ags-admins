import React, { useState,useEffect } from 'react'
import { httpGet } from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
import {TopicsTable }from '../Tables/topicsTable'
import {DeletModal} from '../Modals/deleteModal'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import TopicModal from '../Modals/createTopic'
export  const  AllTopicsData=(props)=> {



  const [getTopic, setTopic] = useState([])
  let [modalEdit, setmodalEdit] = useState()
  let [modalType, setmodalType] = useState("create")
  let [GroupId, setGroupId] = useState()
  
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

  const GetEditDataModals=(type,data)=>{
    setmodalEdit(data)
    setmodalType(type)
    setGroupId(data.id)
    console.log("get edit data>>>",data)
  }


        return (
            <div>
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenTopics" page="all_topics">
                
                <div className="table-wrap">
                <div type="button"  data-toggle="modal" data-target="#groupModal" className="createPostBtn-new">
                             <button>Create new Topic</button>
                        </div>
                    
                    <TopicsTable getTopic={getTopic}
                     GetEditDataModals={GetEditDataModals }
                    />
               
                </div>   
                 
            </Layout> 
            <DeletModal
            />

            <TopicModal
            modalEdit={modalEdit}
             getAllGroups={getAllTopics}
             modalType={modalType}
             setmodalType={setmodalType}
             GroupId={GroupId}
             />
                
                
            </div>
        )
    }

