import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import {httpPostFormData,httpPut,httpPatch} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import Grpicon from '../Groups/Group.png'
import CloseModal from '../helpers/closeModal'
import $ from 'jquery'
import group from '../Groups/group'
export default function AddOfferModal(props) {

useEffect(() => {
    SetEditData()
}, [props.modalType])

    const [startDate, setStartDate] = useState(new Date())
    const [GroupData, setGroupData] = useState([])
    const [GroupDataInput, setGroupDataInput] = useState("")

    let [Group , setGroup] = useState({
    
        name: "",
        description: "",
        thumbnail: "",
        openOrClose:"",
        previewImg:null,
        editPreview:""
    
})


const closeModal = () => {
    window.$(".modal").modal("hide");
    window.$(document.body).removeClass("modal-open");
    window.$(".modal-backdrop").remove();
  
}



const CreateTGroup=async()=>{


    if (props.modalType === "create") {
        
        showLoader()
        const currenThumbnailtFile = Group.thumbnail[0]
        
        try {
            const formData = new FormData();
            formData.append('name', Group.name);
            formData.append('description', Group.description);
            formData.append('close', Group.openOrClose); 
            formData.append('hidden', false); 
            formData.append('thumbnail', currenThumbnailtFile);
            formData.append('rules', GroupData);
        
        
        
              console.log(formData)
              let res =  await httpPostFormData("groups/",formData)
             console.log("res status",res.status) 
             
             if (res.status === 201) {
                     hideLoader()
              setGroup({
            
                name: "",
                description: "",
                thumbnail: "",
                openOrClose:false,
                previewImg:null,
                editPreview:""
            
        })
        props.setmodalType("create")
             closeModal()
              props.getAllGroups()
              NotificationManager.success(
                 "Group created successfully.",
                "Yepp",
                3000
            );
             }
            
          
              hideLoader()
        } catch (error) {
            hideLoader()
        }
    }
    else{
        

        showLoader()
        const currenThumbnailtFile = Group.thumbnail[0]
        
        
        try {
            const formData = new FormData();
            formData.append('name', Group.name);
            formData.append('description', Group.description);
            formData.append('close', Group.openOrClose); 
            formData.append('hidden', false); 
            const img = Group.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile)
            formData.append('rules', GroupData);
        
        
        
              console.log(formData)
              let res =  await httpPatch(`groups/${props.GroupId}/`,formData)
             console.log("res status",res.status) 
             
             if (res.status === 200) {
                     hideLoader()
              setGroup({
            
                name: "",
                description: "",
                thumbnail: "",
                openOrClose:false,
                previewImg:null,
                editPreview:""
            
        })
        props.setmodalType("create")
             closeModal()
              props.getAllGroups()
              NotificationManager.success(
                 "Group updated successfully.",
                "Yepp",
                3000
            );
             }
            
          
              hideLoader()
        } catch (error) {
            hideLoader()
        }

        
    }
   }

    const handleGroupData=(type,deleteData)=>{
        if (type === "add") {
          if (GroupDataInput === "" || GroupDataInput === null || GroupDataInput === undefined) {
            return
          }
           if (GroupData.find(data=>data === GroupDataInput)) {
          alert(`${GroupDataInput} already added`)
          return
        }
        setGroupData([...GroupData,GroupDataInput])
        }
        else{
          let deletData = GroupData[deleteData]
          let filterData = GroupData.filter(data=>{
           return data !== deletData
          })
          console.log(filterData)
          setGroupData(filterData)
        }
       
      }

      const SetEditData=()=>{
        if (props.modalType === "edit") {
                setGroup({
            name: props.modalEdit.name,
            description: props.modalEdit.description,
            thumbnail: "",
            openOrClose:"false",
            previewImg:props.modalEdit.thumbnail,
        })
        }
    
    }

    const reSet = ()=>{
        setGroup({
            
            name: "",
            description: "",
            thumbnail: "",
            openOrClose:false,
            previewImg:null,
            editPreview:""
        
    })
    props.setmodalType("create")
    }

    return (
        <div>
            <div class="modal fade" id="groupModal" tabindex="-1" role="dialog" aria-labelledby="groupModal" 
            data-keyboard="false" data-backdrop="static" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="groupModal">{
                        props.modalType === "edit"? "Edit" : "Create"
                    } Group</h5>
        <button onClick={()=>reSet()} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

    <div className="investment-details-input-wrap">
  <label>Group Name</label>
  <input required={true} type="text" placeholder="e,g your text here" 
  value={Group.name} onChange={(e)=>setGroup({...Group,name:e.target.value})}
  />
</div>


<div className="investment-details-input-wrap">
  <label>Group  Description</label>
  <textarea type="text" placeholder="e,g your text here"
  onChange={(e)=>setGroup({...Group,description:e.target.value})}
  value={Group.description}
  />
</div>

 <div className="investment-details-input-wrap">
 <label>Open Or Closed Group?</label>


<select value={Group.openOrClose} class="form-control" id="interval"
     onChange={(e)=>setGroup({...Group,openOrClose:e.target.value})}>

  <option value="false">Open Group</option>
  <option value="true">Closed Group</option>
 
</select>
</div>


<div className="investment-details-input-wrap addGroupRullesWrap">
     <input style={{borderRadius:"5px 0px 0 5px"}} onChange={(e)=>setGroupDataInput(e.target.value)} type="text"
      placeholder="Add group rules"/><button
   onClick={(data)=>handleGroupData("add","")}>Add</button>
  </div>
 
   <div className="funding-industry-tags">
  {
    GroupData.map((data,index)=>{
    return<span className="funding-industry-tags-span" onClick={(data)=>handleGroupData("remove",index)}>{`${data}`} <span className="x" >X</span></span>
    })
  }
  </div>




     <div className="investment-details-input-wrap">
                  <label>Group  Banner </label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input type="file" onChange={(e)=>setGroup({...Group,thumbnail:e.target.files,previewImg:URL.createObjectURL(e.target.files[0]),
                        editPreview:URL.createObjectURL(e.target.files[0])})}/>
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>{Group.previewImg === null ? "No file chosen" : ""}</span>
             </div>
        </div>
      
                        {
                            Group.previewImg === null ? "" :
                        
                      <img title="Change Image" 
                      style={{width:"60px",height:"50px",marginBottom:"-5px",borderRadius: "4px",marginTop:"10px"}}
                       src={Group.previewImg} />
             
                        }
   
                   </div>

    
<div className="add-offerbtn">
                    <button onClick={CreateTGroup}>{
                        props.modalType === "edit"? "Edit" : "Create"
                    }</button>
</div>



                   
</div>
</div>
</div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
