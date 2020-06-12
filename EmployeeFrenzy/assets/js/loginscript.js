document.getElementById('form_id').action = "login.html";
function signup(){

	if (document.getElementById("pass1").value != document.getElementById("pass2").value){
		alert("Please Re-Check your typed passwords!!");
		return false;
	}
	else{
		//window.location="login.html";
		return true;
	}
		
		
	}