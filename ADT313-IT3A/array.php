<h1> Arrays </h1>

<?php
    $car = array("BMW", "FORD", "TOYOTA") ;
    echo $car[0];

    print_r($car);
    echo"<br/> <h2>Var Dump </h2>";
    var_dump($car);
    echo"<br/> <h2>Var Dump </h2>";

    echo $car[2];

    echo"<br/> <h1>Push Dump </h1>";
    $car[] = "LEXUS";
    print_r($car);

    echo $car[3];

    $user = array(
        "firstname" => "Neil Raphael",
        "lastname" => "Ramos",
        21
    );

    echo $user['firstname'];

    $information = array(
        "user"=> array(
            "firstname" => "Neil Raphael",
            "middlename" => "Magdales",
            "lastname" => "Ramos",
            "class" => array(
                "section" => "3a",
                "course" => "BSIT"
            )
        ),
        "address" => array(
            "province" => "Bulacan",
            "municipality" => "Marilao",
            "street" => "12 Lamp ST."
        )
        );

    echo $information['user']['middlename'];
?>