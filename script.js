
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

    $(".song").click(function(){
        console.log($(this));
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
