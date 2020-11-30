
import React,{useState} from 'react'
import OverViewCards from './overviewCards'
import Layout from '../Layout/index'
import './index.css'
import RealEstateTable from '../Tables/realEstate.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import DatePicker from "react-datepicker";
export default function FundingOptionity(props) {
  const [industryData, setindustryData] = useState([])
  const [industryDataInput, setindustryDataInput] = useState("")

  const [Criteria, setCriteria] = useState([])
  const [EligibilityCriteriaDataInput, setEligibilityCriteriaInput] = useState("")

  const [startDate, setStartDate] = useState(new Date())


  
console.log(Criteria)



const setEligibilityCriteriaInputHandle=(type,deleteData)=>{
  if (type === "add") {
    if (EligibilityCriteriaDataInput === "" || EligibilityCriteriaDataInput === null || EligibilityCriteriaDataInput === undefined) {
      return
    }
     if (Criteria.find(data=>data === EligibilityCriteriaDataInput)) {
    alert(`${EligibilityCriteriaDataInput} already added`)
    return
  }
  setCriteria([...Criteria,EligibilityCriteriaDataInput])
  }
  else{
    let deletData = Criteria[deleteData]
    let filterData = Criteria.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setCriteria(filterData)
  }
 
}


const handleIndustryData=(type,deleteData)=>{
  if (type === "add") {
    if (industryDataInput === "" || industryDataInput === null || industryDataInput === undefined) {
      return
    }
     if (industryData.find(data=>data === industryDataInput)) {
    alert(`${industryDataInput} already added`)
    return
  }
  setindustryData([...industryData,industryDataInput])
  }
  else{
    let deletData = industryData[deleteData]
    let filterData = industryData.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setindustryData(filterData)
  }
 
}

  return (
    <div>
      <Layout 
        RouteUserLayout={
                props.history
            } activepage="funding_opportunities" page="funding_opportunities">

                
        <div className="funding-opt-wrap">
        <div className="add_funding_header">
                    <h1>Add New Funding</h1>
                </div>
          <div className="funding-inputes">
          <div className="add-investment-details-wrap">

<div className="investment-details-input-wrap">
  <label>Title</label>
  <input type="text" placeholder="Low Cost housing estates"/>
</div>


<div className="investment-details-input-wrap">
  <label>Description</label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label>Category</label>
  <select name="" id="">
  <option value="select">Select</option>
  <option value="Grants & Funding:">Grants & Funding </option>
   <option value="scholarships">Scholarships</option>
 
</select> 
</div>

<div className="investment-details-input-wrap">
  <label>Industry</label>

  <div className="funding-industry-div">
     <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setindustryDataInput(e.target.value)} type="text" placeholder="Low Cost housing estates"/><button
   onClick={(data)=>handleIndustryData("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    industryData.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleIndustryData("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>
</div>


<div className="investment-details-input-wrap">
  <label>Eligibility Criteria</label>

  <div className="funding-industry-div">
     <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setEligibilityCriteriaInput(e.target.value)} type="text" placeholder="Low Cost housing estates"/><button
   onClick={(data)=>setEligibilityCriteriaInputHandle("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Criteria.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>setEligibilityCriteriaInputHandle("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>
</div>

<div className="investment-details-input-wrap">
  <label>Application Guidelines/How To Apply</label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>CTA Link</label>
  <input type="text" placeholder="Add your Website URL"/>
</div>


<div className="investment-details-input-wrap">
  <label> CTA Placeholder Text</label>
  <input type="text" placeholder="Eg. Register, Apply, Learn More"/>
</div>


<div className="investment-details-input-wrap">
  <label>Deadline Date</label>
  <DatePicker
      closeOnScroll={true}
      selected={startDate} 
      onChange={date => setStartDate(date)  }
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
</div>

<div className="fundingOp-btn">
  <button>Submit </button>
</div>





</div>
          </div>
        </div>
			
                          </Layout>
    </div>
  )
}
