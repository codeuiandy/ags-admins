import React,{useState} from 'react'
import OverViewCards from './othersOverview'
import Layout from '../Layout/index'
import './index.css'
import Loans from '../Tables/Loan.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {Link} from 'react-router-dom'
export default function InvestmentOpportunities(props) {
  const [tableSwitch, setTableSwitch] = useState("loans")

  const [realEstateData, SetRealEstateData] = useState([{
    title:"Low cost housing Estates ",
    description:"Urban Estates ",
    openDate:"2/12/2020",
    endDate:"2/12/2020"
  },

  {
  title:"Low cost housing Estates ",
    description:"Urban Estates ",
    openDate:"2/12/2020",
    endDate:"2/12/2020"
  },

  {
  title:"Low cost housing Estates ",
    description:"Urban Estates ",
    openDate:"2/12/2020",
    endDate:"2/12/2020"
  },{
  title:"Low cost housing Estates ",
    description:"Urban Estates ",
    openDate:"2/12/2020",
    endDate:"2/12/2020"
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
                     } activepage="other_opportunities" page="other_opportunities">
			
                              <OverViewCards/>
                              <div className="addInvestmentBtn">
                                <Link to="/add_others">
                                <button type="button" 
                                >Add Others</button>
                                </Link>
                                
                              </div>

                              <div className="board-switcher">
                                <span className="board-switcher-header">Category:</span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("loans")} className="cat-one">Jobs</div>
                                    {
                                      tableSwitch==="loans"?<div className="active-cat"></div>:""
                                    }
                                    
                                </span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("agriculture")} className="cat-one">Scholarship</div>
                                    {
                                      tableSwitch==="agriculture"?<div className="active-cat"></div>:""
                                    }
                                </span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("agriculture")} className="cat-one">Fellowership</div>
                                    {
                                      tableSwitch==="agriculture"?<div className="active-cat"></div>:""
                                    }
                                </span>


                               

                              </div>

                              <div className="switch-demacator"></div>

                              <div className="setionTable-real-estate">


                              {
                                      tableSwitch==="loans"?<Loans realEstateData={realEstateData}/>:""
                                    }
                                    
                               
                                    {
                                      tableSwitch==="agriculture"?<Loans realEstateData={realEstateData}/>:""
                                    }
                              
                                   
                                
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal/>
      <AddInvestMentDetailsModal/>
    </div>
  )
}
