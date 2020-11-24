import React,{useState,useEffect} from 'react'
import Layout from '../Layout/index'
import './index.css'
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
import GalleryIcon from '../mediaIcon.png'
import AffinityNetworkTable from '../Tables/OffersTable'
import OffersModal from '../Modals/offerModal'
import CloseModal from '../helpers/closeModal'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import DeleteModal from '../Modals/comfirmModal'

export default function AffinityNetwork(props) {

  
  const [offers, Setoffers] = useState({
    contact_person:"",
    industry:"",
    name:"",
    partner_user:"",
    phone:"",
    service_rendered:"",
    website:"",
    address:""


  })

  const  handleChange=(e)=>{

    Setoffers({...offers, [e.target.name]: e.target.value })
    console.log(offers)
  
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
          const res = await httpGet(`offers/`)
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
           
           const Data = {
            contact_person: offers.contact_person, 
            industry: offers.industry,
            name:  offers.name,
            partner_user:  "e87af4c4-b718-4496-b5a1-7aa6d8983818",
            phone:  offers.phone,
            service_rendered:  offers.service_rendered,
            website:  offers.website,
           address:  offers.address
           }
         

             let res = await httpPost(`offers/`,Data)

            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                    hideLoader()
             console.log(res)
             Setoffers
             ({
               contact_person:"",
              industry:"",
              name:"",
              partner_user:"",
              phone:"",
              service_rendered:"",
              website:"",
              address:""
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
          
          const Data = {
           contact_person: offers.contact_person, 
           industry: offers.industry,
           name:  offers.name,
           partner_user:  "e87af4c4-b718-4496-b5a1-7aa6d8983818",
           phone:  offers.phone,
           service_rendered:  offers.service_rendered,
           website:  offers.website,
          address:  offers.address
          }
        

            let res = await httpPatch(`offers/${EditId}/`,Data)

           console.log("res status",res) 
           if (res.status === 201 || res.status === 200) {
                   hideLoader()
            console.log(res)
            Setoffers
            ({
              contact_person:"",
             industry:"",
             name:"",
             partner_user:"",
             phone:"",
             service_rendered:"",
             website:"",
             address:""
           })
  
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
        let res = await httpDelete(`offers/${DeleteId}/`)
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
        Setoffers
        ({
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


  
  return (
    <div>
      <Layout 
       RouteUserLayout={
                        props.history
                     } activepage="affinity_network/offers" page="affinity_network/offers">
	
                                <div className="table-wrap">
                                <div className="addInvestmentBtn">
                                
                                <button type="button" 
                                data-toggle="modal" 
                                data-target="#addOffereModal"
                                >Add Offer</button>
                                
                              </div>

                                    <AffinityNetworkTable  getModalEditData={getModalEditData} getDeletId={getDeletId} afinityNetwork={getNetworks} />
                                </div>
                              

                            </Layout>
      <DeleteModal deletData={handleDelete}  />  
      <OffersModal handleChange={handleChange} handleSubmit={handleSubmit} offers={offers} pageType={pageType}/>
    </div>
  )
}
