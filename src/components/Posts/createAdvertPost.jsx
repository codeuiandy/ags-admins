import React,{useEffect,useState} from 'react'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import Layout from "../Layout/index"
import adverts from '../Tables/allFeedsTable/adverts'
import {GroupTable} from '../Tables/advertGroups'
import {TopicsTable }from '../Tables/advertTopic'
import DatePicker from "react-datepicker";
import moment from 'moment'
export default function CreateAdvertPost(props) {
     const [getGroup, setGroup] = useState([])
     const [pageType, setpageType] = useState("create")

     const [advertAllGroups, setadvertAllGroups] = useState({
         advertAll:false,
         decide:true,
     })

     const [advertAllTopics, setadvertAllTopics] = useState({
         advertAll:false,
         decide:true,
     })

      const [getTopic, setTopic] = useState([])
 const [topicID, setTopicID] = useState([])
 const [groupID, setGroupID] = useState([])
  const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())


     useEffect(() => {
         GetSingleAdvert()
        getAllGroups()
        getAllTopics()
        
        console.log("ddd",props.match.params)
        if (props.match.params.create === "edit") {
            setpageType("edit")
        }
     }, [])


      const GetSingleAdvert = async()=>{
     showLoader()
   const res = await httpGet(`adverts/${props.match.params.id}/`);
   if (res.status === 200) {
    hideLoader()
    let grpId = res.data.group
     let topicId = res.data.topic

     grpId.map((el) => {
         console.log("grpID>>>",el)
           return el;
       })
        topicId.map((el) => {
         console.log("grpID>>>",el)
           return el;
       })
            setSelectedTopics(topicId)
                    setSelectedGroups(grpId)
                     setAdvertData({
                         ...advertData,
      body:res.data.body,
      })

       setStartDate(new Date(res.data.start_date));
    setEndDate(new Date(res.data.end_date))
   }
}

     
 const getAllGroups = async()=>{
     showLoader()
   const res = await httpGet("groups/");
   if (res.status === 200) {
    hideLoader()
   setGroup(res.data)
     let ids = res.data.map((el) => {
           return el.id;
       })
       setGroupID(ids);
  }}


 const getAllTopics = async()=>{
    //  showLoader()
   const res = await httpGet("topics/");
   console.log(res.data)
   console.log(res.status)
   if (res.status === 200) {
       let ids = res.data.map((el) => {
           return el.id;
       })
       console.log("dsd",ids);
setTopicID(ids);
setTopic(...topicID,res.data)
console.log(topicID)

  }}


  const [advertData, setAdvertData] = useState({
      body:"",
      image:"",
  })


      const  handleChange=(e)=>{

            setAdvertData({...advertData, [e.target.name]: e.target.value })
  
       }

