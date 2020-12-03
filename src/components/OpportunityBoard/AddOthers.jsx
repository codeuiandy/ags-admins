
import React,{useState,useEffect} from 'react'
import OverViewCards from './overviewCards'
import Layout from '../Layout/index'
import './index.css'
import RealEstateTable from '../Tables/realEstate.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import HideModal from '../helpers/closeModal'
import DatePicker from "react-datepicker";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import GetImageUrl from '../helpers/getImageUrl'
import moment from 'moment'
import 'moment-timezone';
export default function FundingOptionity(props) {
  const [Requirements, setRequirements] = useState([])
  const [RequirementsInput, setRequirementsInput] = useState("")


  const [Criteria, setCriteria] = useState([])
  const [EligibilityCriteriaDataInput, setEligibilityCriteriaInput] = useState("")
    const [Type, SetType] = useState("")
    const [action, SetAction] = useState("")
    const [ID, SetID] = useState("")
  const [startDate, setStartDate] = useState(new Date())

useEffect(() => {
  HideModal()
  console.log(props.match.params)
 SetType(props.match.params.type)
 SetAction(props.match.params.action)
 SetID(props.match.params.id)
 if (props.match.params.action === "edit" && props.match.params.type === "scholarships" ) {
   getEditDatascholarship()
 }

 if (props.match.params.action === "edit" && props.match.params.type === "jobs" ) {
   getEditDataJob()
 }

  if (props.match.params.action === "edit" && props.match.params.type === "fellowship" ) {
   getEditDataFellowship()
 }

 
}, [])

 const getEditDataJob=async()=>{
   
        try {
          showLoader()
            const res = await httpGet(`jobs/${props.match.params.id}/`)
            if (res.status === 200) {
              setjobs({
              title:res.data.title,
              description:res.data.description,
              position:res.data.position,
              salary:res.data.salary,
              location:res.data.location,
              link:res.data.link,
              country:res.data.country,
              industry:res.data.industry,
              cta_text:res.data.cta_text,
              workTime:res.data.work_time,
              status:res.data.status,
              logo:"",
              previewImg:res.data.logo,

              })
              setRequirements(res.data.requirements)
              setStartDate(new Date(res.data.end_date))
            }
            hideLoader()
           
        } catch (error) {
            hideLoader()
        }
    }

        const getEditDataFellowship=async()=>{
   
        try {
          showLoader()
            const res = await httpGet(`scholarships/${props.match.params.id}/`)
            if (res.status === 200) {
              setFellowship({
              title:res.data.title,
              summary:res.data.summary,
              How_to_Apply:res.data.how_to,
              benefits:res.data.benefits,
              process:res.data.selection_process,
              link:res.data.link,
              industry:res.data.industry,
              cta_text:res.data.cta_text,
              status:res.data.status,
              banner:"",
              previewImg:res.data.banner,

              })

               setRequirements(res.data.eligibility)
              setStartDate(new Date(res.data.end_date))

            }
            hideLoader()
           
        } catch (error) {
            hideLoader()
        }
    }

    const getEditDatascholarship=async()=>{
   
        try {
          showLoader()
            const res = await httpGet(`scholarships/${props.match.params.id}/`)
            if (res.status === 200) {
              setscholarshipsFellowship({
              title:res.data.title,
              summary:res.data.summary,
              How_to_Apply:res.data.how_to,
              benefits:res.data.benefits,
              process:res.data.selection_process,
              link:res.data.link,
              industry:res.data.industry,
              cta_text:res.data.cta_text,
              status:res.data.status,
              banner:"",
              previewImg:res.data.banner,

              })

               setRequirements(res.data.eligibility)
              setStartDate(new Date(res.data.end_date))

            }
            hideLoader()
           
        } catch (error) {
            hideLoader()
        }
    }



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


const handleRequirements=(type,deleteData)=>{
  if (type === "add") {
    if (RequirementsInput === "" || RequirementsInput === null || RequirementsInput === undefined) {
      return
    }
     if (Requirements.find(data=>data === RequirementsInput)) {
    alert(`${RequirementsInput} already added`)
    return
  }
  setRequirements([...Requirements,RequirementsInput])
  }
  else{
    let deletData = Requirements[deleteData]
    let filterData = Requirements.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setRequirements(filterData)
  }
 
}

const [jobs,setjobs]= useState({
title:"",
description:"",
position:"",
salary:"",
location:"",
link:"",
country:"",
industry:"",
cta_text:"",
workTime:"fulltime",
status:"active",
logo:"",
previewImg:"",

})

const [scholarshipsFellowship,setscholarshipsFellowship]= useState({
title:"",
summary:"",
How_to_Apply:"",
link:"",
industry:"",
cta_text:"",
process:"",
status:"active",
benefits:"",
banner:"",
previewImg:"",

})

const [Fellowship,setFellowship]= useState({
title:"",
summary:"",
How_to_Apply:"",
link:"",
industry:"",
cta_text:"",
process:"",
status:"active",
benefits:"",
banner:"",
previewImg:"",

})
const [pageType, setPageType]=useState("create")

 const handleSubmit=async(e)=>{
      e.preventDefault();


         if (props.match.params.type === "fellowship" ) {
       if (pageType === "create") {
         
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {

             title: Fellowship.title,
              summary: Fellowship.summary,
              how_to: Fellowship.How_to_Apply,
              benefits: Fellowship.benefits,
              link: Fellowship.link,
              industry: Fellowship.industry,
              cta_text: Fellowship.cta_text,
                status: Fellowship.status,
                 selection_process: Fellowship.process,
                  industry: Fellowship.industry,
                    banner:Fellowship.banner,
                    category:"fellowship",
                    end_date:date,
                    eligibility:Requirements
              
             };
             let res = await httpPost(`scholarships/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                 setFellowship({
                  title:"",
                  summary:"",
                  How_to_Apply:"",
                  link:"",
                  industry:"",
                  cta_text:"",
                  process:"",
                  status:"active",
                  benefits:"",
                  banner:"",
                  previewImg:"",

                  })
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
       }
       }


        if (action === "edit") {
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {

             title: Fellowship.title,
              summary: Fellowship.summary,
              how_to: Fellowship.How_to_Apply,
              benefits: Fellowship.benefits,
              link: Fellowship.link,
              industry: Fellowship.industry,
              cta_text: Fellowship.cta_text,
                status: Fellowship.status,
                 selection_process: Fellowship.process,
                  industry: Fellowship.industry,
                    category:"fellowship",
                    end_date:date,
                    eligibility:Requirements
              
             };

             if (Fellowship.banner !== "") {
              let newData = {...data,banner:Fellowship.banner}

               let res = await httpPatch(`scholarships/${props.match.params.id}/`,newData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );
            }
            getEditDataFellowship()

          
             }
               else{

               let res = await httpPatch(`scholarships/${props.match.params.id}/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );}
           getEditDataFellowship()

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
       }
       }
      }


       if (props.match.params.type === "scholarships" ) {
       if (pageType === "create") {
         
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {

             title: scholarshipsFellowship.title,
              summary: scholarshipsFellowship.summary,
              how_to: scholarshipsFellowship.How_to_Apply,
              benefits: scholarshipsFellowship.benefits,
              link: scholarshipsFellowship.link,
              industry: scholarshipsFellowship.industry,
              cta_text: scholarshipsFellowship.cta_text,
                status: scholarshipsFellowship.status,
                 selection_process: scholarshipsFellowship.process,
                  industry: scholarshipsFellowship.industry,
                    banner:scholarshipsFellowship.banner,
                    category:"scholarship",
                    end_date:date,
                    eligibility:Requirements
              
             };
             let res = await httpPost(`scholarships/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                 setscholarshipsFellowship({
                  title:"",
                  summary:"",
                  How_to_Apply:"",
                  link:"",
                  industry:"",
                  cta_text:"",
                  process:"",
                  status:"active",
                  benefits:"",
                  banner:"",
                  previewImg:"",

                  })
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
       }
       }


        if (action === "edit") {
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {

             title: scholarshipsFellowship.title,
              summary: scholarshipsFellowship.summary,
              how_to: scholarshipsFellowship.How_to_Apply,
              benefits: scholarshipsFellowship.benefits,
              link: scholarshipsFellowship.link,
              industry: scholarshipsFellowship.industry,
              cta_text: scholarshipsFellowship.cta_text,
                status: scholarshipsFellowship.status,
                 selection_process: scholarshipsFellowship.process,
                    category:"scholarship",
                    end_date:date,
                    eligibility:Requirements
              
             };

             if (scholarshipsFellowship.banner !== "") {
              let newData = {...data,banner:scholarshipsFellowship.banner}

               let res = await httpPatch(`scholarships/${props.match.params.id}/`,newData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );
            }
            getEditDatascholarship()

          
             }
               else{

               let res = await httpPatch(`scholarships/${props.match.params.id}/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );}
           getEditDatascholarship()

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
       }
       }
      }





          if (props.match.params.type === "jobs" ) {
       if (pageType === "create") {
         
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {
             title: jobs.title,
              description: jobs.description,
              position: jobs.position,
              salary: jobs.salary,
              location: jobs.location,
              link: jobs.link,
              country: jobs.country,
              industry: jobs.industry,
              cta_text: jobs.cta_text,
                work_time: jobs.workTime,
                status: jobs.status,
                  industry: jobs.industry,
                    logo:jobs.logo,
                    end_date:date,
                    requirements:Requirements
              
             };
             let res = await httpPost(`jobs/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                  setjobs({
            title:"",
            description:"",
            position:"",
            salary:"",
            location:"",
            link:"",
            country:"",
            industry:"",
            cta_text:"",
            workTime:"fulltime",
            status:"active",
            logo:"",
            previewImg:"",

            })
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
       }
       }


        if (action === "edit") {
         e.preventDefault();
         try {
           showLoader()

           let date =moment(startDate).format("YYYY-MM-DD")
  
    
                const data  = {
             title: jobs.title,
              description: jobs.description,
              position: jobs.position,
              salary: jobs.salary,
              location: jobs.location,
              link: jobs.link,
              country: jobs.country,
              industry: jobs.industry,
              cta_text: jobs.cta_text,
                work_time: jobs.workTime,
                status: jobs.status,
                  industry: jobs.industry,
                    end_date:date,
                    requirements:Requirements
              
             };

             if (jobs.logo !== "") {
              let newData = {...data,logo:jobs.logo}

               let res = await httpPatch(`jobs/${props.match.params.id}/`,newData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );
            }
            getEditDataJob()

          
             }
               else{

               let res = await httpPatch(`jobs/${props.match.params.id}/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );}
           getEditDataJob()

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
       }
       }
      }



       }

