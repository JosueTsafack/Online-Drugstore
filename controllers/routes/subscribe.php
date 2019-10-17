<?php
require '../../api/Slim/config.php';
/* Slim is a PHP micro framework that helps you quickly write simple 
yet powerful web applications and APIs.*/
require '../../api/Slim/Slim.php';  

\api\Slim\Slim::registerAutoloader();
$app = new \api\Slim\Slim();

$app->post('/api/users/subscribe','subscribe'); /* User subscribtion */

$app->run();

/************************* USER SUBSCRIBTION ***************************/

/* ### User subscribtion ### */
function subscribe() {
   print_r('POST Request received!');
   echo('i did it!!!!!!!!!!!!!!!!!!');
   $request = \api\Slim\Slim::getInstance()->request();   
   $data = json_decode($request->getBody());
   $email=$data->email;
   $name=$data->name;
   $username=$data->username;
   $password=$data->password;
   try {
       $username_check = preg_match('~^[A-Za-z0-9_]{3,20}$~i', $username);
       $email_check = preg_match('~^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$~i', $email);
      $password_check = preg_match('~^[A-Za-z0-9!@#$%^&*()_]{6,20}$~i', $password);
     
    if (strlen(trim($username))>0 && strlen(trim($password))>0 && strlen(trim($email))>0 && $email_check>0 && $username_check>0 && $password_check>0)
   {
    $db = getDB();
    $userData = '';
    $sql = "SELECT user_id FROM users WHERE username=:username or email=:email";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("username", $username,PDO::PARAM_STR);
    $stmt->bindParam("email", $email,PDO::PARAM_STR);
    $stmt->execute();
   $mainCount=$stmt->rowCount();
   $created=time();
   if($mainCount==0)
  {
    /*Inserting user values*/
     $sql1="INSERT INTO users(username,password,email,name)VALUES(:username,:password,:email,:name)";
      $stmt1 = $db->prepare($sql1);
      $stmt1->bindParam("username", $username,PDO::PARAM_STR);
      $password=hash('sha256',$data->password);
      $stmt1->bindParam("password", $password,PDO::PARAM_STR);
      $stmt1->bindParam("email", $email,PDO::PARAM_STR);
      $stmt1->bindParam("name", $name,PDO::PARAM_STR);
      $stmt1->execute();
      $userData=internalUserDetails($email);
      }
      $db = null;

if($userData){
      $userData = json_encode($userData);
      echo '{"userData": ' .$userData . '}';
} else {
      echo '{"error":{"text":"Enter valid data"}}';
}

}
else{
      echo '{"error":{"text":"Enter valid data"}}';
}
}
catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}';
}
}
?>