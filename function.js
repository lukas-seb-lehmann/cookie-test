
window.onload=checkcookie();


function starttracking(){
	
	alert("Hello! I am an alert box!!");
	
	!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '589544735010993');
  fbq('track', 'PageView');
}

 


 function checkcookie() {
	 if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{
	  
	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	starttracking();
  }
 }

function funzustimmen(){
	document.cookie = "name=nocookie";
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
	starttracking();

	
	
}

function funanpassen(){
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
}

function deletecookie(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
 