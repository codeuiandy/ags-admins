import React from 'react'
import ImageIcon from './Vector.png'
export default function CreateFeed(props) {
  return (
    <React.Fragment>
      <div class="modal fade" id="createQuestion" tabindex="-1" role="dialog" aria-labelledby="createQuestionLabel" data-keyboard="false" data-backdrop="static" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createQuestionLabel">{props.setmodalType === "edit" ? "Edit " : "Create "} Question </h5>
        <button onClick={()=>props.resetModal()} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="createPosts create-postModal ">
                           <div className="createPostInner createPostInner-modal">
                           <form>
  <div class="form-group postForm">
  
    <textarea
    value={props.sharedState.questionpostToFeedPost}
     name="questionpostToFeedPost"
     onChange={props.handleChange}
     placeholder="Type in your post" class="form-control" id="aboutPlan"/>
  </div>
  </form>

  <div className="postActions">
      <div className="postAction">
          <input
          name="questionpostToFeedImage"
          onChange={(e)=>props.handleFileChange(e)} type="file"/>
<span>
    <img src={ImageIcon} alt=""/>
   
</span>
{
    props.sharedState.previewImage === "" ? "" 
    :<img style={{width:"60px",height:"60px",marginLeft:"10px"}} src={props.sharedState.previewImage} alt=""/>
}

      </div>
     

      <div className="postButton">
<button onClick={props.handleSubmit}> {props.setmodalType === "edit" ? "Edit " : "Create "}</button>
      </div>
  </div>
                           </div>
                        </div>
                    </div>
      </div>
     
    </div>
  </div>
    </React.Fragment>
  )
}
