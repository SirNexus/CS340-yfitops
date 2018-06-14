
$(document).ready(function(){
    $("#home-signup").click(function(){
        window.location.href = "./signup.php";
    });

    $("#home-login").click(function(){
        window.location.href = "./login.php";
    });

    $(".header-logo").click(function(){
        window.location.href = "./library.php";
    });

    $("#header-signup").click(function(){
        window.location.href = "./signup.php";
    });

    $("#header-login").click(function(){
        window.location.href = "./login.php";
    });

    $("#playlists-btn").click(function(){
        window.location.href = "./playlists.php";
    });

    $("#songs-btn").click(function(){
        window.location.href = "./profile_library.php";
    });
    
    $("#friends-btn").click(function(){
        window.location.href = "./friends.php";
    });

    $("#discover-btn").click(function(){
        window.location.href = "./discover.php";
    });

    $("#header-profile").click(function(){
        window.location.href = "./profile.php";
    });

    $("#header-logout").click(function(){
        window.location.href = "./index.html";
    });

    $(".playlist").click(function(){
        console.log($(this));
    })

 /*   $(".song").click(function(){
        console.log($(this));
    });
   */ 
	

});






function delegatedLibListener (event){
	console.log("here");
	var cur = event.target;
	
	if(cur.classList.contains("lib_button")){
	document.getElementById("modal-backdrop").classList.remove("hidden");
	document.getElementById("create-modal").classList.remove("hidden");
	
	var playlist_info = document.getElementById("playlist-holder");
	var data = playlist_info.textContent;
	var array = data.split(",");
	
	
/*	var all_artists = document.querySelectorAll('.song-title');

  while (currElem.getAttribute('id') !== 'box-container') {
    if (currElem.classList.contains('box')) {

			console.log(num);
	for(var i = 0; i< num.length; i++){
		if(num[i].classList.contains("highlighted")){
			num[i].classList.remove("highlighted");
		}
	}
      currElem.classList.toggle('highlighted');
      break;
    }
    currElem = currElem.parentNode;
  }

*/

	var mySongName;
	var myArtistName;
	var myId;
	for(var i = 0; i < cur.parentNode.childNodes.length; i++){
		
		if(cur.parentNode.childNodes[i].classList.contains("song-title")){
			mySongName = cur.parentNode.childNodes[i].innerHTML;
		}
		if(cur.parentNode.childNodes[i].classList.contains("song-artist")){
			myArtistName = cur.parentNode.childNodes[i].innerHTML;
		}
		if(cur.parentNode.childNodes[i].classList.contains("hidden")){
			myId = cur.parentNode.childNodes[i].innerHTML;
		}

	}
	var temp =document.getElementById("modal-song-title") ;
	temp.innerHTML = mySongName;
	var temp =document.getElementById("modal-song-artist") ;
	temp.innerHTML = myArtistName;
	var temp =document.getElementById("modal-song-id") ;
	temp.setAttribute("value",myId);



	var drop = document.getElementById("playlist_dropdown");
		var option = document.createElement("option");
		option.setAttribute("value","My Library");
		option.innerHTML="My Library";
		drop.appendChild(option);
	for(var i= 0; i < array.length; i++){

		array[i] = array[i].replace(/(\r\n\t|\n|\r\t)/gm ,"");
		array[i] = array[i].trim();
		//		array[i] =array[i].replace("/\r?\n|\r/" ,"");
			

		console.log(array[i]);
		var option = document.createElement("option");
		option.setAttribute("value",array[i]);
		option.innerHTML=array[i];
		drop.appendChild(option);
	
	}

	
	}
}

function insertSongMainLib() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var sid = array[0]
	var title = array[1];
	var album = array[2];
	var artist = array[3];
	var genre = array[4].substring(0,array[4].indexOf("insert"));

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
    attribute.classList.add("song-genre");
    attribute.innerHTML = genre;
    node.appendChild(attribute);

