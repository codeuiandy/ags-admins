import React from 'react'
import $ from 'jquery'
export default function closeModal() {
  return(  closeModal = () => {
        window.$(".modal").modal("hide");
        window.$(document.body).removeClass("modal-open");
        window.$(".modal-backdrop").remove();
      })
}
