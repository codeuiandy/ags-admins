import React, { useState,useEffect } from 'react'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import './topics.css'
import Layout from '../Layout/index'
import ImageIcon from '../Posts/Vector.png'
import ImageIcon2 from './Vector.png'
import UserRoute from '../UserRoute/Route'
import {httpPostFormData,httpPut} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'

export const CreateTopics =(props) => {
    let [getEditDetails, setEditDetails] = useRecoilState(delet_edit_Handle)
    console.log("edit details",getEditDetails)
let [topic , setTopic] = useState({
    
        title: "",
        description: "",
        thumbnail: "",
        previewImg:"",
        editPreview:""
    
})

console.log(topic.previewImg)


useEffect(() => {
    // console.log("edit details useEffect",getEditDetails)
    getEditTopic()
}, [getEditDetails])

const getEditTopic=()=>{
 
    if (getEditDetails.edit_content===true) {
        console.log(">>>",getEditDetails,getEditDetails.edit_data.thumbnail)
        setTopic({
            ...topic,
          title:getEditDetails.edit_data.title,
          description:getEditDetails.edit_data.description,
          editPreview: getEditDetails.edit_data.thumbnail
      })
       }
}


  const CreateTopic=async()=>{

    if (getEditDetails.edit_content===true) {
        showLoader()
        const currenThumbnailtFile = topic.thumbnail[0]
        try {
            const formData = new FormData();
            formData.append('title', topic.title);
            formData.append('description', topic.description);
             const img = topic.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile) 
        //   const data = topic
        //   console.log(data)
              let res = await httpPut(`topics/${getEditDetails.edit_id}/`,formData)
             console.log("res status",res) 
             if (res.status === 200) {
                     hideLoader()
              console.log(res)
              setTopic({
                  title:"",
                  description: "",
                  thumbnail: ""
              })
              NotificationManager.success(
                 "Topic edited successfully.",
                "Yepp",
                3000
            );
             }
            
          
              hideLoader()
        } catch (error) {
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
const currenThumbnailtFile = topic.thumbnail[0]

try {
    const formData = new FormData();
formData.append('title', topic.title);
formData.append('description', topic.description);
formData.append('thumbnail', currenThumbnailtFile);


      console.log(formData)
      let res = await httpPostFormData("topics/",formData)
     console.log("res status",res.status) 
     if (res.status === 201) {
             hideLoader()
      console.log(res)
      setTopic({
          title:"",
          description: "",
          thumbnail: ""
      })
      NotificationManager.success(
         "Topic created successfully.",
        "Yepp",
        3000
    );
     }
    
  
      hideLoader()
} catch (error) {
    hideLoader()
}}

  }
        return (
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenTopics" page="create_topic">
                    
                <div className="topics-page">
                    <h1>Add Topic</h1>
                    <hr/>
                <form>
                                <div class="form-group">
    <label for="name">Topic Name</label>
    <input value={topic.title} type="text" class="form-control" 
     placeholder="Enter topic" onChange={(e)=>setTopic({...topic,title:e.target.value})}/>
   
  </div>
  <div class="form-group">
    <label for="aboutPlan">Description</label>
    <textarea value={topic.description} placeholder="Topic description"  class="form-control" id="aboutPlan"
      onChange={(e)=>setTopic({...topic,description:e.target.value})}/>
  </div>

  
  <div className="postActions topicActions">
      <div className="postAction topicAction">
          <input onClick={(e)=>setTopic({...topic,editPreview:""})} type="file"  onChange={(e)=>setTopic({...topic,editPreview:"",thumbnail:e.target.files,previewImg:URL.createObjectURL(e.target.files[0])})}/>
<span>
    <img  src={ImageIcon} alt=""/>
</span>
      </div>

    

   {
       topic.previewImg === ""?"": <img className="previewImgData" src={topic.previewImg} alt=""/>
   }

{
       topic.editPreview === ""?"": <img className="previewImgData" src={topic.editPreview} alt=""/>
   }

    {/* <img style={{width:"50px",height:"50px"}} src={topic.previewImg}/> */}

      </div>
                </form>
  

            <div className="addTopicBtn">
                <button onClick={CreateTopic}>{getEditDetails.edit_content===true?"Edit Topic":"Create Topic"}</button>
            </div>
    
                </div>
            </Layout>
        )
    
}
