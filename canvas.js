let myImage = document.getElementById("myImage");
let myButtonAdd = document.getElementById("myButtonAdd");
let myButtonChange = document.getElementById("myButtonChange");
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
myButtonChange.addEventListener("click", changeImage,true);
myButtonAdd.addEventListener("click", addFilter,true);


//when page loads make canvas size the same as the image size
myImage.onload = function() {
    myCanvas.width = myImage.width;
   myCanvas.height = myImage.height;
    ctx.drawImage(myImage, 0, 0, myCanvas.width, myCanvas.height);
}; 
