import React,{useState} from 'react'
import OverViewCards from './viewInvesmentOverview.jsx'
import Layout from '../Layout/index'
import './index.css'
import RealEstateTable from '../Tables/realEstate.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
export default function ViewInvestmentOpportunities(props) {
  const [tableSwitch, setTableSwitch] = useState("realEstate")

  const [realEstateData, SetRealEstateData] = useState([{
    title:"Low cost housing Estates ",
    partner:"Urban Estates ",
    rio:"2.5%",
    maturity:"10 Months"
  },

  {
    title:"Low cost housing Estates ",
    partner:"Urban Estates ",
    rio:"2.5%",
    maturity:"10 Months"
  },

  {
    title:"Low cost housing Estates ",
    partner:"Urban Estates ",
    rio:"2.5%",
    maturity:"10 Months"
  },{
    title:"Low cost housing Estates ",
    partner:"Urban Estates ",
    rio:"2.5%",
    maturity:"10 Months"
  }

])

  const setTableSwitchHandle=(type)=>{
   
    if (type === "realEstate") {
      setTableSwitch("realEstate")
     
    }

    if (type === "agriculture") {
      setTableSwitch("agriculture")
    }


    if (type === "fixedIncome") {
      setTableSwitch("fixedIncome")
    }
  }
  return (
    <div>
      <Layout RouteUserLayout={
					props.history
        }  
      page="InvestmentOpportunities">
			
                              <OverViewCards/>
                            
                              <div className="setionTable-real-estate">


                          <RealEstateTable realEstateData={realEstateData}/>
                               
                                   
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal/>
      <AddInvestMentDetailsModal/>
    </div>
  )
}
