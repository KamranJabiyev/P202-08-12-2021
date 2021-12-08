let upload=document.querySelector(".fa-cloud-upload-alt"),
    dropArea=document.getElementById("dropArea");
    
upload.addEventListener("click",function(){
    this.nextElementSibling.click();
})

dropArea.ondragover=(ev)=>ev.preventDefault();

dropArea.ondrop=(ev)=>{
    ev.preventDefault();
    readFile(ev.dataTransfer.files);
}

upload.nextElementSibling.addEventListener("change",ev=>{
    readFile(ev.target.files);
})

function readFile(files){
    [...files].forEach(file=>{
        let reader=new FileReader();
        reader.onload=function(ev){
            fillTable(this.result,file.name,file.type,file.size);
        }
        reader.readAsDataURL(file);
    })
    setting();
}

function setting(){
    upload.nextElementSibling.value="";
    document.querySelector(".table-dark").classList.remove("d-none");
}

let count=1;
function fillTable(src,title,type,size){
    let tr=`<tr>
                <th scope="row">${count}</th>
                <td>
                    <img src="${src}" height="100" alt="">
                </td>
                <td>${title}</td>
                <td>${type}</td>
                <td>${size}</td>
            </tr>`
    document.querySelector(".table-dark").lastElementChild.innerHTML+=tr;
    count++;
}
