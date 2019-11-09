<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {


    $day = $_POST["day"];
    $is_class = $_POST["is_class"];
    $course_id = $_POST["course_id"];
    $location = $_POST["location"];
    $isDL = $_POST["isDL"];
    $userid = $_POST['userId'];
    $dlid = $_POST['dlId'];
    $start = $_POST["start"];
    $end = $_POST["end"];

    //if all set
    // if (isset($startStr) && $startStr !== "" && isset($endStr) && $endStr !== "") {

    $query1 = "INSERT INTO STUDENT_UNAVAILABILITY ( STD_USER_ID, STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION,STD_IS_CLASS, STD_COURSEID, IS_DL ) VALUES (?,?,?,?,?,?,?,?)";
    $stmt1 = $mysqli->prepare($query1);
    $stmt1->execute([$userid, $start, $end, $day, $location, $is_class, $course_id, $isDL]);
    if ($stmt1) {

        $query2 = "UPDATE DLCLASSES SET IS_ASSIGNED = ? WHERE DL_CLASS_ID=?";
        $stmt2 = $mysqli->prepare($query2);
        $stmt2->execute([1, $dlid]);
        ?>

        {
        "success": true,
        "message": "Added DL class to student schedule"
        }
    <?php
        } else {
            ?>
        {
        "success": false,
        "message": "Could not add DL class to student schedule"
        }
    <?php
        }
    } else {
        ?>
    {
    "success": false,
    "message": "Post is empty/ data not passed to backend"
    }
<?php
}

$stmt->NULL;
dbConnect::dbDisconnect();
?>