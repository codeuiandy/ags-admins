import { data } from 'jquery'
import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddPartnersModal(props) {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="addOffereModal" tabindex="-1" role="dialog" aria-labelledby="addOffereModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addOffereModal"> {props.pageType==="edit" ? "Edit Offer" :"Add New Offer"}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
<form onSubmit={props.handleSubmit} className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">


     <div className="investment-details-input-wrap">
                   <label>Header Image</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="header_image"   type="file" onChange={props.handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{props.offers.previewHeaderImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            props.offers.previewHeaderImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={props.offers.previewHeaderImg} />
             
                        }
   
                   </div>





      <div className="investment-details-input-wrap">
                   <label>Logo image </label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="logo_image" type="file" onChange={props.handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{props.offers.previewLogo === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            props.offers.previewLogo === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={props.offers.previewLogo} />
             
                        }
   
                   </div>


    <div className="investment-details-input-wrap">
  <label>Select Partner</label>
  <select value={props.offers.partner}  onChange={props.handleChange} name="partner" id="">
       <option value="">Select</option>
      {
      props.Allpartners.map((data)=>{
          return(
          <option value={data.id}  >{data.name}</option>
          )
      })
  }
     
  </select>
</div>

<p className="addoffer-expiration-head">Expiration & Offer valid</p>
           <div className="addOferValidity">
               <div className="investment-details-input-wrap">
  <label>Expiration date</label>
  <DatePicker
      closeOnScroll={true}
      selected={props.startDate} 
      onChange={date => props.setStartDate(date)  }
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
</div>

<div className="investment-details-input-wrap">
  <label>Offer valid description </label>
  <textarea required onChange={props.handleChange} name="offer_valid_description" value={props.offers.offer_valid_description} type="text" placeholder="Eg. your text here"/>
</div>
           </div>

           <div className="investment-details-input-wrap">
  <label>Short  Description</label>
  <textarea  onChange={props.handleChange} name="short_description" value={props.offers.short_description} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Long  Description</label>
  <textarea required  onChange={props.handleChange} name="long_description" value={props.offers.long_description} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>How it works </label>
  <textarea required  onChange={props.handleChange} name="how_it_works" value={props.offers.how_it_works} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Terms & Conditions  </label>
  <textarea required  onChange={props.handleChange} name="tos" value={props.offers.tos} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Status</label>
  <select required onChange={props.handleChange} value={props.offers.status} name="status" id="">
    <option value="">Select</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>
 


<div className="add-offerbtn">
    <button>Create</button>
</div>



                   
</div>
</div>
</form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}


