import React,{useState,useEffect} from 'react'
import OverViewCards from './othersOverview'
import Layout from '../Layout/index'
import './index.css'
import Loans from '../Tables/Loan.jsx'
import Jobs from '../Tables/jobs.jsx'
import Agriculture from '../Tables/agricuture.jsx'
import FixedIncome from "../Tables/fixedIncome.jsx"
import AddInvestMentModal from '../Modals/AddInvestMentModal.jsx'
import AddInvestMentDetailsModal from '../Modals/addInvestmentDetails.jsx'
import OthersTypeModal from '../Modals/othersTypeModal'
import {Link} from 'react-router-dom'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import {httpPostFormData,httpPut,httpPatch,httpGet, httpPost, httpDelete} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import axios from 'axios'
import Truncate from '../helpers/truncate'
import DeleteModal from '../Modals/comfirmModal'
export default function InvestmentOpportunities(props) {
  const [tableSwitch, setTableSwitch] = useState("jobs")

  useEffect(() => {
   getData()
  }, [])

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
   
    if (type === "jobs") {
      setTableSwitch("jobs")
     
    }

    if (type === "agriculture") {
      setTableSwitch("agriculture")
    }


    if (type === "fixedIncome") {
      setTableSwitch("fixedIncome")
    }
  }
  console.log(props)

  
    const [jobs,setJobs] = useState([])
    const [getAllcategory,setgetAllcategory] = useState([])
    const [Merchants, settMerchants] = useState([])
    const  getData =async()=>{

        try {
          showLoader()
            const res0 = await httpGet(`jobs/`)
            const res1 = await httpGet(`scholarships/`)
            const res2 = await httpGet(`jobs/`)
            const all = await axios.all([res0, res1,res2])
            console.log(all[0].data)
            setJobs(all[0].data)
            setgetAllcategory(all[1].categories)
            settMerchants(all[2]);
            hideLoader()
           
        } catch (error) {
          hideLoader()
        }
    }

    const [DeleteId,setDeleteId] = useState("")

         const getDeletId=(id)=>{
        setDeleteId(id)
    }
  
    const handleDelete=async()=>{
      showLoader()
      try {
          let res = await httpDelete(`jobs/${DeleteId}/`)
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

  return (
    <div>
      <Layout 
       RouteUserLayout={
                        props.history
                     } activepage="other_opportunities" page="other_opportunities">
			
                              <OverViewCards/>
                              <div className="addInvestmentBtn">
                               
                                <button type="button" 
                                data-toggle="modal" 
                                data-target="#OthersModal" 
                                >Add Others
                                </button>
                               
                                
                              </div>

                              <div className="board-switcher">
                                <span className="board-switcher-header">Category:</span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("jobs")} className="cat-one">Jobs</div>
                                    {
                                      tableSwitch==="jobs"?<div className="active-cat"></div>:""
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
                                      tableSwitch==="jobs"?<Jobs getDeletId={getDeletId} jobs={jobs}/>:""
                                    }
                                    
                               
                                    {
                                      tableSwitch==="agriculture"?<Loans realEstateData={realEstateData}/>:""
                                    }
                              
                                   
                                
                                
                               
                              </div>
                              
      </Layout>
      <AddInvestMentModal/>
      <AddInvestMentDetailsModal/>
      <OthersTypeModal push={props.history.push}/>
      <DeleteModal deletData={handleDelete} />
    </div>
  )
}
