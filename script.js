
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
        window.location.href = "./profile_library.html";
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