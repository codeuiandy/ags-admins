import React, { Component } from 'react'
import Layout from "../Layout/index"
import ImageIcon from './Vector.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Images} from './selectMutipleImages'
import AdvertOverview from '../Tables/allFeedsTable/adverts'
import {httpGet, httpPatch, httpPostFormData,httpPut} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import GetImageUrl from '../../components/helpers/getImageUrl'
import moment from 'moment'
export default class IndexPost extends Component {
    constructor(props){
        super(props)
        this.state={
            postController:"Advert",
            startDate:new Date(),
            endDate:new Date(),
            postToFeedPost:"",
            postToFeedImage:"",
            previewImage:"",

            IcebreakerpostToFeedPost:"",
            IcebreakerpostToFeedImage:"",
            IcebreakerpreviewImage:"",

            advert_name:"",
            advert_link:"",
            advertStartDate:"",
            advertEndDate:"",
            ddd:null,
            adverImages:[],
        }
    }

    SwitchPostType=(postType)=>{
     if (postType === "post") {
         this.setState({
             postController:"post"
         })
     }

     if (postType === "Advert") {
        this.setState({
            postController:"Advert"
        })
    }


    if (postType === "Icebreaker") {
        this.setState({
            postController:"Icebreaker"
        })
    }

    if (postType === "poll") {
        this.setState({
            postController:"poll"
        })
    }

    }

    advertImages=(images)=>{
        this.setState({adverImages:images})
  console.log(">>>advert images",this.state.adverImages)
    }

    hendleBlob=async(d)=>{
        let  imageFormData = ""
        let AdsImages = this.state.adverImages
      let images = Object.values(AdsImages)
      images.map((data)=>{
           fetch (data)
           .then(res => res.blob())
           .then(blob => {
               let name = Math.random(1000);
             const file = new File([blob], `avatar${name}`, {type: 'image/png'})
              d = file
            this.setState({bbb:file})
             return (d)
         
        
           })
           
        })
    }

    componentDidMount(){
      let postType = this.props.match.params
      console.log(postType.type)
      this.setState({postController:postType.type})
       this.getData()
    }

    getData=async()=>{
      let postType = this.props.match.params
      if (postType.type === "Icebreaker") {
       

        try {
          const res = await httpGet(`icebreakers/${postType.id}`)
          console.log(res.status)
          if (res.status === 200) {
            this.setState({
              IcebreakerpostToFeedPost:res.data.body,
              IcebreakerpreviewImage:res.data.file,
            })
            console.log(res)
          }
        } catch (error) {
          
        }
    
      }


      if (postType.type === "post") {
       

        try {
          const res = await httpGet(`icebreakers/${postType.id}`)
          console.log(res.status)
          if (res.status === 200) {
            this.setState({
              IcebreakerpostToFeedPost:res.data.body,
              IcebreakerpreviewImage:res.data.file,
            })
            console.log(res)
          }
        } catch (error) {
          
        }
    
      }

    }
    

