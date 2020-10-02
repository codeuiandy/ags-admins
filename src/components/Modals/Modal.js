import React from 'react'
import {useRecoilState} from 'recoil'
import {ShowModal} from '../../GlobalState/localState'
export function Modal() {
  const [getModal, setModal] = useRecoilState(ShowModal)
  return (
    <div>




      
<div className="container">
  
  <div id="modal-window"  className={`shadow ${getModal.toggleModal === true? "showModal" :  getModal.firstState}`} >
    <div className="main-modal">
      <h1>Main Modal</h1>
      <button className="btn btn-danger" onClick={()=>setModal({toggleModal:false})}>
        CLOSE MODAL
      </button>
      
    </div>
  </div>
</div>


    <button onClick={()=>setModal({toggleModal:true})}>close</button>
    </div>
  )
}
