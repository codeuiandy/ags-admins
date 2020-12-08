import React,{useState,useEffect} from 'react'
import Layout from '../Layout/index'
import './index.css'
import moment from 'moment'
import 'moment-timezone';
import PDFModal from '../Modals/resourcesPDF.jsx'
import ResourceModal from '../Modals/resourcesCourse.jsx'
import SessionModal from '../Modals/sessionResourceModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
import GalleryIcon from '../mediaIcon.png'
import CoursesTable from '../Tables/Courses'
import SessionTable from '../Tables/ResourceSession'
import PDFTable from '../Tables/resourcePdfTable'
import AddOfferMosdal from '../Modals/addPartnersModal'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import CloseModal from '../helpers/closeModal'
import DeleteModal from '../Modals/comfirmModal'
export default function AffinityNetwork(props) {

  const [DeleteId, setDeleteId] = useState("")
  const [EditId, setEditId] = useState("")
  const [getNetworks, setgetNetwork] = useState([])
  const [pageType, setpageType] = useState("create")

  const [pdfData, SetPDFdata] = useState({
    PDFCover:"",
    PDFTitle:"",
    PDFDescription:"",
    PDFFile:"",
    category:"",
    PreviewPdfFile:"",
    previewImg:"",
  })

  const [sessionData, Setsessiondata] = useState({
    sessionCover:"",
    sessionTitle:"",
    sessionDescription:"",
    link:"",
    speaker:"",
    startDate:new Date(),
    category:"",
    previewImg:""

  })

  const [courseData, Setcoursedata] = useState({
    courseCover:"",
    courseTitle:"",
    courseDescription:"",
    courseFile:"",
    category:"",
    previewImg:"",
    PreviewcourseFile:""
  })

  const [resources, setResources]=useState({
    courses: [],
    pdfs:[],
    sessions:[],
  })

  useEffect(() => {
   
    getResource()
   
    return () => {
      // prompt("Are you sure")
    }
  }, [])

  

  const getResource=async()=>{
    
    try {
      showLoader()
        const res = await httpGet(`resources/`)
        if (res.status === 200) {
          console.log(">>>>>>", res.data)
          setResources({
              // ...resources,
              courses: res.data.courses,
              pdfs:res.data.pdfs,
              sessions:res.data.sessions,
            })
            console.log(">>>>>>", res.data)
            hideLoader()
        }
      
    } catch (error) {
      hideLoader()
    }
}

  const handleSubmit=async(e)=>{
   e.preventDefault();

    
    if (pageType === "edit") {
      if (resourceType === "pdf") {
        e.preventDefault();
        try {
          showLoader()
          const formData = new FormData();
          const img = pdfData.PDFCover === ""?"" :formData.append('cover_image', pdfData.PDFCover) 
          formData.append('title', pdfData.PDFTitle);
          formData.append('description',  pdfData.PDFDescription);
          const file = pdfData.PDFFile === ""?"" :formData.append('cover_image', pdfData.PDFFile) 
          formData.append('category',  pdfData.category);
          formData.append('resource_type',  resourceType);

            let res = await httpPatch(`resources/${EditId}/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
            SetPDFdata(
              {
                PDFCover:"",
            PDFTitle:"",
            PDFDescription:"",
            PDFFile:"",
            category:""
          })
  
            CloseModal()
          
      
            NotificationManager.success(
               "Resource edited successfully.",
              "Yepp",
              3000
          );
           }
          
           getResource()
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
  
  
      if (resourceType === "course") {
        e.preventDefault();
        try {
          showLoader()
          const formData = new FormData();
          const img = courseData.courseCover === ""?"" :formData.append('cover_image', courseData.courseCover) 
          formData.append('title', courseData.courseTitle);
          formData.append('description',  courseData.courseDescription);
          const file = courseData.courseFile === ""?"" :formData.append('cover_image', courseData.courseFile) 
          formData.append('category',  courseData.category);
          formData.append('resource_type',  resourceType);
          
          
            let res = await httpPatch(`resources/${EditId}/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
  
            Setcoursedata({courseCover:"",
            courseTitle:"",
            courseDescription:"",
            courseFile:"",
            category:""})

            getResource()
          
            CloseModal()
            NotificationManager.success(
               "Resource edited successfully.",
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
  
  
      if (resourceType === "session") {
        e.preventDefault();
        try {
          showLoader()
          let FormatStartDate =   moment(sessionData.startDate).format("YYYY-MM-DD");
          const formData = new FormData();
          const img = sessionData.sessionCover === ""?"" :formData.append('cover_image', sessionData.sessionCover) 
          formData.append('title', sessionData.sessionTitle);
          formData.append('description',  sessionData.sessionDescription);
          formData.append('link',  sessionData.link);
          formData.append('speaker',  sessionData.speaker);
          formData.append('event_date',  FormatStartDate);
          formData.append('category',  sessionData.category);
          formData.append('resource_type',  resourceType);
  
  
          
            let res = await httpPatch(`resources/${EditId}/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
          
            CloseModal()
            getResource()
            Setsessiondata({
              sessionCover:"",
            sessionTitle:"",
            sessionDescription:"",
            link:"",
            speaker:"",
            startDate:new Date(),
            category:""})
      
            NotificationManager.success(
               "Resource edited successfully.",
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

      
    
    }


    if (pageType === "create") {
      if (resourceType === "pdf") {
        e.preventDefault();
        try {
          showLoader()
          const formData = new FormData();
          formData.append('cover_image', pdfData.PDFCover); 
          formData.append('title', pdfData.PDFTitle);
          formData.append('description',  pdfData.PDFDescription);
          formData.append('file',  pdfData.PDFFile);
          formData.append('category',  pdfData.category);
          formData.append('resource_type',  resourceType);
  
          
            let res = await httpPostFormData(`resources/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
            SetPDFdata(
              {
                PDFCover:"",
            PDFTitle:"",
            PDFDescription:"",
            PDFFile:"",
            category:""
          })
  
            CloseModal()
          getResource()
      
            NotificationManager.success(
               "Resource created successfully.",
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
  
  
      if (resourceType === "course") {
        e.preventDefault();
        try {
          showLoader()
          const formData = new FormData();
          formData.append('cover_image', courseData.courseCover); 
          formData.append('title', courseData.courseTitle);
          formData.append('description',  courseData.courseDescription);
          formData.append('file',  courseData.courseFile);
          formData.append('category',  courseData.category);
          formData.append('resource_type',  resourceType);
          
          
            let res = await httpPostFormData(`resources/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
  
            Setcoursedata({courseCover:"",
            courseTitle:"",
            courseDescription:"",
            courseFile:"",
            category:""})
          
            CloseModal()
            NotificationManager.success(
               "Resource created successfully.",
              "Yepp",
              3000
          );
           }
           getResource()
          
        
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
  
  
      if (resourceType === "session") {
        e.preventDefault();
        try {
          showLoader()
          let FormatStartDate =   moment(sessionData.startDate).format("YYYY-MM-DD");
          const formData = new FormData();
          formData.append('cover_image', sessionData.sessionCover); 
          formData.append('title', sessionData.sessionTitle);
          formData.append('description',  sessionData.sessionDescription);
          formData.append('link',  sessionData.link);
          formData.append('speaker',  sessionData.speaker);
          formData.append('event_date',  FormatStartDate);
          formData.append('category',  sessionData.category);
          formData.append('resource_type',  resourceType);
  
  
          
            let res = await httpPostFormData(`resources/`,formData)
        
           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
          
            CloseModal()
  
            Setsessiondata({
              sessionCover:"",
            sessionTitle:"",
            sessionDescription:"",
            link:"",
            speaker:"",
            startDate:new Date(),
            category:""})
      
            NotificationManager.success(
               "Resource created successfully.",
              "Yepp",
              3000
          );
           }
           getResource()
          
        
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

    const [resourceType, SetResourceType] = useState("session")
   

   const  handleFileChange=(e)=>{

    if (resourceType === "pdf") {
     SetPDFdata({...pdfData, [e.target.name]: e.target.files[0] })
     console.log(pdfData)
    }

    if (resourceType === "course") {
      Setcoursedata({...courseData, [e.target.name]: e.target.files[0] })
      console.log(courseData)
     }

     if (resourceType === "session") {
      Setsessiondata({...sessionData, [e.target.name]: e.target.files[0] })
      console.log(sessionData)
     }

    }

    const  handleChange=(e)=>{
      if (resourceType === "pdf") {
      SetPDFdata({...pdfData, [e.target.name]: e.target.value })
      console.log(pdfData)}

      if (resourceType === "course") {
        Setcoursedata({...courseData, [e.target.name]: e.target.value })
        console.log(courseData)}

        
      if (resourceType === "session") {
        Setsessiondata({...sessionData, [e.target.name]: e.target.value })
        console.log(sessionData)}


     }

     const getModalEditData=(data)=>{

      if (resourceType === "course") {
         console.log(data)
      Setcoursedata
        ({
          courseCover:"",
          courseFile:"",
          courseTitle:data.title,
          courseDescription:data.description,
          PreviewcourseFile:data.file,
          category:data.category,
          previewImg:data.cover_image,
       })
      setpageType("edit")
       setEditId(data.id)
      }


      
      if (resourceType === "session") {
        console.log(data)
        Setsessiondata({
          sessionCover:"",
        sessionTitle:data.title,
        sessionDescription:data.description,
        link:data.link,
        speaker:data.speaker,
        startDate:new Date(data.event_date),
        category:data.category,
        previewImg:data.cover_image
      })
     setpageType("edit")
      setEditId(data.id)
     }


     if (resourceType === "pdf") {
      console.log(data)
      SetPDFdata({
        PDFCover:"",
        PDFFile:"",
        PDFTitle:data.title,
        PDFDescription:data.description,
        PreviewPdfFile:data.file, 
        category:data.category,
        previewImg:data.cover_image,
    })
    setpageType("edit")
    setEditId(data.id)

      }}


      const getDeletId=(id)=>{
        setDeleteId(id)
    }
  
    const handleDelete=async()=>{
      showLoader()
      try {
          let res = await httpDelete(`resources/${DeleteId}/`)
          if (res.status===204 || res.status===200 || res.status===201) {
              NotificationManager.success(
              "deleted successfully",
             "Yepp",
             3000
         );
         getResource()
         hideLoader()
          }
          
      } catch (error) {
          hideLoader()
          NotificationManager.error(
              error,
             "Opps",
             3000
         );
      }
  
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
                                  {/* <option  value="course">Courses</option> */}
                                   <option value="session">Sessions</option>
                                  <option value="pdf">pdf</option>
                                 
                                 
                                </select> 
                                }
                                
                                {
                                  resourceType === "course" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#CourseModal" >Create  
                                {resourceType === "course" ? " Course" :""}</button> : ""
                                }

{
                                  resourceType === "pdf" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#PDFModal" >Create  
                                {resourceType === "pdf" ? " PDF" :""}</button> : ""
                                }

{
                                  resourceType === "session" 
                                  ?
                                <button type="button" data-toggle="modal" data-target="#SessionModal" >Create  
                                {resourceType === "session" ? " Session" :""}</button> : ""
                                }
                             
                                
                              </div>

                              {
                                resourceType === "session" ?<SessionTable getDeletId={getDeletId} getModalEditData={getModalEditData} courses={resources.sessions} /> 
                                :""
                              }

                             {
                                resourceType === "course" ? <CoursesTable getDeletId={getDeletId} getModalEditData={getModalEditData} courses={resources.courses} /> 
                                :""
                              }

                                {
                                resourceType === "pdf" ? <PDFTable getDeletId={getDeletId} getModalEditData={getModalEditData} courses={resources.pdfs} /> 
                                :""
                              }

                                   
                                    
                                </div>
                              

                            </Layout>
      <DeleteModal deletData={handleDelete} />
      <PDFModal pageType={pageType}  handleFileChange={handleFileChange} PdfData={pdfData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ResourceModal pageType={pageType}  handleFileChange={handleFileChange} courseData={courseData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <SessionModal pageType={pageType}   handleFileChange={handleFileChange} sessionData={sessionData} handleChange={handleChange} Setsessiondata={Setsessiondata} handleSubmit={handleSubmit} />
    </div>
  )
}
