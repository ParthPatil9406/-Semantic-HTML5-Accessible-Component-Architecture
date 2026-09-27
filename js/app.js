document.querySelectorAll("[data-modal-open]").forEach(function(button){
  button.addEventListener("click",function(){
    const dialog=document.getElementById(button.getAttribute("data-modal-open"));
    if(dialog) dialog.showModal();
  });
});
document.querySelectorAll("dialog").forEach(function(dialog){
  dialog.addEventListener("click",function(event){
    const rect=dialog.getBoundingClientRect();
    const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;
    if(outside) dialog.close();
  });
});
const form=document.getElementById("invite-form");
if(form){
  form.addEventListener("submit",function(event){
    event.preventDefault();
    const message=document.getElementById("form-message");
    message.textContent="Invitation is ready to be submitted.";
  });
}
