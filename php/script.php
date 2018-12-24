<?php 
$servername = "localhost";
$username = "root";
$password = "qwerty";
$dbname = "webpage";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "SELECT ID , first_text FROM project_text";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  $row["ID"]. "                 ".$row["first_text"];
        //echo $row;
    }
} else {
    echo "0 results";
}
$conn->close();
/*
  $output = "TROOLRROTRKTOERKPTKERPKTRK";
  echo $output;*/
?>