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
import moment from 'moment'
export default function AffinityNetwork(props) {

  
  const [offers, Setoffers] = useState({
        discount_expire: "",
    header_image: "",
    how_it_works: "",
    id: "",
    logo_image: "",
    long_description: "",
    offer_valid_description: "",
    short_description: "",
    tos: "",
    previewLogo:"",
    previewHeaderImg:"",
    partner:"",
    status:"",


  })

  const  handleChange=(e)=>{

    Setoffers({...offers, [e.target.name]: e.target.value })
    console.log(offers)
  
  }

     const  handleFileChange=(e)=>{
   
    if (e.target.name === "header_image") {
      Setoffers({...offers,header_image:e.target.files[0], previewHeaderImg: URL.createObjectURL(e.target.files[0])}) 
    }

    if (e.target.name === "logo_image") {
      Setoffers({...offers,logo_image:e.target.files[0], previewLogo: URL.createObjectURL(e.target.files[0])}) 
    }

    }


  
    const [DeleteId, setDeleteId] = useState("")
     const [startDate, setStartDate] = useState(new Date())
    const [EditId, setEditId] = useState("")
    const [getNetworks, setgetNetwork] = useState([])
    const [pageType, setpageType] = useState("create")

    useEffect(() => {
      getData()
      partners()
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

  const [Allpartners, setAllpartners] = useState([])

   const  partners =async()=>{

      try {
        showLoader()
          const res = await httpGet(`partners/`)
          if (res.status === 200) {
            setAllpartners(res.data)
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
         let date =   moment(startDate).format("YYYY-MM-DDThh:mm");
         console.log(date)
         e.preventDefault();
         try {
           showLoader()
              const formData = new FormData();
        formData.append('discount_expire', date);
        formData.append('how_it_works', offers.how_it_works);
        formData.append('long_description', offers.long_description);
        formData.append('offer_valid_description', offers.offer_valid_description);
        formData.append('short_description', offers.short_description);
        formData.append('tos', offers.tos);
        formData.append('partner', offers.partner);
        formData.append('status', offers.status);
        let logo = offers.header_image === "" ? "":formData.append('header_image', offers.header_image);
        let banner = offers.logo_image === "" ? "":formData.append('logo_image', offers.logo_image);
              let res = await httpPostFormData(`offers/`,formData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                    hideLoader()
             console.log(res)
             Setoffers
             ({
                  ...offers,
                       discount_expire: "",
                        header_image: "",
                        how_it_works: "",
                        id: "",
                        logo_image: "",
                        long_description: "",
                        offer_valid_description: "",
                        short_description: "",
                        tos: "",
                        previewLogo:"",
                        previewHeaderImg:"",
                        partner:"",
                        status:"",
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
        formData.append('discount_expire',moment(startDate).format("YYYY-MM-DDThh:mm"));
        formData.append('how_it_works', offers.how_it_works);
        formData.append('long_description', offers.long_description);
        formData.append('offer_valid_description', offers.offer_valid_description);
        formData.append('short_description', offers.short_description);
        formData.append('tos', offers.tos);
        formData.append('partner', offers.partner);
        formData.append('status', offers.status);
        let logo = offers.header_image === "" ? "":formData.append('header_image', offers.header_image);
        let banner = offers.logo_image === "" ? "":formData.append('logo_image', offers.logo_image);
              let res = await httpPatch(`offers/${EditId}/`,formData)
            console.log("res status",res) 
            if (res.status === 201 || res.status === 200) {
                    hideLoader()
             console.log(res)
             Setoffers
             ({
                  ...offers,
                                        discount_expire: "",
                        header_image: "",
                        how_it_works: "",
                        id: "",
                        logo_image: "",
                        long_description: "",
                        offer_valid_description: "",
                        short_description: "",
                        tos: "",
                        previewLogo:"",
                        previewHeaderImg:"",
                        partner:"",
                        status:"",
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
          ...offers,
              discount_expire:data.discount_expire,
              how_it_works:data.how_it_works,
              id:data.id,
              long_description:data.long_description,
              offer_valid_description:data.offer_valid_description,
              short_description:data.short_description,
              tos:data.tos,
              partner:data.partner.id,
              previewHeaderImg:data.header_image,
              previewLogo:data.logo_image,
              status:data.status
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
                                
                                <button
                                onClick={()=> Setoffers
             ({
                  ...offers,
                          discount_expire: "",
                          header_image: "",
                          how_it_works: "",
                          id: "",
                          logo_image: "",
                          long_description: "",
                          offer_valid_description: "",
                          short_description: "",
                          tos: "",
                          previewLogo:"",
                          previewHeaderImg:"",
                          partner:"",
                          status:"",
            })}
                                type="button" 
                                data-toggle="modal" 
                                data-target="#addOffereModal"
                                >Add Offer</button>
                                
                              </div>

                                    <AffinityNetworkTable  getModalEditData={getModalEditData} getDeletId={getDeletId} afinityNetwork={getNetworks} />
                                </div>
                              

                            </Layout>
      <DeleteModal deletData={handleDelete}  />  
      <OffersModal startDate={startDate} setStartDate={setStartDate} Allpartners={Allpartners} handleFileChange={handleFileChange} handleChange={handleChange} handleSubmit={handleSubmit} offers={offers} pageType={pageType}/>
    </div>
  )
}
