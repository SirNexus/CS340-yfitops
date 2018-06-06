
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

    $(".song").click(function(){
        playSong($(this).children(":first").attr("data-uri"));
        $('#play-song').attr('class', 'show-player');
        $("#play-btn").attr("src", "pause.jpeg");
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
});

var token = 'BQDCIlLZHviq5anX-deA7Be_SIpGPpWFgM16Kcc4lmgQ0F_2XtM0d8Q4gN_nuIYfb_srnzfEqbRjV68HD3fImml-Ry31nAE7qQ6KZzdDFszV0wIPkxIRJCrQ1n8w3WH5_BGN2L1tPZgIQK1aIivPpmMtGzJCkjxh7M0prA'


function insertSongMainLib() {
    var div = document.getElementById("dom-target");
	var myData = div.textContent;

	var array = myData.split(",");
	console.log(array);

	var title = array[0];
	var album = array[1];
	var artist = array[2];
	var genre = array[3]
  var songURL = array[4].substring(0,array[4].indexOf("insert"));
  
	var lastSong = document.getElementById('songs-container');
//    var lastSong = $('#songs-container').children().last();
//	console.log(lastSong);

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
            'Authorization': 'Bearer ' + token
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

function pauseSong(URI) {
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