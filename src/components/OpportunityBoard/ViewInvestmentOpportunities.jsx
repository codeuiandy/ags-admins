import React,{useState} from 'react'
import OverViewCards from './viewInvesmentOverview.jsx'
import Layout from '../Layout/index'
import './index.css'
import InvestorsDetails from '../Tables/investorsDetails.jsx'
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
export default function ViewInvestmentOpportunities(props) {
  const [tableSwitch, setTableSwitch] = useState("realEstate")

  const [realEstateData, SetRealEstateData] = useState([{
    investor:"Mohammed Sname Motalo",
    amount:"N2,260,0000",
    reference:"AGS01VXYKC",
    units:"10 ",
    investmentDate:"12 June,2021",
    maturity:"12 June,2021",
  },

  {
    investor:"Mohammed Sname Motalo",
    amount:"N2,260,0000",
    reference:"AGS01VXYKC",
    units:"10 ",
    investmentDate:"12 June,2021",
    maturity:"12 June,2021",
  },


  {
    investor:"Mohammed Sname Motalo",
    amount:"N2,260,0000",
    reference:"AGS01VXYKC",
    units:"10 ",
    investmentDate:"12 June,2021",
    maturity:"12 June,2021",
  },


  {
    investor:"Mohammed Sname Motalo",
    amount:"N2,260,0000",
    reference:"AGS01VXYKC",
    units:"10 ",
    investmentDate:"12 June,2021",
    maturity:"12 June,2021",
  },

  

 

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
      <Layout   RouteUserLayout={
                props.history
            } activepage="investment_opportunities" page="investment_opportunities">

              <h1 className="viewInvestMent-header">Low Cost housing estates Investment statistics</h1>
			
                              <OverViewCards/>
                            
                              <div className="setionTable-real-estate">


                          <InvestorsDetails realEstateData={realEstateData}/>
                               
                                   
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal/>
      <AddInvestMentDetailsModal/>
    </div>
  )
}
