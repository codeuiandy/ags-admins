import React,{useState} from 'react'
import Layout from '../Layout/index'
import './index.css'
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
import GalleryIcon from '../mediaIcon.png'
import AffinityNetworkTable from '../Tables/AffinityNetwork'
import AddOfferMosdal from '../Modals/addOfferModal'
export default function AffinityNetwork(props) {
  
    const [AfinityNetwork, SetafinityNetwork] = useState([{
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"2/12/2020",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
     {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"2/12/2020",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
     {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"2/12/2020",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },

      {
        HeaderImage:GalleryIcon,
        LogoImage:GalleryIcon,
        name:"Andrew James",
        expiration:"2/12/2020",
        description:"Expires off qualifying order with promo Code*",
        longDescription:"Expires off qualifying order with promo Code*",
        HowWorks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        Termsconditions :"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    
    ])
    

  return (
    <div>
      <Layout 
       RouteUserLayout={
                        props.history
                     } activepage="affinity_network" page="affinity_network">
	
                                <div className="table-wrap">
                                <div className="addInvestmentBtn">
                                
                                <button type="button" 
                                data-toggle="modal" 
                                data-target="#addOffereModal"
                                >Add Offer</button>
                                
                              </div>

                                    <AffinityNetworkTable afinityNetwork={AfinityNetwork} />
                                </div>
                              

                            </Layout>
      <AddInvestMentDetailsModal/>
      <AddOfferMosdal />
    </div>
  )
}
