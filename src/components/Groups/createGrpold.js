








import axious from 'axios'



import React from 'react'

export default function CreateGrpold() {
    return (
        <div>
            
        </div>
    )
}























// import React, { useState,useEffect } from 'react'
// import {useRecoilState} from 'recoil'
// import {delet_edit_Handle} from '../../GlobalState/localState'
// import Layout from '../Layout/index'
// import Grpicon from './Group.png'
// import {httpPostFormData,httpPut,httpPatch} from '../helpers/httpMethods'
// import {hideLoader, showLoader} from '../helpers/loader'
// import {NotificationManager} from 'react-notifications'
// export const CreateGroup=(props)=>  {
//     let [getEditDetails, setEditDetails] = useRecoilState(delet_edit_Handle)
//     let {edit_data} = getEditDetails
//     console.log('>>>>getEditDetails',getEditDetails);
//     console.log("edit<<<>>>>>",edit_data)
//     let [Group , setGroup] = useState({
//         ...edit_data,
//         // name: "",
//         // description: "",
//         // thumbnail: "",
//         openOrClose:"false",
//         previewImg:null,
//         editPreview:""
    
// })



    
//     console.log("edit details",getEditDetails)

   
//     const cleanUp=()=>{
//         //   setEditDetails({
//         //             delete_id:"null",
//         //             delete_url:"null",
//         //             reload_state:false,
//         //            edit_Data:null,
//         //            usedbyGroupsPage:false,
//         //            edit_id:""
//         //           })
        
//         alert(6)
//         }

        

// const getEditGroup=()=>{
 
//     if (getEditDetails.usedbyGroupsPage===true) {
//         // console.log(">>>edit info",getEditDetails.edit_data.id)
//         console.log("edit details",getEditDetails)
//         setGroup({
//           name:getEditDetails.edit_data.name,
//           description:getEditDetails.edit_data.description,
//           editPreview: getEditDetails.edit_data.thumbnail,
//           openOrClose: getEditDetails.edit_data.closed,
//       })
//        }
// }


      
// useEffect(() => {
//     // console.log("edit details useEffect",getEditDetails)
//     // getEditGroup()
   


//     // return ()=>{
//     //    cleanUp() 
//     // } 
    
    
// }, [Group])



//   const CreateTGroup=async()=>{


//     if (getEditDetails.usedbyGroupsPage===true) {
//         showLoader()
//         const currenThumbnailtFile = Group.thumbnail[0]
//         try {
//             const formData = new FormData();
//             formData.append('name', Group.name);
//             formData.append('description', Group.description);
//             const img = Group.thumbnail === ""?"" :formData.append('thumbnail', currenThumbnailtFile)
//             formData.append('close', Group.openOrClose === "true"?true:true); 
//             formData.append('hidden', false); 
//               let res = await httpPatch(`groups/${getEditDetails.edit_id}/`,formData)
//              console.log("res status",res) 
//              if (res.status === 200) {
//                      hideLoader()
//               console.log(res)

//               NotificationManager.success(
//                  "Group edited successfully.",
//                 "Yepp",
//                 3000
//             );
//              }
            
          
//               hideLoader()
//         } catch (error) {
//             NotificationManager.success(
//                 error,
//                "Opps",
//                3000
//            );
//             hideLoader()
//         }


//     }

//     else{
//     showLoader()
// const currenThumbnailtFile = Group.thumbnail[0]

// try {
//     const formData = new FormData();
//     formData.append('name', Group.name);
//     formData.append('description', Group.description);
//     formData.append('close', Group.openOrClose); 
//     formData.append('hidden', false); 
// formData.append('thumbnail', currenThumbnailtFile);


//       console.log(formData)
//       let res = await httpPostFormData("groups/",formData)
//      console.log("res status",res.status) 
//      if (res.status === 201) {
//              hideLoader()
//       console.log(res)
//       setGroup({
    
//         name: "",
//         description: "",
//         thumbnail: "",
//         openOrClose:false,
//         previewImg:null,
//         editPreview:""
    
// })
//       NotificationManager.success(
//          "Group created successfully.",
//         "Yepp",
//         3000
//     );
//      }
    
  
//       hideLoader()
// } catch (error) {
//     hideLoader()
// }}}
//         return (
//             <Layout RouteUserLayout={
//                 props.history
//             } page="create-group" activepage="keepOpenGroup">
               
               
//                 <div className="create-grp">
//                     <div className="grp1">
//                      <label>Group Name</label>
//                      <input type="text"
//                      value={Group.name} onChange={(e)=>setGroup({...Group,name:e.target.value})}
//                      />
//                     </div>


//                     <div className="grp3">
//                         <input type="file" onChange={(e)=>setGroup({...Group,thumbnail:e.target.files,previewImg:URL.createObjectURL(e.target.files[0]),editPreview:URL.createObjectURL(e.target.files[0])})}  />
//                         <div className="getGrpImg">

//                         {getEditDetails.usedbyGroupsPage===true?"":
//                       <img title="Change Image" style={{width:"60px",height:"50px",marginBottom:"5px",borderRadius: "4px"}} src={Group.previewImg==null?Grpicon:Group.previewImg} />
//         }      
                     
   
//                      {getEditDetails.usedbyGroupsPage===true?
//                       <img title="Change Image" style={{width:"60px",height:"50px",marginBottom:"5px",borderRadius: "4px"}} src={Group.editPreview==null?Grpicon:Group.editPreview} />:""
//         }      
//                             <p>Drop Image Here Or <span style={{color:"orange"}}>Browse</span> </p>
//                             <p>support .jpg,PNG.</p>
//                         </div>
//                         </div>


//                         <div className="grp4">
//                         <label>
//                         Description
//                         </label>

//                         <textarea 
//                         value={Group.description} onChange={(e)=>setGroup({...Group,description:e.target.value})}
//                          placeholder="Write something nice about the group"
//                         type="text"/>
//                         </div>

//                         <div className="createGRpBTN">
//                             <div>
//                             <div class="form-group">
//                       <label>Open Or Closed Group?</label>


//     <select value={Group.openOrClose} class="form-control" id="interval"
//          onChange={(e)=>setGroup({...Group,openOrClose:e.target.value})}>

//       <option value="false">Open Group</option>
//       <option value="true">Closed Group</option>
     
//     </select>
//   </div>
//                             </div>
                          
//                         </div>
//                         <div className="btnCtreate">
//                         <button onClick={CreateTGroup}>{getEditDetails.usedbyGroupsPage===true?"Edit Group":"Create Group"}</button>
//                         </div>
                        
//                 </div>
//             </Layout>
//         )
//     }

