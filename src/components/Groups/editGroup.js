import React, { useState,useEffect } from 'react'

import Layout from '../Layout/index'
import Grpicon from './Group.png'
import {httpPostFormData,httpGet,httpPatch} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import axios from 'axios'
export const EditGroup=(props)=>  {
    let [Group , setGroup] = useState({
    
        name: "",
        description: "",
        thumbnail: "",
        openOrClose:"false",
        previewImg:null,
        editPreview:""
    
})

      
useEffect(() => {
    getEditGroup()
 
}, [])

const getEditGroup=async()=>{
  showLoader()
try {
  const res = await httpGet(`groups/${props.match.params.id}`)
    console.log("edit details",res)
    setGroup({
      ...Group,
      name:res.data.name,
      description:res.data.description,
      editPreview: res.data.thumbnail,
      openOrClose: res.data.closed,
  })
  hideLoader()
   

} catch (error) {
  
}}
 

    
  

const CreateTGroup=async()=>{
  console.log("thumnail",Group.thumbnail)
  let currenThumbnailtFile = Group.thumbnail[0]

   
        showLoader()
       
        try {
            const formData = new FormData();
            formData.append('name', Group.name);
            formData.append('description', Group.description);
            const img = Group.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile)
            formData.append('close', Group.openOrClose === "true"?true:true); 
            formData.append('hidden', false); 
              let res = await httpPatch(`groups/${props.match.params.id}/`,formData)
             console.log("res status",res) 
             if (res.status === 200) {
                     hideLoader()
              console.log(res)

              setGroup(
                  {
                    name: "",
                    description: "",
                    thumbnail: "",
          
                  }
              )

              NotificationManager.success(
                 "Group edited successfully.",
                "Yepp",
                3000
            );
             }
            
          
              hideLoader()
        } catch (error) {
            console.log(error.response)
            NotificationManager.success(
                error,
               "Opps",
               3000
           );
            hideLoader()
        }


      }
        return (
            <Layout RouteUserLayout={
                props.history
            } page="create-group" activepage="keepOpenGroup">
               
               
                <div className="create-grp">
                    <div className="grp1">
                     <label>Group Name</label>
                     <input type="text"
                     value={Group.name} onChange={(e)=>setGroup({...Group,name:e.target.value})}
                     />
                    </div>


                    <div className="grp3">
                        <input type="file" onChange={(e)=>setGroup({...Group,thumbnail:e.target.files,previewImg:URL.createObjectURL(e.target.files[0]),editPreview:URL.createObjectURL(e.target.files[0])})}  />
                        <div className="getGrpImg">

                     
   
               
                      <img title="Change Image" style={{width:"60px",height:"50px",marginBottom:"5px",borderRadius: "4px"}} src={Group.editPreview==null?Grpicon:Group.editPreview} />
        
                            <p>Drop Image Here Or <span style={{color:"orange"}}>Browse</span> </p>
                            <p>support .jpg,PNG.</p>
                        </div>
                        </div>


                        <div className="grp4">
                        <label>
                        Description
                        </label>

                        <textarea 
                        value={Group.description} onChange={(e)=>setGroup({...Group,description:e.target.value})}
                         placeholder="Write something nice about the group"
                        type="text"/>
                        </div>

                        <div className="createGRpBTN">
                            <div>
                            <div class="form-group">
                      <label>Open Or Closed Group?</label>


    <select value={Group.openOrClose} class="form-control" id="interval"
         onChange={(e)=>setGroup({...Group,openOrClose:e.target.value})}>

      <option value="false">Open Group</option>
      <option value="true">Closed Group</option>
     
    </select>
  </div>
                            </div>
                          
                        </div>
                        <div className="btnCtreate">
                        <button onClick={CreateTGroup}>Edit Group</button>
                        </div>
                        
                </div>
            </Layout>
        )
    }

