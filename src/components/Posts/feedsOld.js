import React, { Component } from 'react'
import Layout from "../Layout/index"
import ImageIcon from './Vector.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Images} from './selectMutipleImages'
import PostToFeed from '../Tables/allFeedsTable/feedToPost'
import Icebreaker from '../Tables/allFeedsTable/icebreaker'
import AskQuestion from '../Tables/allFeedsTable/askAQuestion'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../helpers/httpMethods'
import DeleteModal from '../Modals/comfirmModal'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import CreateFeedModal from '../Modals/createFeed.jsx'
import CreatIcebreakerModal from '../Modals/createIcebreaker.jsx'
import GetImageUrl from '../../components/helpers/getImageUrl'
import moment from 'moment'
import $ from 'jquery'
import AskAQuestion from '../Modals/createQuestion'
export default class allFeeds extends Component {
    constructor(props){
        super(props)
        this.state={
            postController:"Icebreaker",
            startDate:new Date(),
            Icebreaker:[],
            feeds:[],
            AskQuestion:[],
            deletId:"",

            endDate:new Date(),
            postToFeedPost:"",
            postToFeedImage:"",
            previewImage:"",
            

            IcebreakerpostToFeedPost:"",
            IcebreakerpostToFeedImage:"",
            IcebreakerpreviewImage:"",

            questionpostToFeedPost:"",
            questionpostToFeedImage:"",
            questionpreviewImage:"",

            advert_name:"",
            advert_link:"",
            advertStartDate:"",
            advertEndDate:"",
            ddd:null,
            adverImages:[],

            editData:"",
            setmodalType:"",
            setFeedId:""
        }
    }


    componentDidMount(){
        this.getIcebreakers()
        this.getFeeds()
        this.getQuestion()
    }

    getDeletId=(id)=>{
    this.setState({deletId:id})
   
    }

    getIcebreakers=async()=>{
        showLoader()
       try {
        const res = await httpGet(`icebreakers/`)
        console.log(res.status)
        if (res.status === 200) {
            this.setState({Icebreaker:res.data})
            console.log(res)
            hideLoader()

        }
       } catch (error) {
           
       }
    }

    getQuestion=async()=>{
        showLoader()
       try {
        const res = await httpGet(`ask_a_questions/`)
        console.log(res.status)
        if (res.status === 200) {
            this.setState({AskQuestion:res.data})
            console.log(res)
            hideLoader()

        }
       } catch (error) {
           
       }
    }

    getFeeds=async()=>{
        showLoader()
       try {
        const res = await httpGet(`feeds/`)
        console.log(res.status)
        if (res.status === 200) {
            this.setState({feeds:res.data})
            console.log(res)
            hideLoader()

        }
       } catch (error) {
           
       }
    }

    blockUserData=async(blockId,postType)=>{
        const data = {
            content_id:blockId,
            content_type:postType
        }
        try {
            showLoader()
            const res = await httpDelete(`users/content/flag_content/`,data)
            console.log(res)
            if (res.status === 201 ) {
                 NotificationManager.success(
                `${postType} blocked`,
                "Yeep!",
                3000
            );
            hideLoader()
            }
           
        } catch (error) {
            NotificationManager.error(
                error,
                "Opps!",
                3000
            );
            hideLoader()
        }
    }

    


