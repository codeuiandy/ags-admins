import React,{useEffect} from 'react'
import Layout from '../Layout/index'
import $ from 'jquery'
export default function OpportunityBoardStep2(props) {
    useEffect(()=>{
        closeModal()
    })

    const closeModal = () => {
        window.$(".modal").modal("hide");
        window.$(document.body).removeClass("modal-open");
        window.$(".modal-backdrop").remove();
    };
    return (
        <div>
            <Layout
             RouteUserLayout={
                props.history
            } activepage="funding_opportunities" page="funding_opportunities">
            
                <div className="wrap-op-2">
                <div className="add-investment-details-wrap">
            <div className="wrap-op2-head">
                <h1>Agric tech investment</h1>
            </div>

<div className="investment-details-input-wrap">
  <label>title</label>
  <input type="text" placeholder="Low Cost housing estates"/>
</div>

<div className="investment-details-input-wrap">
  <label>Company </label>
  <input type="text" placeholder="Urban Estates "/>
</div>


<div className="investment-details-input-wrap">
  <label>Retrun on Investment</label>
  <input type="text" placeholder="2.5%"/>
</div>



<div className="investment-details-input-wrap">
  <label>Trade Cycle</label>
  <input type="text" placeholder="July 2020 - May 2021"/>
</div>


<div className="investment-details-input-wrap">
  <label>Maturity period (Monthly)</label>
  <input type="text" placeholder="Low Cost housing estates"/>
</div>

<div className="investment-details-input-wrap">
  <label>Description</label>
  <textarea type="text" placeholder="10"/>
</div>

<div className="investment-details-input-wrap">
  <label>Investment Type</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Agric Tech">Real estate tech</option>
 
</select> 
</div>

<div className="investment-details-input-wrap">
  <label>Unit price</label>
  <input type="text" placeholder="N80,000.00"/>
</div>


<div className="investment-details-input-wrap">
  <label>Risk Level</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Agric Tech">Medium</option>
 
</select> 
</div>


<div className="investment-details-input-wrap">
  <label>Status</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Agric Tech">Active</option>
 
</select> 
</div>

<div className="investment-details-input-wrap">
  <label>Partner company</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Agric Tech">Urban Estates</option>
 
</select> 
</div>



<div className="investment-details-input-wrap">
  <label>Tenor type/Pa /Flat</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Agric Tech">Flat</option>
 
</select> 
</div>


<div className="investment-details-input-wrap">
  <label>Upload Image</label>
<div className="upload-investment-details">
    <div className="uploadInvesmet-input-submit">
      <button>Choose file</button>
      <input type="file"/>
    </div>

    <div className="uploadInvesmet-input-submit">
      <span>No file chosen</span>
    </div>


</div>
</div>



<button className="submit-investment-btn">Submit</button>
</div>
                </div>
            
</Layout>
</div>


    )
}
