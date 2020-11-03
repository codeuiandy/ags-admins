

import React, { useState,useEffect } from 'react'
import { httpGet } from '../helpers/httpMethods'
import { showLoader,hideLoader } from '../helpers/loader'
import Layout from '../Layout/index'
import {GroupTable} from '../Tables/groupTable'
import {DeletModal} from '../Modals/deleteModal'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import CreateGroupModal from '../Modals/createGroup'
export  const  AllGroups=(props)=> {

  const [getGroup, setGroup] = useState([])
  let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)
  let [modalEdit, setmodalEdit] = useState()
  let [modalType, setmodalType] = useState("create")
  let [GroupId, setGroupId] = useState()


  const GetEditDataModals=(type,data)=>{
    setmodalEdit(data)
    setmodalType(type)
    setGroupId(data.id)
    console.log("get edit data>>>",data)
  }

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
                
                <div className="table-wrap">

                
                        <div type="button"  data-toggle="modal" data-target="#groupModal" className="createPostBtn-new">
                             <button>Create new group</button>
                        </div>
                    
                    {/* <GroupsTable getGroup={getGroup}/> */}
                    <GroupTable 
                    getGroup={getGroup}
                    GetEditDataModals={GetEditDataModals}
                    />    
                </div>   
                 
            </Layout> 
            <DeletModal/>
            <CreateGroupModal
            modalEdit={modalEdit}
             getAllGroups={getAllGroups}
             modalType={modalType}
             setmodalType={setmodalType}
             GroupId={GroupId}
             />
            </div>
        )
    }