    deletData=async()=>{
  let deleteId = this.state.deletId

  if (this.state.postController === "poll") {
    showLoader()
    try {
        const res = await httpDelete(`ask_a_questions/${deleteId}/`)
        console.log(res)
        showLoader()
        if (res.status === 204) {
            this.getQuestion()
            NotificationManager.success(
                "Data successfully removed.",
               "Yepp",
               3000
           );
           
            hideLoader()  
        }
        hideLoader()  
    } catch (error) {
        hideLoader()  
    }
}

        if (this.state.postController === "Icebreaker") {
            showLoader()
            try {
                const res = await httpDelete(`icebreakers/${deleteId}/`)
                console.log(res)
                showLoader()
                if (res.status === 204) {
                    this.getIcebreakers()
                    NotificationManager.success(
                        "Data successfully removed.",
                       "Yepp",
                       3000
                   );
                   
                    hideLoader()  
                }
                hideLoader()  
            } catch (error) {
                hideLoader()  
            }
        }

        if (this.state.postController === "post") {
            showLoader()
            try {
                const res = await httpDelete(`feeds/${deleteId}/`)
                console.log(res)
                showLoader()
                if (res.status === 204) {
                    this.getFeeds()
                    NotificationManager.success(
                        "Data successfully removed.",
                       "Yepp",
                       3000
                   );
                  
                    hideLoader()  
                }
                hideLoader()  
            } catch (error) {
                hideLoader()  
            }
        }
  
   
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.postToFeedPost)
      }

      handleFileChange = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] })
        this.setState({previewImage:GetImageUrl(e.target.files[0])})
        console.log(this.state)
      }


      closeModal = () => {
		window.$(".modal").modal("hide");
		window.$(document.body).removeClass("modal-open");
		window.$(".modal-backdrop").remove();
	};

    resetModal=()=>{
        this.setState({
            postToFeedPost:"",
            postToFeedImage:"",
            previewImage:"",
            IcebreakerpostToFeedPost:"",
            IcebreakerpostToFeedImage:"",
            IcebreakerpreviewImage:"",
            questionpostToFeedPost:"",
            questionpostToFeedImage:"",
            questionpreviewImage:"",
        })
    }

    
      
    handleSubmit=async()=>{
    
        let postController = this.state.postController;


    
        if (postController === "Advert") {
            // showLoader()
            let check =   this.hendleBlob()
            console.log(check)
            // if (check === true) {
               
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
    
        if (postController === "poll") {
            if (this.state.setmodalType === "edit") {
                showLoader()
                
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.questionpostToFeedPost)
                    const img = this.state.questionpostToFeedImage === ""?"" :formData.append('thumbnail', this.state.questionpostToFeedImage)
                    let res = await httpPatch(`ask_a_questions/${this.state.setFeedId}/`,formData)
                    if (res.status == 200) {
                        NotificationManager.success(
                            "Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            questionpostToFeedPost:"",
                            questionpostToFeedImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getQuestion()
                        hideLoader()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }

            else{
                showLoader()
        
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.questionpostToFeedPost)
                    formData.append("file",this.state.questionpostToFeedImage)
                    let res = await httpPostFormData(`ask_a_questions/`,formData)
                    
                    if (res.status == 201) {
                        NotificationManager.success(
                            "Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            questionpostToFeedPost:"",
                            questionpostToFeedImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getQuestion()
                        hideLoader()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }
           
        }

        
    
        if (postController === "post") {
            if (this.state.setmodalType === "edit") {
                showLoader()
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.postToFeedPost)
                    const img = this.state.postToFeedImage === ""?"" :formData.append('thumbnail', this.state.postToFeedImage)
                    let res = await httpPatch(`feeds/create_feed/${this.state.setFeedId}/`,formData)
                    if (res.status == 201) {
                        NotificationManager.success(
                            "Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            postToFeedPost:"",
                            postToFeedImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getFeeds()
                        hideLoader()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }

            else{
                showLoader()
        
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.postToFeedPost)
                    formData.append("file",this.state.postToFeedImage)
                    let res = await httpPostFormData(`feeds/create_feed/`,formData)
                    
                    if (res.status == 201) {
                        NotificationManager.success(
                            "Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            postToFeedPost:"",
                            postToFeedImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getFeeds()
                        hideLoader()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }
           
        }
    
    
    
    
        if (postController === "Icebreaker") {

            if (this.state.setmodalType === "edit") {
                showLoader()
        
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.IcebreakerpostToFeedPost)
                    const img = this.state.IcebreakerpostToFeedImage === ""?"" :formData.append('thumbnail', this.state.IcebreakerpostToFeedImage)
                    let res = await httpPatch(`icebreakers/${this.state.setFeedId}/`,formData)
                    
                    if (res.status == 200) {
                        NotificationManager.success(
                            "Icebreakers Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            IcebreakerpostToFeedPost:"",
                            IcebreakerpostToFeedImage:"",
                            IcebreakerpreviewImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getIcebreakers()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }
            else{
                showLoader()
        
                try {
                    const formData = new FormData()
                    formData.append("body",this.state.IcebreakerpostToFeedPost)
                    formData.append("file",this.state.IcebreakerpostToFeedImage)
                    let res = await httpPostFormData(`icebreakers/`,formData)
                    
                    if (res.status == 201) {
                        NotificationManager.success(
                            "Icebreakers Post Created Succesfully",
                            "Yepp",
                            3000
                        );
                        this.setState({
                            IcebreakerpostToFeedPost:"",
                            IcebreakerpostToFeedImage:"",
                            IcebreakerpreviewImage:"",
                            previewImage:"",
                        })
                        this.closeModal()
                        this.resetModal()
                        this.getIcebreakers()
                    }
        
                    hideLoader()
                } catch (error) {
                    hideLoader()
                }
            }
           
        }
    
        }

      GetEditDataModals=(type,data)=>{
           
            console.log("get edit data>>>",data)
            if (this.state.postController === "Icebreaker") {
                this.setState({
                    IcebreakerpostToFeedPost:data.body,
                    previewImage:data.file,
                    setmodalType:type,
                    setFeedId:data.id
                })
            }
            if (this.state.postController === "post") {
            this.setState({
                postToFeedPost:data.post.body,
                previewImage:data.post.file,
                postToFeedImage:"",
                setmodalType:type,
                setFeedId:data.post.id
            })
        }

        if (this.state.postController === "poll") {
            this.setState({
                questionpostToFeedPost:data.body,
                previewImage:data.file,
                questionpostToFeedImage:"",
                postToFeedImage:"",
                setmodalType:type,
                setFeedId:data.id
            })
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
    
    render() {
        let Switch = this.state.postController
        return (
           <div>
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="all_feeds">
             
                <div className="postsRoutes">
                    <div onClick={(e)=>{this.SwitchPostType("post")}} className={`postTypes1 
                    ${Switch === "post" ? "activePost" : ""}`} >
                        Post To Feed
                    </div>

                  







                    <div onClick={(e)=>{this.SwitchPostType("Advert")}}  className={`postTypes2
                    ${Switch === "Advert" ? "activePost" : ""}`}>
                        Advert
                    </div>

                    <div onClick={(e)=>{this.SwitchPostType("Icebreaker")}}  className={`postTypes1 
                    ${Switch === "Icebreaker" ? "activePost" : ""}`}>
                        Icebreaker
                    </div>
                    <div onClick={(e)=>{this.SwitchPostType("poll")}}  className={`postTypes1 
                    ${Switch === "poll" ? "activePost" : ""}`}>
                       Ask A Question
                    </div>
                    
                </div>

                {
                Switch === "post" ? (
                    <div className="postTofeedLayout">
                        <div type="button"  data-toggle="modal" data-target="#feedModal" className="createPostBtn-new">
                             <button>Create new post</button>
                        </div>
                       
                    <PostToFeed 
                    Icebreaker={this.state.feeds} 
                    getDeletId={this.getDeletId}
                    GetEditDataModals={this.GetEditDataModals}/>
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
 
 <input placeholder="Advert name" class="form-control" type="text"/>
</div>


<div class="form-group postForm postFormAdvert">
 
 <input placeholder="Insert Link" class="form-control" type="text"/>
</div>
 
<div className="datePickerEvent datePickerAdverrt">
<div class="form-group">
    <label for="Presenter">Advert Start Date</label>
    <DatePicker
      closeOnScroll={true}
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date})  }
      withPortal
 
      minDate={new Date()}
    />
  </div>

  <div class="form-group">
    <label for="Presenter">Advert End Date</label>
    <DatePicker
      closeOnScroll={true}
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date})  }
      withPortal
 
      minDate={new Date()}
    />
  </div>
  </div>

<div class="form-group postForm postFormAdvert">
 
<Images/>
</div>

 </form>

 <div className="postActions">


     <div className="postButton postAdvert">
<button> Create</button>
     </div>
 </div>
                          </div>
                       </div>
                       
                   </div>
                ) : ""
                }



                            
{
                Switch === "Icebreaker" ? (
                    <div className="postTofeedLayout">
                        <div type="button"  data-toggle="modal" data-target="#icebreakerModal" className="createPostBtn-new">
                             <button>Create new icebreaker</button>
                        </div>
                      <Icebreaker Icebreaker={this.state.Icebreaker} getDeletId={this.getDeletId}  GetEditDataModals={this.GetEditDataModals}/>
                    </div>
                ) : ""
                }


                            
{
                Switch === "poll" ? (
                    <div className="postTofeedLayout">
                        <div type="button"  data-toggle="modal" data-target="#createQuestion" className="createPostBtn-new">
                             <button>Create new question</button>
                        </div>
                    <AskQuestion
                    Icebreaker={this.state.AskQuestion} 
                    getDeletId={this.getDeletId}
                    GetEditDataModals={this.GetEditDataModals}/>
                  </div>
                ) : ""
                }


            </Layout>
            <CreateFeedModal
             GetImageUrl={GetImageUrl} 
             sharedState={this.state}
             handleSubmit={this.handleSubmit}
             handleChange={this.handleChange}
             handleChange={this.handleChange}
             handleFileChange={this.handleFileChange}
             resetModal={this.resetModal}
             setmodalType={this.state.setmodalType}
             />

             <AskAQuestion
                         GetImageUrl={GetImageUrl} 
                         sharedState={this.state}
                         handleSubmit={this.handleSubmit}
                         handleChange={this.handleChange}
                         handleChange={this.handleChange}
                         handleFileChange={this.handleFileChange}
                         resetModal={this.resetModal}
                         setmodalType={this.state.setmodalType}
             />

             <CreatIcebreakerModal
             GetImageUrl={GetImageUrl} 
             sharedState={this.state}
             handleSubmit={this.handleSubmit}
             handleChange={this.handleChange}
             handleChange={this.handleChange}
             handleFileChange={this.handleFileChange}
             resetModal={this.resetModal}
             setmodalType={this.state.setmodalType}
             />
            <DeleteModal deletData={this.deletData}/>
            </div>
        )
    }
}
