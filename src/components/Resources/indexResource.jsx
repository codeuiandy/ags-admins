import React,{useState} from 'react'
import Layout from '../Layout/index'
import './index.css'
import PDFModal from '../Modals/resourcesPDF.jsx'
import ResourceModal from '../Modals/resourcesCourse.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
import GalleryIcon from '../mediaIcon.png'
import CoursesTable from '../Tables/Courses'
import AddOfferMosdal from '../Modals/addOfferModal'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'

export default function AffinityNetwork(props) {

  const [pdfData, SetPDFdata] = useState({
    PDFCover:"",
    PDFTitle:"",
    PDFDescription:"",
    PDFFile:"",

  })

  const handleSubmit=()=>{
   
  try {
    showLoader()
    const formData = new FormData();
    formData.append('title', this.state.eventName);
    formData.append('seats', this.state.eventMaxCapacity);
    formData.append('description', this.state.enentDescrpion);
    formData.append('medium', this.state.eventMedium);
    formData.append('address', this.state.eventAddress);
    formData.append('link', this.state.eventLink);
    formData.append('event_type', this.state.eventType);
    formData.append('free', this.state.paidOrFree === "free_event" ? true : false);
    formData.append('cta_button', this.state.paidOrFree === "free_event" && this.state.eventType
     === "interanl" ? "Attend" : this.state.CTABtn);
    formData.append('registration_link', this.state.registrationLink);
    formData.append('price', this.state.eventFee);
    formData.append('banner', this.state.eventImage);
    formData.append('start_datetime', FormatStartDate);
    formData.append('end_datetime', FormatEndDate);
    formData.append('city', this.state.eventCity);
    
    
      let res = await httpPostFormData(`events/`,formData)
  
     console.log("res status",res) 
     if (res.status === 201) {
             hideLoader()
      console.log(res)
      this.setState({
        eventName:"",
        eventMaxCapacity:"",
        enentDescrpion:"",
        eventMedium:"",
        eventType:"null",
        eventAddress :"",
        eventLink:"",
        eventType:"",
        paidOrFree:"",
        CTABtn:"",
        eventImage:"",
        editImage:"",
      })

      NotificationManager.success(
         "Event created successfully.",
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
// }
}

  }
  
    const [AfinityNetwork, SetafinityNetwork] = useState([{
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"Graphics Design",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
     {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"Graphics Design",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
     {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"Graphics Design",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },

      {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"Graphics Design",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
    ])

    const [resourceType, SetResourceType] = useState()
   

   const  handleFileChange=(e)=>{
     SetPDFdata({...pdfData, [e.target.name]: e.target.files[0] })
     console.log(pdfData)
    }

    const  handleChange=(e)=>{
      SetPDFdata({...pdfData, [e.target.name]: e.target.value })
      console.log(pdfData)
     }
    

  return (
    <div>
      <Layout 
       RouteUserLayout={
                        props.history
                     } activepage="resources" page="resources">
	
                                <div className="table-wrap">
                                <div className="addInvestmentBtn add-resources-control">

                                {
                                
                                <select
                                 onChange={(e)=>SetResourceType(e.target.value)}
                                  >
                                  <option  value="Cources">Cources</option>
                                  <option value="PDFs">PDFs</option>
                                  <option value="Sessions">Sessions</option>
                                 
                                </select> 
                                }
                                
                                {
                                  resourceType === "Courses" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#CourseModal" >Create  
                                {resourceType === "Courses" ? " Course" :""}</button> : ""
                                }

{
                                  resourceType === "PDFs" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#PDFModal" >Create  
                                {resourceType === "PDFs" ? " PDF" :""}</button> : ""
                                }

{
                                  resourceType === "Sessions" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#addOffereModal" >Create  
                                {resourceType === "Sessions" ? " Session" :""}</button> : ""
                                }
                             
                                
                              </div>

                                    <CoursesTable afinityNetwork={AfinityNetwork} />
                                </div>
                              

                            </Layout>
      <AddInvestMentDetailsModal/>
      <PDFModal handleFileChange={handleFileChange} PdfData={pdfData} handleChange={handleChange}  />
      <ResourceModal/>
    </div>
  )
}
