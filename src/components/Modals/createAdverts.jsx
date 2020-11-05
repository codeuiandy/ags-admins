import React,{useState} from 'react'
import ImageIcon from './Vector.png'

export default function CreateFeed(props) {

   
      
  return (
    <React.Fragment>
      <div class="modal fade" id="advertModal" tabindex="-1" role="dialog" aria-labelledby="advertModalLabel" aria-hidden="true"
      data-keyboard="false" data-backdrop="static" 
      >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
  <h5 class="modal-title" id="advertModalLabel">{props.setmodalType === "edit" ? "Edit " : "Create "}  Advert </h5>
        <button onClick={()=>props.resetModal()} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="createPosts create-postModal ">
                           <div className="createPostInner createPostInner-modal">
                           <div className="investment-details-input-wrap">
  <label>Eligibility Criteria</label>

  <div className="funding-industry-div">
     <input style={{borderRadius:"5px 0px 0 5px"}} 
     onChange={(e)=>props.handleImageChange(e.target.files[0])}
      type="file" placeholder="Low Cost housing estates"/><button
   onClick={(data)=>props.handleMutipleImages("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    props.selectedImages.map((data,index)=>{
    return<span className="funding-industry-tags-span" 
    onClick={(data)=>props.handleMutipleImages("remove",index)}><img style={{width: "67px",height: "48px"}} src={URL.createObjectURL(data)} alt="" srcset=""/> <span className="x" >X</span></span>
    })
  }
  </div>
</div>

<button onClick={props.handleSubmit}> {props.setmodalType === "edit" ? "Edit " : "Create "}</button>

  
                           </div>
                        </div>
                    </div>
      </div>
     
    </div>
  </div>
    </React.Fragment>
  )
}
