
var exit = document.querySelector(".modal-cancel-button");
exit.addEventListener('click', function(){
//	document.getElementById("twit-text-input").value = "";
//	document.getElementById("twit-attribution-input").value = "";
	console.log("doing it");	
	document.getElementById("modal-backdrop").classList.add("hidden");
	document.getElementById("create-modal").classList.add("hidden");
	var node = document.getElementById("playlist_dropdown");
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}

})

var exit = document.querySelector(".modal-close-button");
exit.addEventListener('click', function(){
//	document.getElementById("twit-text-input").value = "";
//	document.getElementById("twit-attribution-input").value = "";
		
	document.getElementById("modal-backdrop").classList.add("hidden");
	document.getElementById("create-modal").classList.add("hidden");
	var node = document.getElementById("playlist_dropdown");
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}

})


var songSearch = document.getElementById("search-input");
var searchv;
var songEntries;

songSearch.addEventListener('input', function(){
	console.log("here");
	searchv = songSearch.value;
	songEntries = document.querySelectorAll(".hidden_song");
	for(var i = 0; i< songEntries.length; i++){
		songEntries[i].classList.remove("hidden", "hidden_song");
	//	songEntries = document.getElementsByClassName("hidden_songEntries");
	}
	
	//console.log(searchv);
	
	songEntries = document.getElementsByClassName("song");
	//console.log(searchv);
	for(var i = 0; i < songEntries.length; i++){
		var lowercontent = songEntries[i].textContent.toLowerCase();

		if(lowercontent.search(searchv.toLowerCase())== -1){
		//	console.log(songEntriess[0].textContent.search(searchv));
			songEntries[i].classList.add("hidden");
			songEntries[i].classList.add("hidden_song");
		}
	
	}
	
})

var songContainer = document.getElementById("songs-container");
console.log(songContainer);
songContainer.addEventListener('click', delegatedLibListener);
