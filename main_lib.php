
<?php
if($_POST['action'] == 'call_this'){

	include 'connectvars.php'; 
	
	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Escape user inputs for security
		$username = mysqli_real_escape_string($conn, $_POST['username']);
		$name = mysqli_real_escape_string($conn, $_POST['name']);
		$password = mysqli_real_escape_string($conn, $_POST['password']);
	    $email = mysqli_real_escape_string($conn, $_POST['email']);
		// See if sid is already in the table
		//
		$queryIn = "SELECT * FROM Users where username='$username' ";
		$resultIn = mysqli_query($conn, $queryIn);
		if (mysqli_num_rows($resultIn)> 0) {
			$msg ="<h2>Can't Add to Table</h2> There is already a user with username $username<p>";
		} else {
		
		// attempt insert query 
			$query = "INSERT INTO Users (username, name, email, password) VALUES ('$username', '$name', '$email', '$password')";
			if(mysqli_query($conn, $query)){
				$msg =  "Record added successfully.<p>";
			} else{
				echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
			}
		}
}
// close connection
mysqli_close($conn);


?>
}
