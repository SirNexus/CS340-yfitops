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
            <button type="button" id="header-signup" class="m-4 btn btn-primary header-nav">Sign Up</button>
        </div>    

<?php

// change the value of $dbuser and $dbpass to your username and password
	include 'connectvars.php'; 

	
	function login($username, $password){
		$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
		$sql = "SELECT password FROM Users WHERE username='$username'";
		$r = mysqli_query($conn, $sql);
		if($row = mysqli_fetch_assoc($r)){
		//	$salt = $row['salt'];
		//	$saltSql = "SELECT * FROM Users WHERE username='$username' AND password=MD5('$password$salt')";
		//	$final = mysqli_query($conn , $saltSql);
			
		//	if($finalrow = mysqli_fetch_assoc($final)){
				return true;
			}
	//	}
			return false;
	}
 	
	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Escape user inputs for security
		$username = mysqli_real_escape_string($conn, $_POST['username']);
		$password = mysqli_real_escape_string($conn, $_POST['password']);
	//	$salt = mysqli_real_escape_string($conn, $_POST['password']);
		
		

		if (login($username, $password)) {
		
            header("location:profile.html");
            $msg ="<h2>You have logged in</h2>";
            echo "<script type=\"text/javascript\">document.location.href=\"profile.html\";</script>";
		}else{	
			$msg ="<h2>Wrong username or passwaord</h2>";
		}
		//	echo "$passIn and $saltIn";
		// attempt insert query 
			

}
mysqli_close($conn);

?>

<form method = "post">
		<div id="signup-container" class="my-5 container">
            <div class="row">
            <div class="col-md-8">
              <section>      
                <h1 class="entry-title"><span>Log In</span> </h1>
                <hr>
                    <form class="form-horizontal" method="post" name="signup" id="signup" enctype="multipart/form-data" >        
                <div class="form-group">
                  <label class="control-label col-sm-3">Username/Email <span class="text-danger">*</span></label>
                  <div class="col-md-8 col-sm-9 col-centered">
                      <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                      <input type="username" class="form-control" name="username" id="username" placeholder="Enter your Username" value="">
                    </div>
                </div>
                
                <div class="form-group">
                  <label class="control-label col-sm-3">Password <span class="text-danger">*</span></label>
                    <div class="input-group col-md-5 col-sm-8 col-centered">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                      <input type="password" class="form-control password-enter" name="password" id="password" placeholder="Choose password (5-15 chars)" value="">
 
                  </div>
                </div>
              </form>
            </div>
        </div>
		</div>
<input type = "submit" value = "Submit" />
<h2> <?php echo $msg; ?> </h2>
</form>
</body>
</html>
