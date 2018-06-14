<?php
session_start();

$curUser = '-1';
if (isset($_SESSION['curUser'])) {
	$curUser = $_SESSION["curUser"];
}
else {
    echo "<script type=\"text/javascript\">document.location.href=\"logout.php\";</script>";
}

?>

<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://sdk.scdn.co/spotify-player.js"></script>        
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


		
		<input type="text" id="search-input" placeholder="Search...">

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

<div id="dom-target"  style="display: none;" > 
<?php
include 'connectvars.php'; 

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$conn) {
	die('Could not connect: ' . mysql_error());
}

$query = "SELECT s.SongID, s.SongName , s.Album, s.Artist, s.Genre, s.SongURL FROM Song s";


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
	echo "<script>insertSongMainLib()</script>";


	//		echo "<script> insertSong(json_encode($a[0]), 'a thing','another thing' , 'more things')</script>";
}

mysqli_free_result($result);
mysqli_close($conn);
?>
</div>

<div id="playlist-holder"  style="display: none;" > 

<?php
include 'connectvars.php'; 



$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$conn) {
	die('Could not connect: ' . mysql_error());
}

$query = "SELECT P.Title From Playlist P Where P.Username = '$curUser'";


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

	//		echo "<script> insertSong(json_encode($a[0]), 'a thing','another thing' , 'more things')</script>";
}

mysqli_free_result($result);
mysqli_close($conn);
?>
</div>



	<div id="modal-backdrop" class="hidden"></div>
	<div id="create-modal" class="hidden">

	  <div class="modal-info">

		<div class="modal-header">
		  <h3>Adding a song to your profile</h3>
		  <button type="button" class="modal-close-button">&times;</button>
		</div>



<div class="modal-body">
		<div id="signup-container" class="my-5 container">
				<h4 class="entry-title"><span>Chosen Song</span> </h4>
					<div>
						<div class="modal-text">Title: </div>
						<div id="modal-song-title"></div>
					</div>
					<div>
						<div class = "modal-text">Artist: </div>
						<div id="modal-song-artist"></div>
					</div>

			</br>
			</br>
			<div class="row">
			<div class="col-md-8">
			  <section>      
				<h4 class="entry-title"><span>Choose where to add this song</span> </h4>
				


<form method = "POST">

                <div class="form-group">
  <!--                <div class="col-md-8 col-sm-9 col-centered>">
                      <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                      <input type="username" class="form-control" name="username" id="username" placeholder="Enter your Username" value="">
					</div>
-->
					<input id ="modal-song-id" class = "hidden" name="sid_insert"  value=""></div>


			  <select name="song_location" id = "playlist_dropdown">
			   
			</select>
                </div>


			</div>
		</div>


	</div>

		<div class="modal-footer">
		<input type = "submit" value = "Submit" />
		  <button type="button" class="modal-cancel-button">Cancel</button>
		</div>

	  </div>
	</form>
	</div>


<?php
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$conn) {
	die('Could not connect: ' . mysql_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Escape user inputs for security
	$sid = mysqli_real_escape_string($conn, $_POST['sid_insert']);
	$location = mysqli_real_escape_string($conn, $_POST['song_location']);

	if($location == "My Library"){
		$query = "INSERT INTO Owns (Username, SongID) VALUES ('$curUser', '$sid')";
	if(mysqli_query($conn, $query)){
		$msg =  "Record added successfully.<p>";
	} else{
		echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
	}
	}
	else{

		$query = "SELECT P.PlaylistID FROM Playlist P WHERE P.Username = '$curUser' and P.Title='$location'";
		
		

		$response= mysqli_query($conn, $query);
		
		if($row = mysqli_fetch_assoc($response)){
			
			$pid = $row['PlaylistID'];
			
			$query = "INSERT INTO Contains (PlaylistID, SongID) VALUES ('$pid', '$sid')";
			if(mysqli_query($conn, $query)){
				$msg =  "Record added successfully.<p>";
			} else{
				echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
			}
		}
		
	}

	//	}
}
// close connection
mysqli_close($conn);

?>



<script src="./lib.js"></script>
<!--<div class ="sid_insert" name = "sid_insert"></div>-->
	</body>
</html>
