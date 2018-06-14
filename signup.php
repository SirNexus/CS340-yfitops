<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
        <script type="text/javascript" src="formVerify.js"></script>
        <meta charset="UTF-8"> 
    </head>
    <body>
        <div class="header">
            <img class="header-logo" src="yfitops_header.jpg">
            <button type="button" id="header-login" class="m-4 btn btn-primary header-nav">Log in</button>
        </div>    

<?php
//	include "header.php";
//	$msg = "Add new supplier record to the Supplier Table";

// change the value of $dbuser and $dbpass to your username and password
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
<form method = "post" id="signup">
        <div id="signup-container" class="my-5 container">
            <div class="row">
            <div class="col-md-8">
              <section>      
                <h1 class="entry-title"><span>Sign Up</span> </h1>
                <hr>
                <div class="form-group">
                  <label class="control-label col-sm-3">Username <span class="text-danger">*</span></label>
                  <div class="col-md-8 col-sm-9 col-centered">
                      <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                      <input type="username" class="form-control required" name="username" id="username" placeholder="Enter your Username" value="">
                    </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-sm-3">Email ID <span class="text-danger">*</span></label>
                  <div class="col-md-8 col-sm-9 col-centered">
                      <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                      <input type="email" class="form-control required" name="email" id="email" placeholder="Enter your Email ID" value="">
                    </div>
                </div>
                
                <div class="form-group">
                  <label class="control-label col-sm-3">Set Password <span class="text-danger">*</span></label>
                    <div class="input-group col-md-5 col-sm-8 col-centered">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                      <input type="password" class="form-control password-enter required" name="password" id="password" placeholder="Choose password (5-15 chars)" value="">
 
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3">Confirm Password <span class="text-danger">*</span></label>
                  <div class="col-md-5 col-sm-8 col-centered">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                      <input type="password" class="form-control password-enter required" name="cpassword" id="cpassword" placeholder="Confirm your password" value="">
                    </div>  
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3">Full Name <span class="text-danger">*</span></label>
                  <div class="col-md-8 col-sm-9 col-centered">
                    <input type="text" class="form-control required" name="name" id="name" placeholder="Enter your Name here" value="">
                  </div>
                </div>
              </form>
            </div>
        </div>
<input type = "submit" value = "Submit" />
</form>

</body>
</html>
