let img = document.getElementById("mainpic")


function swapImage() {
  	if(img.src == "https://image.ibb.co/i2c5Cx/getsmart.png") {
	img.src="https://image.ibb.co/bDP2sx/mainpaper1.png";  
  } else { img.src = "https://image.ibb.co/i2c5Cx/getsmart.png";
    }
}

let el = document.querySelector(".swaping");
el.addEventListener ("click",function(){
	swapImage()
})





//"file:///Users/nycda/Desktop/WDF/Projects/1%20Project/getsmart.png"