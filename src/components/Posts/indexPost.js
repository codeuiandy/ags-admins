import React, { Component } from 'react'
import Layout from "../Layout/index"
import ImageIcon from './Vector.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Images} from './selectMutipleImages'
import AdvertOverview from '../Tables/allFeedsTable/adverts'
export default class indexPost extends Component {
    constructor(props){
        super(props)
        this.state={
            postController:"Advert",
            startDate:new Date(),
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
           
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenPosts" page="create_posts">
             
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
                    <div>
                     <div className="createPosts ">
                           <div className="createPostInner">
                           <form>
  <div class="form-group postForm">
  
    <textarea placeholder="Type in your post" class="form-control" id="aboutPlan"/>
  </div>
  </form>

  <div className="postActions">
      <div className="postAction">
          <input type="file"/>
<span>
    <img src={ImageIcon} alt=""/>
</span>
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
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date})  }
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

                     
                       <div className="adsOverview">
 <AdvertOverview/>
                       </div>
                   </div>
                ) : ""
                }



                            
{
                Switch === "Icebreaker" ? (
                    <div>
                       <div className="createPosts">
                           <div className="createPostInner">
                           <form>
  <div class="form-group postForm">
  
    <textarea placeholder="Type your icebreaker question here" class="form-control" id="aboutPlan"/>
  </div>
  </form>

  <div className="postActions">
      <div className="postAction">
          <input type="file"/>

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
