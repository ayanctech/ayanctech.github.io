function signup(){

	if (document.getElementById("pass1").value != document.getElementById("pass2").value){
		alert("Please Re-Check your typed passwords!!");
		return false;
	}
	else{
		return true;
	}
		
		
	}