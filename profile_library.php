<?php
session_start();
$curUser = '-1';
if (isset($_SESSION['curUser'])) {
	$curUser = $_SESSION["curUser"];
}
		
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
            <div class="container header-text text-center">Profile</div>
            <button type="button" id="header-profile" class="m-4 btn btn-primary header-nav">Profile</button>
            <button type="button" id="header-logout" class="my-4 mx-1 btn btn-primary header-nav">Log Out</button>
        </div>

        <div class="left-header">
            <button type="button" id="discover-btn" class="m-4 btn btn-primary header-btn">Discover</button>
            <button type="button" id="playlists-btn" class="m-4 btn btn-primary header-btn">Playlists</button>
            <button type="button" id="songs-btn" class="m-4 btn btn-primary header-btn">Songs</button>
            <button type="button" id="friends-btn" class="m-4 btn btn-primary header-btn">Friends</button>
        </div>

        <div class="my-3 container profile-text text-center">
            Your Songs
        </div>

        <div id="songs-container" class="d-flex container main-container box">
            <div id="song-header">
                <div class="song-title">Title</div>
                <div class="song-artist">Artist</div>
                <div class="song-album">Album</div>
                <div class="song-genre">Genre</div>
            </div>
        </div>

        <div id="play-song" class="hide-player">
            <div id="player-title">Test Title</div>
            <img id="play-btn" class="play-btn" src="pause.jpeg">
            <img id="exit-player-btn" src="exit.png">
            <div id="player-artist">Test Album</div>
        </div>
    </body>




<div id="dom-target"  style="display: none;" > 
<?php
	include 'connectvars.php'; 

	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}

		
	$query = "SELECT S.SongName, S.Album, S.Artist, S.Genre, S.SongURL FROM Song S, Owns O WHERE O.SongID = S.SongID and O.Username = '$curUser'";

	$result = mysqli_query($conn, $query);
	
	if (!$result) {
		die("Query to show fields from table failed");
	}
	
// get number of columns in table	
	$fields_num = mysqli_num_fields($result);
	
	while($row = mysqli_fetch_row($result)) {
		$a = array();	
		foreach($row as $cell)		
			array_push($a, $cell);

		$cs = implode("," , $a);
		echo htmlspecialchars($cs); 
		echo "<script>insertSong()</script>";
		

	}

	mysqli_free_result($result);
	mysqli_close($conn);
?>


</div>


</html>
