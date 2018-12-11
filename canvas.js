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

//change image and resizes canvas to that image
function changeImage(){
    
  let myRandom=Math.floor(Math.random() * 9) + 1;
myImage.src="images/" + myRandom + ".jpg";
myImage.onload = function() {
    myCanvas.width = myImage.width;
   myCanvas.height = myImage.height;
    ctx.drawImage(myImage, 0, 0, myCanvas.width, myCanvas.height);
};  
    
}


function addFilter(){

  // Read each pixel out of canvas
  // Array representing, r then g then b values for each pixel
  let imageData = ctx.getImageData(0, 0, myCanvas.width, myCanvas.height);
  let dataArray = imageData.data;

  
  // Loop over each pixel
  const l = dataArray.length;
  for(let i = 0; i < l ; i += 4){
       let brightness = 0.34 * dataArray[i] + 0.5 * dataArray[i + 1] + 0.16 * dataArray[i + 2];
          // red
          dataArray[i] = brightness;
          // green
          dataArray[i + 1] = brightness;
          // blue
          dataArray[i + 2] = brightness;
        }

   

      // Write the data back to canvas
  ctx.putImageData(imageData, 0 , 0);
}

