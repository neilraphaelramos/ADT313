<h1> Condition</h1>

<?php
    $age = 29;
    if ($age >= 18) {
        echo "Legal Age";
    } else if($age >= 0 && $age <= 10) {
        echo "something";
    }else {
        echo "minor";
    }


    //short-hand if condition
    //(condition) ? true condition : else condition 

    $agelabel = ($age >= 18) ? '18+' : '17-';
    echo $agelabel;

    //DON'Ts
    /*
    if($role == 'admin') {
        //logic
    }

    if($role == 'student') {
        //logic
    }

    if($role == 'teacher') {
        //logic
    }
    */
    $role = 'student';
    switch($role) {
        case 'admin':
            #code...
            echo 'you are full control';
            break;
        case 'student':
            #code...
            echo 'you can only access';
            break;
        case 'instructor':
            #code...
            echo 'you are limited access';
            break;
        default case:
            #code...
            echo 'who are you?';
            break;
    }

?>