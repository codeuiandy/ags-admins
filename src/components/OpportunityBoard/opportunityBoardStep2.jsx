import React,{useEffect,useState} from 'react'
import $ from 'jquery'
import Layout from '../Layout/index'
import GetImageUrl from '../helpers/getImageUrl'
import DatePicker from "react-datepicker";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import moment from 'moment'
export default function OpportunityBoardStep2(props) {
     const [Type, SetType] = useState("")
    const [action, SetAction] = useState("")
    const [ID, SetID] = useState("")
    const [pageType, setPageType]=useState("create")
     const [hideForm, sethideForm]=useState(false)
    useEffect(()=>{
      SetType(props.match.params.type)
      SetAction(props.match.params.action)
      SetID(props.match.params.id)
        closeModal()

         if (props.match.params.type === "agric_tech" ) {
           setinvestmentType("agric tech")
           sethideForm(true)
         }

          if (props.match.params.type === "fixed_income" ) {
           setinvestmentType("fixed income")
             sethideForm(true)
         }

          if (props.match.params.type === "others" ) {
           setinvestmentType("others")
             sethideForm(true)
         }

           if (props.match.params.action === "editSameInvestment" ) {
   getEditSameInvestmentInvestment()
 }

        
    },[])

    const closeModal = () => {
        window.$(".modal").modal("hide");
        window.$(document.body).removeClass("modal-open");
        window.$(".modal-backdrop").remove();
    };

    const [investmentType, setinvestmentType] = useState("")
  const [startDate, setStartDate] = useState(new Date())
   const [maturityDate, setmaturityDate] = useState(new Date())
    const [investment,setInvestment] = useState({

    status:"active",  
    title:"",
    company:"",
    logo:"",
    description:"",
    price:"",
    units_available:"",
    roi:"",
    trade_cycle:"",
    tenor_type:"",
    risk:"",
    start_date:"",
    previewImg:"",

    })

      const getEditSameInvestmentInvestment=async()=>{
   
        try {
          showLoader()
            const res = await httpGet(`investments/${props.match.params.id}/`)
            if (res.status === 200) {
             setInvestment({
              status:res.data.status,  
              title:res.data.title,
              company:res.data.company,
              description:res.data.description,
              price:res.data.price,
              units_available:res.data.units_available,
              roi:res.data.roi,
              trade_cycle:res.data.trade_cycle,
              tenor_type:res.data.tenor_type,
              risk:res.data.risk,
              previewImg:res.data.logo,

              })

             setStartDate(new Date(res.data.start_date))
             setmaturityDate(new Date(res.data.maturity_date))
             setPageType("edit")

            }
            hideLoader()
           
        } catch (error) {
            hideLoader()
        }
    }


    
const handleImageChange=(imageFile) =>{
    let file = imageFile;
    console.log(imageFile)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
         if (props.match.params.type === "agric_tech"  || props.match.params.type === "fixed_income" || props.match.params.type === "others" ) {
   setInvestment({...investment,logo:reader.result,previewImg: GetImageUrl(file) });
     console.log(investment)

         }
        }
    
  }

 const handleFileChange=(e)=>{
      let file = e.target.files[0];
  handleImageChange(file)
     
    }

    

     const handleChange=(e)=>{
       if (props.match.params.type === "agric_tech"  || props.match.params.type === "fixed_income" || props.match.params.type === "others" ) {
       setInvestment({...investment, [e.target.name]: e.target.value });
     console.log(investment)

    }
  }


  const handleSubmit=async(e)=>{
      e.preventDefault();


         if (props.match.params.type === "agric_tech"  || props.match.params.type === "fixed_income" || props.match.params.type === "others" ) {
       if (pageType === "create") {
         
         e.preventDefault();
         try {
           showLoader()
           let date =moment(startDate).format("YYYY-MM-DDThh:mm")
            let maturityDateFormat =moment(maturityDate).format("YYYY-MM-DD")
           const data  = {
             title: investment.title,
              company: investment.company,
              price: investment.price,
              units_available: investment.units_available,
              roi: investment.roi,
              maturity_date:maturityDateFormat,
              trade_cycle: investment.trade_cycle,
                status: investment.status,
                 tenor_type: investment.tenor_type,
                  risk: investment.risk,
                    logo:investment.logo,
                    start_date: date,
                    description:investment.description,
                    investment_type:investmentType,
                    category:investmentType,
              
             };
             let res = await httpPost(`investments/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
              setInvestment({
                        status:"active",  
            title:"",
            company:"",
            logo:"",
            description:"",
            price:"",
            units_available:"",
            roi:"",
            trade_cycle:"",
            tenor_type:"",
            risk:"",
            start_date:"",
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


        if (props.match.params.action === "editSameInvestment") {
         e.preventDefault();
         try {
           showLoader()
            let date =moment(startDate).format("YYYY-MM-DDThh:mm")
            let maturityDateFormat =moment(maturityDate).format("YYYY-MM-DD")
            const data  = {
             title: investment.title,
              company: investment.company,
              price: investment.price,
              units_available: investment.units_available,
              roi: investment.roi,
              maturity_date:maturityDateFormat,
              trade_cycle: investment.trade_cycle,
                status: investment.status,
                 tenor_type: investment.tenor_type,
                  risk: investment.risk,
                    start_date: date,
                    description:investment.description,
                    investment_type:investmentType,
                   category:investmentType,
              
             };
             

             if (investment.logo !== "") {
              let newData = {...data,logo:investment.logo}

               let res = await httpPatch(`investments/${props.match.params.id}/`,newData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );
            }
            getEditSameInvestmentInvestment()

          
             }
               else{

               let res = await httpPatch(`investments/${props.match.params.id}/`,data)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
             NotificationManager.success(
                "Data updated successfully.",
               "Yepp",
               3000
           );}
          getEditSameInvestmentInvestment()

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

    


     const [Features, setFeatures] = useState([])
  const [FeaturesInput, setFeaturesInput] = useState("")
  
const handleFeatures=(type,deleteData)=>{
  if (type === "add") {
    if (FeaturesInput === "" || FeaturesInput === null || FeaturesInput === undefined) {
      return
    }
     if (Features.find(data=>data === FeaturesInput)) {
    alert(`${FeaturesInput} already added`)
    return
  }
  setFeatures([...Features,FeaturesInput])
  }
  else{
    let deletData = Features[deleteData]
    let filterData = Features.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setFeatures(filterData)
  }
 
}


 const [PricingPlans, setPricingPlans] = useState([])
  const [PricingPlansInput, setPricingPlansInput] = useState("")
  
const handlePricingPlans=(type,deleteData)=>{
  if (type === "add") {
    if (PricingPlansInput === "" || PricingPlansInput === null || PricingPlansInput === undefined) {
      return
    }
     if (PricingPlans.find(data=>data === PricingPlansInput)) {
    alert(`${PricingPlansInput} already added`)
    return
  }
  setPricingPlans([...PricingPlans,PricingPlansInput])
  }
  else{
    let deletData = PricingPlans[deleteData]
    let filterData = PricingPlans.filter(data=>{
     return data !== deletData
    })
    console.log(filterData)
    setPricingPlans(filterData)
  }
 
}


   


    return (
        <div>
            <Layout
             RouteUserLayout={
                props.history
            } activepage="investment_opportunities" page="investment_opportunities">
            
                <div className="wrap-op-2">
                <div className="add-investment-details-wrap">
            <div className="wrap-op2-head">
             { props.match.params.type === "agric_tech" ? <h1>Agric Tech Investment</h1> : "" }
           { props.match.params.type === "fixed_income" ? <h1>Fixed Income Investment</h1> : "" }
            { props.match.params.type === "others" ? <h1>Other Investment</h1> : "" }
            { props.match.params.type === "real_estate" ? <h1>Real Estate</h1> : "" }
            </div>

           
{
   hideForm === true ? (
  <div>
<div className="investment-details-input-wrap">
  <label>title</label>
  <input value={investment.title} onChange={handleChange} name="title" type="text" placeholder="Enter your text here "/>
</div>

<div className="investment-details-input-wrap">
  <label>Company </label>
  <input value={investment.company} onChange={handleChange} name="company" type="text" placeholder="Urban Estates "/>
</div>


<div className="investment-details-input-wrap">
  <label>Retrun on Investment</label>
  <input value={investment.roi} onChange={handleChange} name="roi" type="number" placeholder="2.5%"/>
</div>



<div className="investment-details-input-wrap">
  <label>Trade Cycle</label>
  <input value={investment.trade_cycle} onChange={handleChange} name="trade_cycle" type="text" placeholder="July 2020 - May 2021"/>
</div>


              <div className="investment-details-input-wrap">
  <label>Maturity date</label>
  <DatePicker
      closeOnScroll={true}
      selected={startDate} 
      onChange={date => setmaturityDate(date)  }
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
  <label>Description</label>
  <textarea value={investment.description} onChange={handleChange} name="description" type="text" placeholder="eg, text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Units available</label>
  <input value={investment.units_available} onChange={handleChange} name="units_available" type="number" placeholder="N80,000.00"/>
</div>


<div className="investment-details-input-wrap">
  <label>Unit price</label>
  <input value={investment.price} onChange={handleChange} name="price" type="number" placeholder="N80,000.00"/>
</div>


<div className="investment-details-input-wrap">
  <label>Risk Level</label>
  <select value={investment.risk} onChange={handleChange} name="risk"  id="">
  <option value="">Select</option>
  <option value="low">Low</option>
  <option value="medium">medium</option>
   <option value="high">High</option>
</select> 
</div>


<div className="investment-details-input-wrap">
  <label>Status</label>
  <select value={investment.status} onChange={handleChange} name="status">
  <option value="">Select</option>
  <option value="active">Active</option>
   <option value="inactive">Inactive</option>
    <option value="closed">Closed</option>
    <option value="soldout">Soldout</option>
    <option value="coming soon">Coming soon</option>

</select> 
</div>


<div className="investment-details-input-wrap">
  <label>Tenor type</label>
  <select value={investment.tenor_type} onChange={handleChange} name="tenor_type" id="">
  <option value="">Select</option>
  <option value="flat">Flat</option>
 <option value="pa">Pa</option>
</select> 
</div>


              <div className="investment-details-input-wrap">
  <label>Start date</label>
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
                    <span>{investment.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            investment.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={investment.previewImg} />
             
                        }
                        
                      <button onClick={handleSubmit} className="submit-investment-btn">Submit</button>
   
                   </div>



     
   </div>) :


   (

    <div>
            <div className="investment-details-input-wrap">
                    <label>title</label>
                    <input value={investment.title} onChange={handleChange} name="title" type="text" placeholder="Enter your text here "/>
                  </div>

                  <div className="investment-details-input-wrap">
                    <label>Description </label>
                    <textarea value={investment.company} onChange={handleChange} name="company" type="text" placeholder="Enter your text here "/>
                  </div>
                  
                  <div className="investment-details-input-wrap">
                    <label>Partner Company</label>
                    <select value={investment.tenor_type} onChange={handleChange} name="tenor_type" id="">
                    <option value="">Select</option>
                    <option value="flat">Flat</option>
                  <option value="pa">Pa</option>
                  </select> 
                  </div>


                 <div className="investment-details-input-wrap">
                  <label>Features</label>

                  <div className="funding-industry-div">
                    <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setFeaturesInput(e.target.value)} type="text"
                      placeholder="eg, your text here"/><button
                  onClick={(data)=>handleFeatures("add","")}>Add</button>
                  </div>
                
                  <div className="funding-industry-tags">
                  {
                    Features.map((data,index)=>{
                    return<span className="funding-industry-tags-span" onClick={(data)=>handleFeatures("remove",index)}>{`${data}`} <span className="x" >X</span></span>
                    })
                  }
                  </div>
                </div>

                <div className="investment-details-input-wrap">
                    <label>Location</label>
                    <input value={investment.title} onChange={handleChange} name="title" type="text" placeholder="Enter your text here "/>
                  </div>

                   <div className="investment-details-input-wrap">
                    <label>Benefits  </label>
                    <textarea value={investment.company} onChange={handleChange} name="company" type="text" placeholder="Enter your text here "/>
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
                  </div>

                   <div className="investment-details-input-wrap">
                    <label>CTA Text</label>
                    <input value={investment.title} onChange={handleChange} name="title" type="text" placeholder="Enter your text here "/>
                  </div>


                   <div className="investment-details-input-wrap">
                    <label>CTA Link</label>
                    <input value={investment.title} onChange={handleChange} name="title" type="text" placeholder="Enter your text here "/>
                  </div>


                   <div className="investment-details-input-wrap">
                  <label>Pricing and plans</label>

                  <div className="funding-industry-div">
                    <input  style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setPricingPlansInput(e.target.value)} type="text"
                      placeholder="eg, your text here"/><button
                  onClick={(data)=>handlePricingPlans("add","")}>Add</button>
                  </div>
                
                  <div className="funding-industry-tags">
                  {
                    PricingPlans.map((data,index)=>{
                    return<span className="funding-industry-tags-span" onClick={(data)=>handlePricingPlans("remove",index)}>{`${data}`} <span className="x" >X</span></span>
                    })
                  }
                  </div>
                </div>



                <div className="investment-details-input-wrap">
                        <label>Status</label>
                        <select value={investment.status} onChange={handleChange} name="status">
                        <option value="">Select</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                          <option value="closed">Closed</option>
                          <option value="soldout">Soldout</option>
                          <option value="coming soon">Coming soon</option>

                      </select> 
                 </div>


                  <div className="investment-details-input-wrap">
                   <label>Header Image </label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input name="banner" type="file" onChange={handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{investment.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            investment.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={investment.previewImg} />
             
                        }
                        </div>


                          <div className="investment-details-input-wrap">
                   <label>Images of layout or Survey <span style={{fontSize:"10px",color:"orange"}}>Could be more than 1 image</span></label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Layout Images </button>
                    <input name="banner" type="file" onChange={handleFileChange} />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{investment.previewImg === "" ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            investment.previewImg === "" ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={investment.previewImg} />
             
                        }
                        </div>

                                              <button onClick={handleSubmit} className="submit-investment-btn">Submit</button>


    </div>
   )
}

</div>
                </div>
            
</Layout>
</div>


    )
}
