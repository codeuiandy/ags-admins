import React,{useState,useEffect} from 'react'
import OverViewCards from './overviewCards'
import Layout from '../Layout/index'
import './index.css'
import RealEstateTable from '../Tables/realEstate.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import OthersTable from "../Tables/othersTable"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import DeleteModal from '../Modals/comfirmModal'
export default function InvestmentOpportunities(props) {
   useEffect(() => {
    getData()
  }, [])

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
 
   const [agricTech, setagricTech] = useState([])
   const [fixedIncome, setfixedIncome] = useState([])
   const [Others, setOthers] = useState([])
   const  getData =async()=>{

      try {
        showLoader()
          const res = await httpGet(`investments/`)
          if (res.status === 200) {
            let getAgricTech = res.data.filter((res)=>{
              return(
                res.investment_type === "agric tech"
              )
            })

             let getfixedIncome = res.data.filter((res)=>{
              return(
                res.investment_type === "fixed income"
              )
            })

              let getOthers = res.data.filter((res)=>{
              return(
                res.investment_type === "others"
              )
            })

            setagricTech(getAgricTech)
            setfixedIncome(getfixedIncome)
             setOthers(getOthers)
          }
          
          
          hideLoader()
      } catch (error) {
        hideLoader()
      }
  }


  
  const [DeleteId,setDeleteId] = useState("")


     const getDeletId=(id,enpoint)=>{
        setDeleteId(id)
    }
  
    const handleDelete=async()=>{
      showLoader()
      try {
          let res = await httpDelete(`investments/${DeleteId}/`)
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

    if (type === "others") {
      setTableSwitch("others")
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

                                 <span onClick={()=>setTableSwitchHandle("others")} className="category-options">
                                    <div className="cat-one">Others</div>
                                    {
                                      tableSwitch==="others"?<div className="active-cat"></div>:""
                                    }
                                </span>

                              </div>

                              <div className="switch-demacator"></div>

                              <div className="setionTable-real-estate">


                              {
                                      tableSwitch==="realEstate"?<RealEstateTable realEstateData={realEstateData}/>:""
                                    }
                                    
                               
                                    {
                                      tableSwitch==="agriculture"?<Agriculture setDeleteId={setDeleteId} agricTech={agricTech}/>:""
                                    }
                              
                                    {
                                      tableSwitch==="fixedIncome"? <FixedIncome setDeleteId={setDeleteId} agricTech={fixedIncome}/>:""
                                    }

                                     {
                                      tableSwitch==="others"? <OthersTable setDeleteId={setDeleteId} agricTech={Others}/>:""
                                    }
                                
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal push={props.history.push}/>
      <DeleteModal deletData={handleDelete}/>
      <AddInvestMentDetailsModal/>
    </div>
  )
}
