
// The event handler function to compute the total cost
//function to determine if a field is blank
var pswd;

function checkPassword(){
    
	password = document.getElementById('password');
	
	var  re = /[0-9]/;
    if( ! re.test(password.value)) {
		alert("Password must contain at least one digit");
		return false;
    }
	re = /[A-Z]/;
    if( ! re.test(password.value)) {
		alert("Password must contain at least one uppercase letter");
		return false;
    }	
	re = /[a-z]/;
    if( ! re.test(password.value)) {
		alert("Password must contain at least one lowercase letter");
		return false;
    }
	if( password.value.length < 6) {
		alert("Password must have at least 6 characters");
		return false;
    }	
	if( password.value.length > 20){
		alert("Password must have less than 20 characters");
		return false;
	}
	
}

function isBlank(inputField){
    if(inputField.type=="checkbox"){
		if(inputField.checked)
			return false;
		return true;
    }
    if (inputField.value==""){
		return true;
    }
    return false;
}

//function to highlight an error through colour by adding css attributes tot he div passed in
function makeRed(inputDiv){
   	inputDiv.style.backgroundColor="#AA0000";
	inputDiv.parentNode.style.color="#FFFFFF";		
}

//remove all error styles from the div passed in
function makeClean(inputDiv){
	inputDiv.parentNode.style.backgroundColor="#FFFFFF";
	inputDiv.parentNode.style.color="#000000";		
}

//the main function must occur after the page is loaded, hence being inside the wondow.onload event handler.
window.onload = function(){
    var myForm = document.getElementById("addForm");

    //all inputs with the class required are looped through 
    var requiredInputs = document.querySelectorAll(".required");
    for (var i=0; i < requiredInputs.length; i++){
		requiredInputs[i].onfocus = function(){
			this.style.backgroundColor = "#EEEE00";
		}
    }

    //on submitting the form, "empty" checks are performed on required inputs.
    myForm.onsubmit = function(e){
	
		var password = document.getElementById('password');
		if (checkPassword() == false){
			e.preventDefault();
			makeRed(password);
		}

		if(password.value.length > 20){
			e.preventDefault();
			makeRed(password);
		}

		var requiredInputs = document.querySelectorAll(".required");
		for (var i=0; i < requiredInputs.length; i++){
			if( isBlank(requiredInputs[i]) ){
				e.preventDefault();
				makeRed(requiredInputs[i]);
			}
		}
			
	}   
}
