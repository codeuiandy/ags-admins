
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
  const [Industry, setIndustry] = useState([])
  const [IndustryInput, setIndustryInput] = useState("")


  const [Criteria, setCriteria] = useState([])
  const [requirementsCriteriaDataInput, setrequirementsCriteriaInput] = useState("")
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
              requirements:res.data.requirements,
              cta_text:res.data.cta_text,
              workTime:res.data.work_time,
              status:res.data.status,
              logo:"",
              previewImg:res.data.logo,

              })
              setIndustry(res.data.industry)
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
              requirements:res.data.eligibility,
              cta_text:res.data.cta_text,
              status:res.data.status,
              banner:"",
              previewImg:res.data.banner,

              })

               setIndustry(res.data.industry)
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
              requirements:res.data.eligibility,
              cta_text:res.data.cta_text,
              status:res.data.status,
              banner:"",
              previewImg:res.data.banner,

              })

               setIndustry(res.data.industry)
              setStartDate(new Date(res.data.end_date))

            }
            hideLoader()
           
        } catch (error) {
            hideLoader()
        }
    }



const setrequirementsCriteriaInputHandle=(type,deleteData)=>{
  if (type === "add") {
    if (requirementsCriteriaDataInput === "" || requirementsCriteriaDataInput === null || requirementsCriteriaDataInput === undefined) {
      return
    }
     if (Criteria.find(data=>data === requirementsCriteriaDataInput)) {
    alert(`${requirementsCriteriaDataInput} already added`)
    return
  }
  setCriteria([...Criteria,requirementsCriteriaDataInput])
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


const handleIndustry=(type,deleteData)=>{
  if (type === "add") {
    if (IndustryInput === "" || IndustryInput === null || IndustryInput === undefined) {
      return
    }
     if (Industry.find(data=>data === IndustryInput)) {
    alert(`${IndustryInput} already added`)
    return
  }
  setIndustry([...Industry,IndustryInput])
  }
  else{
    let deletData = Industry[deleteData]
    let filterData = Industry.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setIndustry(filterData)
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
requirements:"",
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
requirements:"",
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
requirements:"",
cta_text:"",
process:"",
status:"active",
eligibility:"",
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
              eligibility: Fellowship.requirements,
              cta_text: Fellowship.cta_text,
                status: Fellowship.status,
                 selection_process: Fellowship.process,
                    banner:Fellowship.banner,
                    category:"fellowship",
                    end_date:date,
                    industry:Industry
              
             };
             let res = await httpPost(`scholarships/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data created successfully.",
               "Yepp",
               3000
           );
            props.history.goBack()
            }
                
                 
         
             hideLoader()
       } catch (error) {
           console.log(error.response)
           NotificationManager.error(
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
              eligibility: Fellowship.requirements,
              cta_text: Fellowship.cta_text,
                status: Fellowship.status,
                 selection_process: Fellowship.process,
                    category:"fellowship",
                    end_date:date,
                    industry:Industry
              
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
            props.history.goBack()
            }
         

          
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
            props.history.goBack()

            }
            
                
                 
         
             hideLoader()
       } catch (error) {
           console.log(error.response)
           NotificationManager.error(
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
              eligibility: scholarshipsFellowship.requirements,
              cta_text: scholarshipsFellowship.cta_text,
                status: scholarshipsFellowship.status,
                 selection_process: scholarshipsFellowship.process,
                    banner:scholarshipsFellowship.banner,
                    category:"scholarship",
                    end_date:date,
                    industry:Industry
              
             };
             let res = await httpPost(`scholarships/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data created successfully.",
               "Yepp",
               3000
           );
            props.history.goBack()
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
              eligibility: scholarshipsFellowship.requirements,
              cta_text: scholarshipsFellowship.cta_text,
                status: scholarshipsFellowship.status,
                 selection_process: scholarshipsFellowship.process,
                    category:"scholarship",
                    end_date:date,
                    industry:Industry
              
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
             props.history.goBack()

          
             }
               else{

               let res = await httpPatch(`scholarships/${props.match.params.id}/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );
            props.history.goBack()
          
          }
          

            }
            
                
                 
         
             hideLoader()
       } catch (error) {
           console.log(error.response)
           NotificationManager.error(
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
              cta_text: jobs.cta_text,
                work_time: jobs.workTime,
                status: jobs.status,
                 requirements: jobs.requirements,
                    logo:jobs.logo,
                    end_date:date,
                    industry:Industry
              
             };
             let res = await httpPost(`jobs/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data created successfully.",
               "Yepp",
               3000
           );
           props.history.goBack()
            }
                
                 
         
             hideLoader()
       } catch (error) {
           console.log(error.response)
           NotificationManager.error(
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
              requirements: jobs.requirements,
              cta_text: jobs.cta_text,
                work_time: jobs.workTime,
                status: jobs.status,
                    end_date:date,
                    industry:Industry
              
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
            props.history.goBack()
            }
           
          
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
            props.history.goBack()

            }
            
                
                 
         
             hideLoader()
       } catch (error) {
           console.log(error.response)
           NotificationManager.error(
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
  <textarea value={jobs.requirements} onChange={handleChange} name="requirements" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Industry</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setIndustryInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleIndustry("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Industry?.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleIndustry("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
      showMonthDropdown
      useShortMonthInDropdown
       showYearDropdown
      useShortYearInDropdown
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
  <label>Benefits</label>
  <textarea required value={scholarshipsFellowship.benefits} onChange={handleChange} name="benefits" type="text" placeholder="Eg. your text here"/>
</div>



<div className="investment-details-input-wrap">
  <label>Requirements</label>
  <textarea value={scholarshipsFellowship.requirements} onChange={handleChange} name="requirements" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Industry</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setIndustryInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleIndustry("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Industry?.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleIndustry("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
      showMonthDropdown
      useShortMonthInDropdown
       showYearDropdown
      useShortYearInDropdown
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
  <label>Benefits</label>
  <textarea required value={Fellowship.benefits} onChange={handleChange} name="benefits" type="text" placeholder="Eg. your text here"/>
</div>


<div className="investment-details-input-wrap">
  <label>Requirements</label>
  <textarea value={Fellowship.requirements} onChange={handleChange} name="requirements" type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Industry</label>

  <div className="funding-industry-div">
     <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setIndustryInput(e.target.value)} type="text"
      placeholder="eg, your text here"/><button
   onClick={(data)=>handleIndustry("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Industry?.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleIndustry("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
      showMonthDropdown
      useShortMonthInDropdown
       showYearDropdown
      useShortYearInDropdown
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
//   <label>requirements Criteria</label>

//   <div className="funding-industry-div">
//      <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setrequirementsCriteriaInput(e.target.value)} type="text" placeholder="Low Cost housing estates"/><button
//    onClick={(data)=>setrequirementsCriteriaInputHandle("add","")}>Add</button>
//   </div>
 
//    <div className="funding-industry-tags">
//   {
//     Criteria.map((data,index)=>{
//     return<span className="funding-industry-tags-span" onClick={(data)=>setrequirementsCriteriaInputHandle("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
     <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setIndustryInput(e.target.value)} type="text"
      placeholder="Select your Participating Countries here"/><button
   onClick={(data)=>handleIndustry("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    Industry.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleIndustry("remove",index)}>{`${data}`} <span className="x" >X</span></span>
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
      showMonthDropdown
      useShortMonthInDropdown
       showYearDropdown
      useShortYearInDropdown
    />
</div> */}
