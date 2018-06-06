
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
