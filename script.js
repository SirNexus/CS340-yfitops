
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
        window.location.href = "./logout.php";
    });

    $(".playlist").click(function(){
        window.location.href = "./single_playlist.php?playlist=" +  $(this).text().trim();
    })

    $(".friend").click(function(){
        window.location.href = "./view_friend.php?friend=" +  $(this).text().trim();
    })

    $(".song").click(function(){
        playSong($(this).children(":first").attr("data-uri"));
        $('#play-song').attr('class', 'show-player');
        $("#play-btn").attr("src", "pause.jpeg");
        $("#player-title").text($(this).children(":first").text());
        $("#player-artist").text($(this).children().eq(1).text());
    });

    $("#exit-player-btn").click(function(){
        $('#play-song').addClass('hide-player');
        if ($('#play-btn').attr("src") === "pause.jpeg"){
            $('#play-btn').attr("src", "play.png");
            pauseSong();
        }
    });

    $("#play-btn").click(function(){
        if ($(this).attr("src") === "pause.jpeg"){
            $(this).attr("src", "play.png");
            pauseSong();
        }
        else if ($(this).attr("src") === "play.png"){
            $(this).attr("src", "pause.jpeg");
            resumeSong();
        }
    });

    randomizeColors(".friend");
    randomizeColors(".playlist");
});

var token = 'BQDwMTNzWh21882lYHWoAJMwbr6HBBKED-MJrC_tPeeX6ph_h6gtO0-CCBn7RQ2wKcLdehy05XRq1CB78djkK-2jcu4LIAdZ8J7cQzmvNoN8Vm9dDI7eHsFW-TzTnPccdJ8zM7t0kaLgIATqw4XiDxl_rt63nkhlxvjPlw'
var play_device_id;
var device_ready = false;
var wait_song_uri = "";

window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      play_device_id = device_id;
      device_ready = true;
      if (wait_song_uri != ""){
          playSong(wait_song_uri);
      }
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };

function insertSongDiscover() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");

	var title = array[0];
	var album = array[2];
	var artist = array[1];
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

	var sid = array[0]
	var title = array[1];
	var album = array[2];
	var artist = array[3];
	var genre = array[4]
  var songURL = array[5].substring(0,array[5].indexOf("insert"));

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
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");

	var friend = array[0];
	var friend = array[0].substring(0,array[0].indexOf("insert"));

	var elem = document.getElementById('friends-container');

    var node = document.createElement('div');
    node.classList.add("friend");
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

function playSong(uri) {

    if (!device_ready){
        wait_song_uri = uri;

        return;
    }

    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/play',
        type: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify({"uris": [uri]}),
        contentType: "application/json",
        dataType: "json",
        processData: false,
        success: function(response) {
            console.log("Success:" + response)
        },
        error: function(error) {
            if (error["responseText"].includes("No active device found")){
                $.ajax({
                    url: 'https://api.spotify.com/v1/me/player',
                    type: 'PUT',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    data: JSON.stringify({"device_ids": [play_device_id]}),
                    contentType: "application/json",
                    dataType: "json",
                    processData: false,
                    success: function(response) {
                        console.log("Success:" + response)
                        playSong(uri)
                    },
                    error: function(error) {
                        console.log("Error:")
                        console.dir(error)
                    }
                });
            }
            else console.dir(error);
        }
    });
};

function pauseSong(uri) {
    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/pause',
        type: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token
        },
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
}

function resumeSong() {
    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/play',
        type: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token
        },
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

function randomizeColors(element) {
    var colors = ['yellow', 'orange', 'pink', 'rgb(114, 114, 250)', 'rgb(1, 214, 1)'];
    $(element).each(function(){
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        $(this).attr("style", "background-color: " + random_color);
        var index = colors.indexOf(random_color);
        colors.splice(index, 1);
        if (colors == null){
            colors = ['yellow', 'orange', 'gray', 'pink', 'green'];
        }
    });
}
