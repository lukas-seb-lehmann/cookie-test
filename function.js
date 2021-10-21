
window.onload=checkcookie();




 


 function checkcookie() {
	 if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{
	  
	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
  }
 }

function funzustimmen(){
	document.cookie = "name=nocookie";
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
}


 