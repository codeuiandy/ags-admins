import React,{useState} from 'react'
import OverViewCards from './overviewCards'
import Layout from '../Layout/index'
import './index.css'
import RealEstateTable from '../Tables/realEstate.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
export default function InvestmentOpportunities(props) {
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
      <Layout 
      
             RouteUserLayout={
                props.history
            } activepage="investment_opportunities" page="investment_opportunities">
			
                              <OverViewCards/>
                              <div className="addInvestmentBtn">
                                <button type="button" 
                                data-toggle="modal" 
                                data-target="#investmentModal">Add new Invesment</button>
                              </div>

                              <div className="board-switcher">
                                <span className="board-switcher-header">Category:</span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("realEstate")} className="cat-one">Real Estate</div>
                                    {
                                      tableSwitch==="realEstate"?<div className="active-cat"></div>:""
                                    }
                                    
                                </span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("agriculture")} className="cat-one">Agriculture</div>
                                    {
                                      tableSwitch==="agriculture"?<div className="active-cat"></div>:""
                                    }
                                </span>


                                <span onClick={()=>setTableSwitchHandle("fixedIncome")} className="category-options">
                                    <div className="cat-one">Fixed Income</div>
                                    {
                                      tableSwitch==="fixedIncome"?<div className="active-cat"></div>:""
                                    }
                                </span>

                              </div>

                              <div className="switch-demacator"></div>

                              <div className="setionTable-real-estate">


                              {
                                      tableSwitch==="realEstate"?<RealEstateTable realEstateData={realEstateData}/>:""
                                    }
                                    
                               
                                    {
                                      tableSwitch==="agriculture"?<Agriculture realEstateData={realEstateData}/>:""
                                    }
                              
                                    {
                                      tableSwitch==="fixedIncome"? <FixedIncome realEstateData={realEstateData}/>:""
                                    }
                                
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal/>
      <AddInvestMentDetailsModal/>
    </div>
  )
}
