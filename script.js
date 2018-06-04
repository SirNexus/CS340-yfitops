
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
