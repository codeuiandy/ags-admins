import React,{useState,useEffect} from 'react'
import Layout from '../Layout/index'
import './index.css'
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
import GalleryIcon from '../mediaIcon.png'
import AffinityNetworkTable from '../Tables/AffinityNetwork'
import AddPartnersModal from '../Modals/addPartnersModal'
import CloseModal from '../helpers/closeModal'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import DeleteModal from '../Modals/comfirmModal'

export default function AffinityNetwork(props) {

  
  const [partners, Setpartners] = useState({
    contact_person:"",
    industry:"",
    name:"",
    partner_user:"",
    phone:"",
    service_rendered:"",
    website:"",
    address:"",
    logo:"",
    banner:"",


  })

  const  handleChange=(e)=>{

    Setpartners({...partners, [e.target.name]: e.target.value })
    console.log(partners)
  
  }

  
    const [DeleteId, setDeleteId] = useState("")
    const [EditId, setEditId] = useState("")
    const [getNetworks, setgetNetwork] = useState([])
    const [pageType, setpageType] = useState("create")

    useEffect(() => {
      getData()
      return () => {
      
      }
    }, [])

  const  getData =async()=>{

      try {
        showLoader()
          const res = await httpGet(`partners/`)
          if (res.status === 200) {
            setgetNetwork(res.data)
          }
          console.log(res)
          hideLoader()
      } catch (error) {
        hideLoader()
      }
  }

    const handleSubmit=async(e)=>{
      e.preventDefault();
       if (pageType === "create") {
         e.preventDefault();
         try {
           showLoader()

             const formData = new FormData();
        formData.append('contact_person', partners.contact_person);
        formData.append('industry', partners.industry);
        formData.append('name', partners.name);
        formData.append('partner_user', "e87af4c4-b718-4496-b5a1-7aa6d8983818");
        formData.append('phone', partners.phone);
        formData.append('service_rendered', partners.service_rendered);
        formData.append('website', partners.website);
        formData.append('address', partners.address);
        let logo = partners.logo === "" ? "":formData.append('logo', partners.logo);
        let banner = partners.banner === "" ? "":formData.append('banner', partners.banner);
    
        

             let res = await httpPostFormData(`partners/`,formData)

            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                    hideLoader()
             console.log(res)
             Setpartners
             ({
              contact_person:"",
              industry:"",
              name:"",
              partner_user:"",
              phone:"",
              service_rendered:"",
              website:"",
              address:"",
              logo:"",
              banner:"",
            })
   
             CloseModal()
             getData()
           
       
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
       // }
       }
       }



       if (pageType === "edit") {
        e.preventDefault();
        try {
          showLoader()
          
             const formData = new FormData();
        formData.append('contact_person', partners.contact_person);
        formData.append('industry', partners.industry);
        formData.append('name', partners.name);
        formData.append('partner_user', "e87af4c4-b718-4496-b5a1-7aa6d8983818");
        formData.append('phone', partners.phone);
        formData.append('service_rendered', partners.service_rendered);
        formData.append('website', partners.website);
        formData.append('address', partners.address);
        let logo = partners.logo === "" ? "":formData.append('logo', partners.logo);
        let banner = partners.banner === "" ? "":formData.append('banner', partners.banner);
    
            let res = await httpPatch(`partners/${EditId}/`,formData)

           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
          //   Setpartners
          //   ({
          //   contact_person:"",
          //       industry:"",
          //       name:"",
          //       partner_user:"",
          //       phone:"",
          //       service_rendered:"",
          //       website:"",
          //       address:"",
          //       logo:"",
          //       banner:"",
          //  })
  
            CloseModal()
            getData()
          
      
            NotificationManager.success(
               "Data edited successfully.",
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

     const getDeletId=(id)=>{
      setDeleteId(id)
  }

  const handleDelete=async()=>{
    showLoader()
    try {
        let res = await httpDelete(`partners/${DeleteId}/`)
        if (res.status===204 || res.status===200 || res.status===201) {
            NotificationManager.success(
            "deleted successfully",
           "Yepp",
           3000
       );
       getData()
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

      const getModalEditData=(data)=>{
      console.log(data)
        Setpartners
        ({
          ...partners,
          contact_person:data.contact_person,
         industry:data.industry,
         name:data.name,
         partner_user:data.partner_user,
         phone:data.phone,
         service_rendered:data.service_rendered,
         website:data.website,
         address:data.address
       })

       setpageType("edit")
       setEditId(data.id)

      }

        const  handleFileChange=(e)=>{
     Setpartners({...partners, [e.target.name]: e.target.files[0] })
    }


  
  return (
    <div>
      <Layout 
       RouteUserLayout={
                        props.history
                     } activepage="affinity_network/partners" page="affinity_network/partners">
	
                                <div className="table-wrap">
                                <div className="addInvestmentBtn">
                                
                                <button type="button" 
                                data-toggle="modal" 
                                data-target="#addOffereModal"
                                >Add Partner</button>
                                
                              </div>

                                    <AffinityNetworkTable  getModalEditData={getModalEditData} getDeletId={getDeletId} afinityNetwork={getNetworks} />
                                </div>
                              

                            </Layout>
      <AddInvestMentDetailsModal/>
      <DeleteModal deletData={handleDelete}  />  
      <AddPartnersModal handleFileChange={handleFileChange} handleChange={handleChange} handleSubmit={handleSubmit} partners={partners} pageType={pageType}/>
    </div>
  )
}
