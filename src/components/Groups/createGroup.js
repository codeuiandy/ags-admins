import React, { useState,useEffect } from 'react'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import Layout from '../Layout/index'
import Grpicon from './Group.png'
import {httpPostFormData,httpPut,httpPatch} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import axios from 'axios'
export const CreateGroup=(props)=>  {
    let [Group , setGroup] = useState({
    
        name: "",
        description: "",
        thumbnail: "",
        openOrClose:"false",
        previewImg:null,
        editPreview:""
    
})

console.log(Group.previewImg)

    let [getEditDetails, setEditDetails] = useRecoilState(delet_edit_Handle)
    console.log("edit details",getEditDetails)


   

      
useEffect(() => {
    // console.log("edit details useEffect",getEditDetails)
    getEditGroup()

    const instance = axios.create({
    baseURL: 'https://www.timmzy.com/api/v1/admin/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMmUyOTA0OGMtMGNjYS00MmQzLWJmOTEtYzU0MzBhMTczMzkwIiwidXNlcm5hbWUiOiJ0b2JpbG9iYSIsImV4cCI6MTYzMjM4NTE3NCwiZW1haWwiOiJ0ZXN0dG9iaUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwMTI4MTE3NH0.5jleNvn-WxsOre2ztk3OKklvNzRG84xdSYr4QsXtOZM'
    }
  });
  instance.patch('/groups/9beb1fe1-47cc-4e26-ae22-1dea4bdf38b3/', {
    "name": "Another",
  }).then(function (response) {
    // handle success
    console.log(response);
  }).catch(function (error) {
    // handle error
    console.log(error.response);
  })
    
}, [getEditDetails,console.log(Group)])

const getEditGroup=()=>{
 
    if (getEditDetails.usedbyGroupsPage===true) {
        // console.log(">>>edit info",getEditDetails.edit_data.id)
        console.log("edit details",getEditDetails)
        setGroup({
            ...Group,
          name:getEditDetails.edit_data.name,
          description:getEditDetails.edit_data.description,
          editPreview: getEditDetails.edit_data.thumbnail,
          openOrClose: getEditDetails.edit_data.closed,
      })
       }
}



  const CreateTGroup=async()=>{


    if (getEditDetails.usedbyGroupsPage===true) {
        showLoader()
        const currenThumbnailtFile = Group.thumbnail[0]
        try {
            const formData = new FormData();
            formData.append('name', Group.name);
            formData.append('description', Group.description);
            const img = Group.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile)
            formData.append('close', Group.openOrClose === "true"?true:true); 
            formData.append('hidden', false); 
              let res = await httpPatch(`groups/${getEditDetails.edit_id}/`,formData)
             console.log("res status",res) 
             if (res.status === 200) {
                     hideLoader()
              console.log(res)

              setGroup(
                  {
                    name: "",
                    description: "",
                    thumbnail: "",
                    // openOrClose:"false",
                    // previewImg:null,
                    // editPreview:""
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

    else{
    showLoader()
const currenThumbnailtFile = Group.thumbnail[0]

try {
    const formData = new FormData();
    formData.append('name', Group.name);
    formData.append('description', Group.description);
    formData.append('close', Group.openOrClose); 
    formData.append('hidden', false); 
formData.append('thumbnail', currenThumbnailtFile);


      console.log(formData)
      let res = await httpPostFormData("groups/",formData)
     console.log("res status",res.status) 
     if (res.status === 201) {
             hideLoader()
      console.log(res)
      setGroup({
    
        name: "",
        description: "",
        thumbnail: "",
        openOrClose:false,
        previewImg:null,
        editPreview:""
    
})
      NotificationManager.success(
         "Group created successfully.",
        "Yepp",
        3000
    );
     }
    
  
      hideLoader()
} catch (error) {
    hideLoader()
}}}
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

                        {getEditDetails.usedbyGroupsPage===true?"":
                      <img title="Change Image" style={{width:"60px",height:"50px",marginBottom:"5px",borderRadius: "4px"}} src={Group.previewImg==null?Grpicon:Group.previewImg} />
        }      
                     
   
                     {getEditDetails.usedbyGroupsPage===true?
                      <img title="Change Image" style={{width:"60px",height:"50px",marginBottom:"5px",borderRadius: "4px"}} src={Group.editPreview==null?Grpicon:Group.editPreview} />:""
        }      
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
                        <button onClick={CreateTGroup}>{getEditDetails.usedbyGroupsPage===true?"Edit Group":"Create Group"}</button>
                        </div>
                        
                </div>
            </Layout>
        )
    }

