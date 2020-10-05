import React, { useState,useEffect } from 'react'

import './topics.css'
import Layout from '../Layout/index'
import ImageIcon from '../Posts/Vector.png'
import ImageIcon2 from './Vector.png'
import {httpPatch, httpPostFormData,httpGet} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'

export const EditTopic =(props) => {
   
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
}, [])

const getEditTopic = async ()=>{
  showLoader()
 try {
const res = await httpGet(`topics/${props.match.params.id}`)
    console.log(">>>",res.data.title)
    setTopic({
        ...topic,
      title:res.data.title,
      description:res.data.description,
      editPreview: res.data.thumbnail
  })
  hideLoader()
 } catch (error) {
   hideLoader()
 }
    
}


  const EditTopic=async()=>{

        showLoader()
        const currenThumbnailtFile = topic.thumbnail[0]
        try {
            const formData = new FormData();
            formData.append('title', topic.title);
            formData.append('description', topic.description);
             const img = topic.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile) 
        //   const data = topic
        //   console.log(data)
              let res = await httpPatch(`topics/${props.match.params.id}/`,formData)
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
          <input onClick={(e)=>setTopic({...topic})} type="file"  onChange={(e)=>setTopic({...topic,editPreview:URL.createObjectURL(e.target.files[0]),thumbnail:e.target.files})}/>
<span>
    <img  src={ImageIcon} alt=""/>
</span>
      </div>

    

  <img className="previewImgData" src={topic.editPreview} alt=""/>
  

      </div>
                </form>
  

            <div className="addTopicBtn">
                <button onClick={EditTopic}>Edit Topic</button>
            </div>
    
                </div>
            </Layout>
        )
    
}
