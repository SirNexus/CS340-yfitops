
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
});
  
function insertSong(title, artist, album, genre) {
    var lastSong = $('#songs-container').children().last();

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

    lastSong.append(node);
}