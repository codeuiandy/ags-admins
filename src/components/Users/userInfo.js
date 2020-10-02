import React, { Component } from 'react'
import Layout from "../Layout/index"
// import ImageIcon from './Vector.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserRoute from '../UserRoute/Route'
import UserPosts from '../Tables/userPosts'

export default class userInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            userPosts:[{
                name:"Get rich and die rich",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },
            {
                name:"Get rich and die rich",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },

            {
                name:"Man daev joekendo",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }

            ,{
                name:"kohn Get rich and die rich",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                name:"Get rich and die rich",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                name:"Get rich and die rich",
                email:"lorem is fg aishu iysxyus  joe dem",
                joined:"12/10/2020",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }
        ],
            postController:"profile",
            startDate:new Date(),
        }
    }

    SwitchPostType=(postType)=>{
     if (postType === "profile") {
         this.setState({
             postController:"profile"
         })
     }

     if (postType === "posts") {
        this.setState({
            postController:"posts"
        })
    }


    if (postType === "comments") {
        this.setState({
            postController:"comments"
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
            } activepage="keepOpenUsers" page="usersOverview">
                
              

                <div className="postsRoutes ">
                    <div onClick={(e)=>{this.SwitchPostType("profile")}} className={`postTypes1 
                    ${Switch === "profile" ? "activePost" : ""}`} >
                        Profile
                    </div>

                  







                    <div onClick={(e)=>{this.SwitchPostType("posts")}}  className={`postTypes2
                    ${Switch === "posts" ? "activePost" : ""}`}>
                        Posts
                    </div>

                    <div onClick={(e)=>{this.SwitchPostType("comments")}}  className={`postTypes1 
                    ${Switch === "comments" ? "activePost" : ""}`}>
                      Comments
                    </div>
                    <div onClick={(e)=>{this.SwitchPostType("Applications")}}  className={`postTypes1 
                    ${Switch === "Applications" ? "activePost" : ""}`}>
                        Applications
                    </div>

                     <div onClick={(e)=>{this.SwitchPostType("Opportunities")}}  className={`postTypes1 
                    ${Switch === "Opportunities" ? "activePost" : ""}`}>
                        Opportunities
                    </div>
                    
                </div>

                {
                Switch === "profile" ? (
                    <div>
                     <div className="userProfile tab1">
                     <div className="userinfoName">
                <div className="main-username347">
                    <h1>
                        Andrew Okeke
                    </h1>

                    <h2>
                        Va Canada
                    </h2>
                </div>

                <div className="userQuickactions">
                <i class="far fa-envelope usernetwork"></i>
                <i class="fa fa-flag" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>

                </div>
                </div>

                
                           <div className="aboutUser">
                     
                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Date of Birth:</span>
                           <span className="userIn">12 March 1991</span>
                       </div>
                       <div className="data1">
                           <span>Nationality:</span>
                           <span>Nigeria</span>
                       </div>
                   </div>


                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Bio:</span>
                           <span  className="userIn">Lead Product Design for Apple. I’m from Dublin
                           . I practice for 4 years</span>
                       </div>
                       <div className="data1">
                           <span>Email:</span>
                           <span>lindsey.stroud@gmail.com</span>
                       </div>
                   </div>


                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Job Title:</span>
                           <span className="userIn">Lead Product Design</span>
                       </div>
                       <div className="data1">
                           <span>Profession:</span>
                           <span>Desingner</span>
                       </div>
                   </div>



                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Industry:</span>
                           <span className="userIn">Technology</span>
                       </div>
                       <div className="data1">
                           <span>Location:</span>
                           <span>Va canada</span>
                       </div>
                   </div>



                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Most recent certification:</span>
                           <span className="userIn">Bsc</span>
                       </div>
                       <div className="data1">
                           <span>Date of Graduation:</span>
                           <span>21/1/1</span>
                       </div>
                   </div>



                   <div className="aboutUserFlex">
                       <div className="data1">
                           <span>Institution:</span>
                           <span className="userIn">New York State University</span>
                       </div>
                       <div style={{marginLeft:"auto"}} className="data1">
                           <span>Location:</span>
                           <span>New York, USA</span>
                       </div>
                   </div>
<br/>

                   <div className="aboutUserFlex">
                       <div className="data1 dataButtons">
                           <span>Interest</span>
                           <span className="userIn">
                               <button>Reading</button>
                               <button>Finance</button>
                               <button>Programming</button>
                           </span>
                       </div>
                       <div style={{marginLeft:"auto"}} className="">
                           <p style={{display:"flex"}}>
                               <p className="circleUserNetwork1">
                               <i class="fab fa-facebook-f usernetwork"></i>
                               </p>

                               <p className="circleUserNetwork2">
                               <i class="fab fa-linkedin-in usernetwork"></i>
                               </p>

                               <p className="circleUserNetwork4">
                               <i class="far fa-envelope usernetwork"></i>
                               </p>

                               <p className="circleUserNetwork3">
                               <i class="fab fa-twitter usernetwork"></i>
                               </p>

                              
                           </p >
                           
                       </div>
                   </div>


                   <div className="aboutUserFlex">
                       <div className="data1 dataButtons">
                           <span>Groups</span>
                           <span className="userIn">
                               <button>Reading</button>
                               <button>Finance</button>
                               <button>Programming</button>
                           </span>
                       </div>
                      
                   </div>
<br/>

                   <div className="aboutUserFlex">
                       <div className="data1 dataButtons">
                           <span>Topics</span>
                           <span className="userIn">
                               <button>Reading</button>
                               <button>Finance</button>
                               <button>Programming</button>
                           </span>
                       </div>
                       
                   </div>



                   


                 </div>
                        </div>
                    </div>
                ) : ""
                }

                  
{
               Switch === "posts" ? (
                <div>
                 <div className="userProfile">
                 <div className="userinfoName">
            <div className="main-username347">
                <h1>
                    Andrew Okeke
                </h1>

                <h2>
                    Va Canada
                </h2>
            </div>

            <div className="userQuickactions">
            <i class="far fa-envelope usernetwork"></i>
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-trash" aria-hidden="true"></i>

            </div>
            </div>
 <br/>
 <UserPosts userPosts={this.state.userPosts}/>
            
                       

               


           
                    </div>
                </div>
            ) : ""
                }



                            
{
                Switch === "comments" ? (
                    <div>
                    <div className="userProfile">
                    <div className="userinfoName">
               <div className="main-username347">
                   <h1>
                       Andrew Okeke
                   </h1>
   
                   <h2>
                       Va Canada
                   </h2>
               </div>
   
               <div className="userQuickactions">
               <i class="far fa-envelope usernetwork"></i>
               <i class="fa fa-flag" aria-hidden="true"></i>
               <i class="fa fa-trash" aria-hidden="true"></i>
   
               </div>
               </div>
    <br/>
    <UserPosts userPosts={this.state.userPosts}/>
               
                          
   
                  
   
   
              
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
  
    <input placeholder="Ask a question" class="form-control" id="aboutPlan"/>
  </div>

 
  <div className="postUserSelection">
  <label>
      User's Selection
  </label>
      <input placeholder="Choice one" type="text"/>
      <input placeholder="Choice two" type="text"/>
  </div>

  <div className="postPollDuration">

  <DatePicker selected={this.state.startDate} onChange={date => this.setState({startDate:date})  } 
    showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"/>

<DatePicker selected={this.state.startDate} onChange={date => this.setState({startDate:date})  } 
    showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"/>


<DatePicker selected={this.state.startDate} onChange={date => this.setState({startDate:date})  } 
    showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"/>
  </div>
  </form>

  <div className="postActions">
    

      <div className="postButton pollbyn">
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
