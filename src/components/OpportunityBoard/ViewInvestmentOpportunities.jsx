import React,{useState,useEffect} from 'react'
import OverViewCards from './viewInvesmentOverview.jsx'
import Layout from '../Layout/index'
import './index.css'
import InvestorsDetails from '../Tables/investorsDetails.jsx'
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
export default function ViewInvestmentOpportunities(props) {

  useEffect(() => {
    getData()
  }, [])

  const [tableSwitch, setTableSwitch] = useState("realEstate")
  const [investments, setinvestments] = useState([])
   const  getData =async()=>{

      try {
        showLoader()
          const res = await httpGet(`investments/`)
          if (res.status === 200) {
            setinvestments(res.data)
          }
          console.log(res.data)
          hideLoader()
      } catch (error) {
        hideLoader()
      }
  }


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
