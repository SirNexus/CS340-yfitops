
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
        console.log($(this));
    })
});


function insertArtistProfile() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var artist_name = array[0];
	var image_url = array[1].substring(0,array[1].indexOf("insert"));

	var elem = document.getElementById('artists-container');
//  var lastSong = $('#songs-container').children().last();
//	console.log(lastSong);


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
//  var lastSong = $('#songs-container').children().last();
//	console.log(lastSong);


    var node = document.createElement('div');
    node.classList.add("playlist");
    node.classList.add("m-4");
    node.classList.add("box");
    node.innerHTML = playlist;

	div.innerHTML = "";
    
	elem.append(node);

}

	
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQAHdQtOc-YvNTrT8YvyXuRjt_JjZBKhhtu0MDxlktb_Jhu4GVMW68-tcEgGR3wAuu7yhI9TyGxYwGbVRENPAKEMV1_G84SX9OdcQUa6e64dAN9KDhfOHK3bV2xbs_EvirBKq09cZBLHcbKNzzt_8u7MASK0MtW4Ibe4lA';
    const player = new Spotify.Player({
      name: 'Float On',
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
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();

    // $.ajax({
    //     url: 'https://api.spotify.com/v1/tracks/2lwwrWVKdf3LR9lbbhnr6R',
    //     headers: {
    //         'Authorization': 'Bearer ' + token
    //     },
    //     success: function(response) {
    //         console.dir(response);
    //     }
    // });

    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/play',
        type: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify({"uris": ["spotify:track:2lwwrWVKdf3LR9lbbhnr6R"]}),
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
  

function insertSong() {
	console.log("here");
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var title = array[0];
	var album = array[1];
	var artist = array[2];
	var genre = array[3].substring(0,array[3].indexOf("insert"));

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

	div.innerHTML = "";
    
	lastSong.append(node);

}