const handleImageChange=(e) =>{
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
    //   this.setState({
    //     file: file,
    //     base64: reader.result
    //   });
       setAdvertData({...advertData, image:reader.result })
   console.log("base 64>>>>>",advertData.image)
    };
    
  }




      const handleSubmit=async(e)=>{
          console.log(topicID)
        e.preventDefault();
      
           e.preventDefault();

           if (pageType==="edit") {

           try {
             showLoader()
             
                const data = {
                    topic:advertAllTopics.advertAll === true ? topicID : selectedTopics,
                    group:advertAllGroups.advertAll === true ? groupID : selectedGroups,
                    body:advertData.body,
                     image:advertData.image,
                    feeds:showOnFeed === true ? true : false,
                    start_date: moment(startDate).format("YYYY-MM-DDThh:mm"),
                    end_date: moment(endDate).format("YYYY-MM-DDThh:mm")
                }

                  const NoImagedata = {
                    topic:advertAllTopics.advertAll === true ? topicID : selectedTopics,
                    group:advertAllGroups.advertAll === true ? groupID : selectedGroups,
                    body:advertData.body,
                    feeds:showOnFeed === true ? true : false,
                    start_date: moment(startDate).format("YYYY-MM-DDThh:mm"),
                    end_date: moment(endDate).format("YYYY-MM-DDThh:mm")
                }

               let res = await httpPatch(`adverts/${props.match.params.id}/`,advertData.image===""?NoImagedata:data)
  
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
                    GetSingleAdvert()
                   setadvertAllGroups({advertAll:false,
                    decide:true,})
                    setadvertAllTopics({ advertAll:false,
                        decide:true,})
         
               NotificationManager.success(
                  "Data edited successfully.",
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
         // }
         }
           }


           if (pageType==="create") {
           try {
             showLoader()
                const data = {
                    topic:advertAllTopics.advertAll === true ? topicID : selectedTopics,
                    group:advertAllGroups.advertAll === true ? groupID : selectedGroups,
                    body:advertData.body,
                    image:advertData.image,
                    feeds:showOnFeed === true ? true : false,
                    start_date: moment(startDate).format("YYYY-MM-DDThh:mm"),
                    end_date: moment(endDate).format("YYYY-MM-DDThh:mm")
                }
               let res = await httpPost(`adverts/`,data)
  
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
                setAdvertData({
                    body:"",
                    image:"",})

                    setSelectedTopics([])
                    setSelectedGroups([])
                   setadvertAllGroups({advertAll:false,
                    decide:true,})
                    setadvertAllTopics({ advertAll:false,
                        decide:true,})
         
               NotificationManager.success(
                  "Data created successfully.",
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
         // }
         }
           }
           

       }
  
  

    const [selectedGroups,setSelectedGroups] = useState([])
    const [selectedTopics,setSelectedTopics] = useState([])
    const [showOnFeed, setShowOnFeed] =useState(false)

                const addGroup = (id)=>{
                setSelectedGroups([...selectedGroups,id])
                }

                const removeGroup = (id)=>{
                    console.log("del ID>>>",id)
                    const sletedGRP = selectedGroups.filter((data)=>{
                    return data !== id
                    })
                setSelectedGroups(sletedGRP)
                console.log(">>>>selectedd>>>",selectedGroups)
                }



                const addTopic = (id)=>{
                setSelectedTopics([...selectedTopics,id])
                }

                const removeTopic = (id)=>{
                    const selectedTopic = selectedTopics.filter((data)=>{
                    return data !== id
                    })
                setSelectedTopics(selectedTopic)
                console.log(">>>>selectedd>>>",selectedTopics)
                }

return (
   <Layout RouteUserLayout={props.history }  activepage="keepOpenPosts" page="all_feeds">

       <div className="advertContainer">
           <form onSubmit={handleSubmit}>

                <div className="advertPostText">
                    <label htmlFor="">Post</label>
                 <textarea required onChange={handleChange} name="body" value={advertData.body} type="text"/>
             </div>

               <div className="advertPostText">
                    <label htmlFor="">Start date</label>
               <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={new Date()}
                                    />
             </div>

              <div className="advertPostText">
                    <label htmlFor="">End date</label>
               <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    minDate={startDate}
                                    />
             </div>

              
               
             <div className="advertPostImage">
                 <label htmlFor="">Post Image</label>
                 <input onChange={(e)=>handleImageChange(e)}  name="image" type="file"/>
                 <div className="button-adver-wrap">
                     <button>Upload Image</button>
                 </div>
                 
             </div>   

              <div className="table-Checkbox-advert">
                    <label className="ck-label-head" htmlFor="">Make advert visible on</label>
                   <div className="checkbox-advert-wrap">
                       <div className="checkone-advert">
                            <div>
                               <span>All Topics</span>
                           <input className="ckCheckAdvert" checked={advertAllTopics.advertAll} type="checkbox" 
                           onClick={()=>{setadvertAllTopics({
                               ...advertAllTopics,advertAll:!advertAllTopics.advertAll,decide:false
                           })}}/>
                           </div>

                           <div>
                               <span>let me decide</span>
                           <input className="ckCheckAdvert" checked={advertAllTopics.decide} type="checkbox"
                            onClick={()=>{setadvertAllTopics({
                               ...advertAllTopics,advertAll:false,decide:!advertAllTopics.decide
                           })}}/>
                           </div>
                           
                       </div>
                       <div className="checkone-advert">
                            <div>
                               <span>All Groups</span>
                           <input onClick={()=>{setadvertAllGroups({
                               ...advertAllGroups,advertAll:!advertAllGroups.advertAll,decide:false
                           })}} className="ckCheckAdvert" checked={advertAllGroups.advertAll} type="checkbox"/>
                           </div>

                           <div>
                               <span>let me decide</span>
                           <input onClick={()=>{setadvertAllGroups({
                               ...advertAllGroups,advertAll:false,decide:!advertAllGroups.decide
                           })}} className="ckCheckAdvert" checked={advertAllGroups.decide} type="checkbox"/>
                           </div>
                       </div>

                       <div className="checkone-advert">
                              <div>
                               <span>Feeds</span>
                           <input checked={showOnFeed} onClick={()=>setShowOnFeed(!showOnFeed)} className="ckCheckAdvert" type="checkbox"/>
                           </div>

                        
                       </div>
                       <div className="createAdvertPostbtn">
                           <button onClick={()=>handleSubmit}>{pageType==="edit"?"Edit" :"Create"} sponsored post</button>
                       </div>
                       
                   </div>
             </div>



           </form>
       </div>
      
       <div className="advertTable-wrap"> 
       {
         advertAllGroups.advertAll === false?(
             <div>
                 <h1>All Groups</h1>
            <GroupTable 
                    getGroup={getGroup}
                    advertAllGroups={advertAllGroups.advertAll}
                    selectedGroups={selectedGroups}
                    addGroup={addGroup}
                    removeGroup={removeGroup}
                    />    
             </div>
         )
                    :<p className="advertUsec">This post will be shown as sponsored post in all groups</p>
       }
      <hr/>
        {
         advertAllTopics.advertAll === false?(
             <div>
                 <br/>
                 <h1>All Topics</h1>

       <TopicsTable getTopic={getTopic}
          removeTopic={removeTopic}
          addTopic={addTopic}
          selectedTopics={selectedTopics}
                    />
                    </div>
         )
         :
         <p className="advertUsec">This post will be shown as sponsored post in all topic</p>
         }
       </div>

        


            
   </Layout>
    )
}