const handleImageChange=(imageFile) =>{
    let file = imageFile;
    console.log(imageFile)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
         if (props.match.params.type === "jobs" ) {
   setjobs({...jobs,logo:reader.result,previewImg: GetImageUrl(file) });
     console.log(jobs)

    }

    if (props.match.params.type === "scholarships") {
       setscholarshipsFellowship({...scholarshipsFellowship, banner:reader.result,previewImg: GetImageUrl(file) })
     console.log(scholarshipsFellowship)

    }

      if (props.match.params.type === "fellowship"  ) {
       setFellowship({...Fellowship, banner:reader.result,previewImg: GetImageUrl(file) })
     console.log(Fellowship)

    }
  
    };
    
  }

 const handleFileChange=(e)=>{
      let file = e.target.files[0];
  handleImageChange(file)
     
    }

    

     const handleChange=(e)=>{
      if (props.match.params.type === "jobs" ) {
       setjobs({...jobs, [e.target.name]: e.target.value });
     console.log(jobs)

    }

    if (props.match.params.type === "scholarships") {
       setscholarshipsFellowship({...scholarshipsFellowship, [e.target.name]: e.target.value })
     console.log(scholarshipsFellowship)

    }

    if (props.match.params.type === "fellowship"  ) {
       setFellowship({...Fellowship, [e.target.name]: e.target.value })
     console.log(Fellowship)

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
          <h1>{action === "edit" ? "Edit" : "Create"} {Type}</h1>
                </div>
          <div className="funding-inputes">
            {
              Type === "jobs" ? (
   <div className="add-investment-details-wrap">

<div className="investment-details-input-wrap">
  <label>Title</label>
  <input required name="title" value={jobs.title} onChange={handleChange} type="text" placeholder="Low Cost housing estates"/>
</div>

<div className="investment-details-input-wrap">
  <label>Description</label>
  <textarea required value={jobs.description} onChange={handleChange} name="description" type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label>Position</label>
  <input value={jobs.position} onChange={handleChange} name="position" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Salary</label>
  <input value={jobs.salary} onChange={handleChange}  name="salary" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Location</label>
  <input value={jobs.location} onChange={handleChange} name="location" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>CTA</label>
  <input value={jobs.cta_text} onChange={handleChange} name="cta_text" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label> CTA Link</label>
  <input value={jobs.link} onChange={handleChange} name="link" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Industry</label>
  <input value={jobs.industry} onChange={handleChange} name="industry" type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label> Work Time</label>
  <select value={jobs.workTime} onChange={handleChange} name="workTime" id="">
    <option value="fulltime">full Time</option>
    <option value="part-time"> Part Time</option>
  </select>
</div>

<div className="investment-details-input-wrap">
  <label>country</label>
  <input value={jobs.country} onChange={handleChange} name="country" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label> Status</label>
  <select value={jobs.status} onChange={handleChange} name="status" id="">
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>

<div className="investment-details-input-wrap">
  <label>Requirements</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setRequirementsInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleRequirements("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Requirements.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleRequirements("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>
</div>

<div className="investment-details-input-wrap">
  <label>Deadline</label>
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


   <div className="investment-details-input-wrap">
                   <label>Logo</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="logo" type="file" onChange={handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{jobs.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            jobs.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={jobs.previewImg} />
             
                        }
   
                   </div>


<div className="fundingOp-btn">
  <button onClick={handleSubmit}>{action === "edit" ? "Edit" : "Create"} </button>
</div>





</div>
      
              )
              :""
            }




             {
              Type === "scholarships" ? (
   <div className="add-investment-details-wrap">

<div className="investment-details-input-wrap">
  <label>Title</label>
  <input required name="title" value={scholarshipsFellowship.title} onChange={handleChange} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Summary</label>
  <textarea required value={scholarshipsFellowship.summary} onChange={handleChange} name="summary" type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label>How to Apply</label>
  <textarea value={scholarshipsFellowship.How_to_Apply} onChange={handleChange} name="How_to_Apply" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>CTA</label>
  <input value={scholarshipsFellowship.cta_text} onChange={handleChange} name="cta_text" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label> CTA Link</label>
  <input value={scholarshipsFellowship.link} onChange={handleChange} name="link" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Selection Process</label>
  <textarea value={scholarshipsFellowship.process} onChange={handleChange} name="process" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Industry</label>
  <input value={scholarshipsFellowship.industry} onChange={handleChange} name="industry" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Benefits</label>
  <textarea required value={scholarshipsFellowship.benefits} onChange={handleChange} name="benefits" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Eligibility</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setRequirementsInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleRequirements("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Requirements.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleRequirements("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>
</div>

<div className="investment-details-input-wrap">
  <label> Status</label>
  <select value={scholarshipsFellowship.status} onChange={handleChange} name="status" id="">
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>

<div className="investment-details-input-wrap">
  <label>Deadline</label>
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


   <div className="investment-details-input-wrap">
                   <label>Banner</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="banner" type="file" onChange={handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{scholarshipsFellowship.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            scholarshipsFellowship.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={scholarshipsFellowship.previewImg} />
             
                        }
   
                   </div>


<div className="fundingOp-btn">
  <button onClick={handleSubmit}>{action === "edit" ? "Edit" : "Create"} </button>
</div>





</div>
      
              )
              :""
            }





             {
              Type === "fellowship" ? (
   <div className="add-investment-details-wrap">

<div className="investment-details-input-wrap">
  <label>Title</label>
  <input required name="title" value={Fellowship.title} onChange={handleChange} type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Summary</label>
  <textarea required value={Fellowship.summary} onChange={handleChange} name="summary" type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label>How to Apply</label>
  <textarea value={Fellowship.How_to_Apply} onChange={handleChange} name="How_to_Apply" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>CTA</label>
  <input value={Fellowship.cta_text} onChange={handleChange} name="cta_text" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label> CTA Link</label>
  <input value={Fellowship.link} onChange={handleChange} name="link" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Selection Process</label>
  <textarea value={Fellowship.process} onChange={handleChange} name="process" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Industry</label>
  <input value={Fellowship.industry} onChange={handleChange} name="industry" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Benefits</label>
  <textarea required value={Fellowship.benefits} onChange={handleChange} name="benefits" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Eligibility</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setRequirementsInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleRequirements("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Requirements.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleRequirements("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>
</div>

<div className="investment-details-input-wrap">
  <label> Status</label>
  <select value={Fellowship.status} onChange={handleChange} name="status" id="">
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>

<div className="investment-details-input-wrap">
  <label>Deadline</label>
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


   <div className="investment-details-input-wrap">
                   <label>Banner</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="banner" type="file" onChange={handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{Fellowship.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            Fellowship.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={Fellowship.previewImg} />
             
                        }
   
                   </div>


<div className="fundingOp-btn">
  <button onClick={handleSubmit}>{action === "edit" ? "Edit" : "Create"} </button>
</div>





</div>
      
              )
              :""
            }


           </div>
        </div>
			
                          </Layout>
    </div>
  )
}




// <div className="investment-details-input-wrap">
//   <label>Eligibility Criteria</label>

//   <div className="funding-industry-div">
//      <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setEligibilityCriteriaInput(e.target.value)} type="text" placeholder="Low Cost housing estates"/><button
//    onClick={(data)=>setEligibilityCriteriaInputHandle("add","")}>Add</button>
//   </div>
 
//    <div className="funding-industry-tags">
//   {
//     Criteria.map((data,index)=>{
//     return<span className="funding-industry-tags-span" onClick={(data)=>setEligibilityCriteriaInputHandle("remove",index)}>{`${data}`} <span className="x" >X</span></span>
//     })
//   }
//   </div>
// </div>

{/* <div className="investment-details-input-wrap">
  <label>Benefits </label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Participating Countries (optional) (for Job)</label>

  <div className="funding-industry-div">
     <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setRequirementsInput(e.target.value)} type="text"
      placeholder="Select your Participating Countries here"/><button
   onClick={(data)=>handleRequirements("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Requirements.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleRequirements("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
</div> */}
