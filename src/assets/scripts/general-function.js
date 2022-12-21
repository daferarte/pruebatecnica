function showMessage(message){
    alert(message);
    document.querySelector("#messageText").innerHTML=message;
    let elems = document.querySelector('#messageModal');
    let instances = M.Modal.init(elems, {});
    instances.open();  
}
