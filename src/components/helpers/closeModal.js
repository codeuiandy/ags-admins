import $ from 'jquery'
const CloseModal = () => {
  window.$(".modal").modal("hide");
  window.$(document.body).removeClass("modal-open");
  window.$(".modal-backdrop").remove();

}


export default CloseModal