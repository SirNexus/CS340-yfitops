<?php
session_start();
echo "Session username is:" . $_SESSION['curUser'];

?>

<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
        <meta charset="UTF-8"> 
    </head>
    <body>
        <div class="header">
            <img class="header-logo" src="yfitops_header.jpg">
            <div class="container header-text text-center">Library</div>
            <button type="button" id="header-profile" class="m-4 btn btn-primary">Profile</button>
            <button type="button" id="header-logout" class="my-4 mx-1 btn btn-primary">Log Out</button>
        </div>

        <div class="left-header">
            <button type="button" id="discover-btn" class="m-4 btn btn-primary header-btn">Discover</button>
            <button type="button" id="playlists-btn" class="m-4 btn btn-primary header-btn">Playlists</button>
            <button type="button" id="songs-btn" class="m-4 btn btn-primary header-btn">Songs</button>
            <button type="button" id="friends-btn" class="m-4 btn btn-primary header-btn">Friends</button>
        </div>

        <div id="songs-container" class="d-flex container main-container box">
            <div class="song">
                <div class="song-title">Test title</div>
                <div class="song-artist">Test artist</div>
                <div class="song-album">Test album</div>
                <div class="song-genre">Test genre</div>
            </div>
            <div class="song">
                <div class="song-title">Test title</div>
                <div class="song-artist">Test artist</div>
                <div class="song-album">Test album</div>
                <div class="song-genre">Test genre</div>
            </div>
            <div class="song">
                <div class="song-title">Test title</div>
                <div class="song-artist">Test artist</div>
                <div class="song-album">Test album</div>
                <div class="song-genre">Test genre</div>
            </div>
        </div>
    </body>
</html>