/*
	my_form = document.createElement('form');
//	my_form.setAttribute("action", "/");
	my_form.setAttribute("method", "POST");
	node.appendChild(my_form);
*/

	button_dude = document.createElement('button');
//	button_dude.setAttribute("name","sid_insert");
//	button_dude.setAttribute("value",sid);
	button_dude.classList.add("lib_button");
	button_dude.classList.add("btn");
	button_dude.classList.add("btn-primary");
	button_dude.classList.add("plus-button");
	button_dude.innerHTML="+";
	node.appendChild(button_dude)
	
/*	plus = document.createElement('span');
	plus.innerHTML = "&#43;";
	plus.classList.add("plus-button");
	button_dude.appendChild(plus);
*/
	attribute = document.createElement('div');
	attribute.classList.add("hidden");
	attribute.innerHTML = sid;
	node.appendChild(attribute);
//	node.appendChild(attribute);

	div.innerHTML = "";
    
	lastSong.append(node);

}
function insertArtistProfile() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var artist_name = array[0];
	var image_url = array[1].substring(0,array[1].indexOf("insert"));

	var elem = document.getElementById('artists-container');

    var node = document.createElement('div');
	node.classList.add("m-4");
    node.classList.add("artistBox");
    
	var circle = document.createElement('div');
	circle.classList.add("artist");
	node.appendChild(circle);

	var img = document.createElement('IMG');
	img.setAttribute("src", image_url);
	img.classList.add("artistImg");
	circle.appendChild(img);

	var text = document.createElement('div');
	text.innerHTML = artist_name;
	node.appendChild(text);

	div.innerHTML = "";
    
	elem.append(node);


}
function insertPlaylist() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var playlist = array[0];
	var playlist = array[0].substring(0,array[0].indexOf("insert"));

	var elem = document.getElementById('playlist-container');

    var node = document.createElement('div');
    node.classList.add("playlist");
    node.classList.add("m-4");
    node.classList.add("box");
    node.innerHTML = playlist;

	div.innerHTML = "";
    
	elem.append(node);

}

function insertFriend() {
	console.log("here");
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var friend = array[0];
	var friend = array[0].substring(0,array[0].indexOf("insert"));
	console.log(friend);

	var elem = document.getElementById('friends-container');
//  var lastSong = $('#songs-container').children().last();
//	console.log(lastSong);


    var node = document.createElement('div');
    node.classList.add("artist");
    node.classList.add("m-4");
    node.classList.add("box");
    node.innerHTML = friend;

	div.innerHTML = "";
    
	elem.append(node);

}


function insertSong() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;
	var array = myData.split(",");

	var title = array[0];
	var album = array[1];
	var artist = array[2];
    var genre = array[3]
    var songURL = array[4].substring(0,array[4].indexOf("insert"));

	var lastSong = document.getElementById('songs-container');

    var node = document.createElement('div');
    node.classList.add('song')

    var attribute = document.createElement('div');
    attribute.classList.add("song-title");
    attribute.setAttribute("data-uri", songURL);
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
    attribute.classList.add("song-genre");
    attribute.innerHTML = genre;
    node.appendChild(attribute);

	div.innerHTML = "";
    
    lastSong.append(node);
}

function playSong(URI) {
    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/play',
        type: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + 'BQDsyLQo_cC6NsEzQ4LSYPJLvac_dqLHL3v0mndgJksQwb9BxARxUYyk7haOL8CkZjDIxAdbRTwWZjP9OK4gRqD24Gnkv1sbar_yzmy9rFt_AN7dHpMghxTDH-MIfucP0T2S-jXsQMGc3UjhIrRH3A3Ydtia2a7IngQPZA'
        },
        data: JSON.stringify({"uris": [URI]}),
        contentType: "application/json",
        dataType: "json",
        processData: false,
        success: function(response) {
            console.log("Success:" + response)
        },
        error: function(error) {
            console.log("Error:")
            console.dir(error)
        }
    });
};
