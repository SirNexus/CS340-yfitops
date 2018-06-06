
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
        window.location.href = "./discover.html";
    });

    $("#header-profile").click(function(){
        window.location.href = "./profile.php";
    });

    $("#header-logout").click(function(){
        window.location.href = "./index.html";
    });
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
