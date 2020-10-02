import React, { Component } from 'react'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import {showLoader,hideLoader} from '../../helpers/loader'
import { httpDelete } from '../helpers/httpMethods'
import { NotificationManager } from "react-notifications";
export  const DeletModal =()=> {
  let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)

const DeleteMaster =async ()=>{
  showLoader()

  try {
    const res = await httpDelete(`${getDeletDetails.delete_url}/${getDeletDetails.delete_id}/`)
    if (res.status === 204) {
      hideLoader()
      console.log(res)
      NotificationManager.success(
				"Delected Successfully",
				"Yepp!",
				3000
			);
      setDeletDetails({...getDeletDetails,reload_state:true})
    }
  } catch (error) {
    
  }


}
        return (
            <div>
     


<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style={{width:"375px"}}>
    <div class="modal-content">
     
      <div class="modal-body">
        <div className="confirmWrapper">
            <p>Are you sure you want to delete this?</p>
        <button onClick={()=>DeleteMaster()} type="button" class="btn btn-danger" data-dismiss="modal" >Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>
            </div>
        )
    
}
