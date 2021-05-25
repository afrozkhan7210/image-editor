const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = "";
const UploadBtn = document.getElementById('upload-file');


UploadBtn.addEventListener('change' ,()=>{
const file = document.getElementById('upload-file').files[0];

const reader = new FileReader();

if(file){
    fileName = file.name;
    reader.readAsDataURL(file);
}

reader.addEventListener('load',() => {
    img = new Image();
    img.src = reader.result;

    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,img.width,img.height);
        canvas.removeAttribute('data-caman-id');
    }
},false)
})