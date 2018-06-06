
$(document).ready(function(){
    $("#home-signup").click(function(){
        window.location.href = "./signup.php";
    });

    $("#home-login").click(function(){
        window.location.href = "./login.php";
    });

    $(".header-logo").click(function(){
        window.location.href = "./index.html";
    });

    $("#header-signup").click(function(){
        window.location.href = "./signup.php";
    });

    $("#header-login").click(function(){
        window.location.href = "./login.php";
    });

    $("#playlists-btn").click(function(){
        window.location.href = "./playlists.html";
    });

    $("#songs-btn").click(function(){
        window.location.href = "./profile_library.php";
    });
    
    $("#friends-btn").click(function(){
        window.location.href = "./friends.html";
    });

    $("#discover-btn").click(function(){
        window.location.href = "./discover.html";
    });

    $("#header-profile").click(function(){
        window.location.href = "./profile.html";
    });

    $("#header-logout").click(function(){
        window.location.href = "./index.html";
    });
});



//the main function must occur after the page is loaded, hence being inside the wondow.onload event handler.
window.onload = function(){
    var myForm = document.getElementById("signup");

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

function insertSong() {
	console.log("here");
    var div = document.getElementById("dom-target");
	var myData = div.textContent;
	


	var array = myData.split(",");
	console.log(array);

	var title = array[0];
	var album = array[1];
	var artist = array[2];
	var genre = array[3];

	var lastSong = document.getElementById('songs-container');
//    var lastSong = $('#songs-container').children().last();
//	console.log(lastSong);

    var node = document.createElement('div');
    node.classList.add('song')

    var attribute = document.createElement('div');
    attribute.classList.add("song-title");
    attribute.innerHTML = title;
    node.appendChild(attribute);

    attribute = document.createElement('div');
    attribute.classList.add("song-artist");
    attribute.innerHTML = artist;
    node.appendChild(attribute);

    attribute = document.createElement('div');
    attribute.classList.add("song-album");
    attribute.innerHTML = album;
    node.appendChild(attribute);

    attribute = document.createElement('div');
    attribute.classList.add("song-artist");
    attribute.innerHTML = artist;
    node.appendChild(attribute);

	div.innerHTML = "";
    
	lastSong.append(node);

}

//-------------------- Error Checking ---------------------------------------

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