    handleSubmit=async()=>{
    
    let postController = this.state.postController;

    if (postController === "Advert") {
        // showLoader()
        let check =   this.hendleBlob()
        console.log(check)
        // if (check === true) {
            alert(5)
            try {
                // var startDate = moment(this.state.startDate , 'YYYY-MM-DD');
                let date = new Date()
                let startDate =  moment(date)
                startDate.format("YYYY-MM-DDTHH:mm:ss.SSS")
                console.log(startDate)
                const  formData = new FormData()
                formData.append("start_date",startDate)
                formData.append("images", await this.state.ddd)
                formData.append("link",this.state.advert_link)
                formData.append("name",this.state.advert_name)
            
                formData.append("end_date",this.state.endDate)
                await httpPostFormData(`adverts/`,formData)
                //  console.log(file)
                 console.log(this.state.ddd)
             } catch (error) {
                 
            //  }
              
        }
        
           
        
       
    }


    if (postController === "post") {
        showLoader()
    
        try {
            const formData = new FormData()
            formData.append("body",this.state.postToFeedPost)
            formData.append("file",this.state.postToFeedImage)
            let res = await httpPostFormData(`feeds/create_feed/`,formData)
            
            if (res.status == 201) {
                NotificationManager.success(
                    "Post Edited Succesfully",
                    "Yepp",
                    3000
                );
                this.setState({
                    postToFeedPost:"",
                    postToFeedImage:"",
                    previewImage:"",
                })
                hideLoader()
            }

            hideLoader()
        } catch (error) {
            hideLoader()
        }
    }




    if (postController === "Icebreaker") {
        showLoader()
    
        try {
            const formData = new FormData()
            formData.append("body",this.state.IcebreakerpostToFeedPost)
            formData.append("file",this.state.IcebreakerpostToFeedImage)
            let res = await httpPostFormData(`icebreakers/`,formData)
            
            if (res.status == 201) {
                NotificationManager.success(
                    "Icebreakers Post Edited Succesfully",
                    "Yepp",
                    3000
                );
                this.setState({
                    IcebreakerpostToFeedPost:"",
                    IcebreakerpostToFeedImage:"",
                    IcebreakerpreviewImage:"",
                })
                hideLoader()
            }

            hideLoader()
        } catch (error) {
            hideLoader()
        }
    }

    }

    
    render() {
        
        console.log(this.state)
        let Switch = this.state.postController
        return (
           
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="create_posts">
             

                {
                Switch === "post" ? (
                    <div>
                     <div className="createPosts ">
                           <div className="createPostInner">
                           <form>
  <div class="form-group postForm">
  
    <textarea
    value={this.state.postToFeedPost}
     onChange={(e)=>this.setState({...this.state,postToFeedPost:e.target.value})}
     placeholder="Type in your post" class="form-control" id="aboutPlan"/>
  </div>
  </form>

  <div className="postActions">
      <div className="postAction">
          <input onChange={(e)=>this.setState({...this.state,postToFeedImage:e.target.files[0],
            previewImage:GetImageUrl(e.target.files[0])})} type="file"/>
<span>
    <img src={ImageIcon} alt=""/>
   
</span>
{
    this.state.previewImage === "" ? "" 
    :<img style={{width:"60px",height:"60px",marginLeft:"10px"}} src={this.state.previewImage} alt=""/>
}

      </div>
     

      <div className="postButton">
<button onClick={this.handleSubmit}> Create</button>
      </div>
  </div>
                           </div>
                        </div>
                    </div>
                ) : ""
                }

                  
{
                Switch === "Advert" ? (
                    <div>

                    <div className="createPosts createAds">
                          <div className="createPostInner adverPostInner">
                          <form>

                          <div class="form-group postForm postFormAdvert">
 
 <input placeholder="Advert name" class="form-control" type="text"
   onChange={(e)=>this.setState({...this.state,advert_name:e.target.value})}
 />
</div>


<div class="form-group postForm postFormAdvert">
 
 <input placeholder="Insert Link" class="form-control" type="text"
    onChange={(e)=>this.setState({...this.state,advert_link:e.target.value})}
 />
</div>
 
<div className="datePickerEvent datePickerAdverrt">
<div class="form-group">
    <label for="Presenter">Advert Start Date</label>
    <DatePicker
      closeOnScroll={true}
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date})  }
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  </div>

  <div class="form-group">
    <label for="Presenter">Advert End Date</label>
    <DatePicker
      closeOnScroll={true}
      selected={this.state.endDate} 
      onChange={date => this.setState({endDate:date})  }
    //   withPortal
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  </div>
  </div>

<div class="form-group postForm postFormAdvert">
 
<Images advertImages={this.advertImages}/>
</div>

 </form>

 <div className="postActions">


     <div className="postButton postAdvert">
<button onClick={this.handleSubmit}> Create</button>
     </div>
 </div>
                          </div>
                          
                       </div>

                     
                       <div className="adsOverview">
 <AdvertOverview/>
                       </div>
                   </div>
                ) : ""
                }



                            
{
                Switch === "Icebreaker" ? (
                    <div>
                          <div className="createPosts ">
                           <div className="createPostInner">
                           <form>
  <div class="form-group postForm">
  
    <textarea
    value={this.state.IcebreakerpostToFeedPost}
     onChange={(e)=>this.setState({...this.state,IcebreakerpostToFeedPost:e.target.value})}
     placeholder="Type in your post" class="form-control" id="aboutPlan"/>
  </div>
  </form>

  <div className="postActions">
      <div className="postAction">
          <input onChange={(e)=>this.setState({...this.state,IcebreakerpostToFeedImage:e.target.files[0],
            IcebreakerpreviewImage:GetImageUrl(e.target.files[0])})} type="file"/>
<span>
    <img src={ImageIcon} alt=""/>
   
</span>
{
    this.state.IcebreakerpreviewImage === "" ? "" 
    :<img style={{width:"60px",height:"60px",marginLeft:"10px"}} src={this.state.IcebreakerpreviewImage} alt=""/>
}

      </div>
     

      <div className="postButton">
<button onClick={this.handleSubmit}> Create</button>
      </div>
  </div>
                           </div>
                        </div>
                    </div>
                ) : ""
                }


                            
{
                Switch === "poll" ? (
                    <div>
                    <div className="createPosts">
                        <div className="createPostInner">
                        <form>
<div class="form-group postForm">

 <textarea placeholder="Type your question here" class="form-control" id="aboutPlan"/>
</div>
</form>

<div className="postActions">
   <div className="postAction">
       <input type="file"/>
{/* <span>
 <img src={ImageIcon} alt=""/>
</span> */}
   </div>

   <div className="postButton">
<button> Create</button>
   </div>
</div>
                        </div>
                     </div>
                 </div>
                ) : ""
                }


            </Layout>
        )
    }
}
