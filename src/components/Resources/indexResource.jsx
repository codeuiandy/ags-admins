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
export default function AffinityNetwork(props) {
  
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

    const [resourceType, SetResourceType] = useState("Courses")
    

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
      <PDFModal />
      <ResourceModal/>
    </div>
  )
}
