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
import Schoolarship from '../Tables/schoolarship'
import FellowShip from '../Tables/fellowship'
export default function InvestmentOpportunities(props) {
  const [tableSwitch, setTableSwitch] = useState("jobs")

  useEffect(() => {
   getData()
  }, [])



  const setTableSwitchHandle=(type)=>{
   
    if (type === "jobs") {
      setTableSwitch("jobs")
     
    }

    if (type === "scholarships") {
      setTableSwitch("scholarships")
    }


    if (type === "FellowShip") {
      setTableSwitch("FellowShip")
    }
  }
  console.log(props)

  
    const [jobs,setJobs] = useState([])
    const [ScholarshipsFellowships,setScholarshipsFellowships] = useState([])
    const  getData =async()=>{

        try {
          showLoader()
            const res0 = await httpGet(`jobs/`)
            const res1 = await httpGet(`scholarships/`)
            const all = await axios.all([res0, res1])
            console.log(all[0].data)
            setJobs(all[0].data)
            setScholarshipsFellowships(all[1].data)
            hideLoader()
           
        } catch (error) {
          hideLoader()
        }
    }

    const [DeleteId,setDeleteId] = useState("")
    const [endpoint,setendpoint] = useState("")

         const getDeletId=(id,enpoint)=>{
        setDeleteId(id)
        setendpoint(enpoint)
    }
  
    const handleDelete=async()=>{
      showLoader()
      try {
          let res = await httpDelete(`${endpoint}/${DeleteId}/`)
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
                                    <div onClick={()=>setTableSwitchHandle("scholarships")} className="cat-one">Scholarship</div>
                                    {
                                      tableSwitch==="scholarships"?<div className="active-cat"></div>:""
                                    }
                                </span>

                                <span className="category-options">
                                    <div onClick={()=>setTableSwitchHandle("FellowShip")} className="cat-one">Fellowership</div>
                                    {
                                      tableSwitch==="FellowShip"?<div className="active-cat"></div>:""
                                    }
                                </span>


                               

                              </div>

                              <div className="switch-demacator"></div>

                              <div className="setionTable-real-estate">


                              {
                                      tableSwitch==="jobs"?<Jobs getDeletId={getDeletId} jobs={jobs}/>:""
                                    }
                                    
                               
                                    {
                                      tableSwitch==="scholarships"?<Schoolarship getDeletId={getDeletId} scholarships={ScholarshipsFellowships}/>:""
                                    }

                                         {
                                      tableSwitch==="FellowShip"?<FellowShip getDeletId={getDeletId} fellowships={ScholarshipsFellowships}/>:""
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
