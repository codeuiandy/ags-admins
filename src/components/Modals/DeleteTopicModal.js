import React, { Component } from 'react'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import {showLoader,hideLoader} from '../../helpers/loader'
import { httpDelete } from '../helpers/httpMethods'
import { NotificationManager } from "react-notifications";
export  const DeleteTopicModal =(props)=> {
  let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)


        return (
            <div>
     


<div class="modal fade" id="deleteTopicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style={{width:"375px"}}>
    <div class="modal-content">
     
      <div class="modal-body">
        <div className="confirmWrapper">
            <p>Are you sure you want to delete this?</p>
        <button onClick={()=>props.DeleteTopicx()} type="button" class="btn btn-danger" data-dismiss="modal" >Delete</button>
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
