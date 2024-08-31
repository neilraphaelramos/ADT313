<h1> Hands-on Activity </h1>

<?php
    $table = array(
        "header" => array(
            "StudentID",
            "Firtsname",
            "Middlename",
            "Lastname",
            "Section",
            "Courses",
            "Yearlevel"
        ),
        "body" => array(
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            ),
            array(
                "Firtsname" => "Neil Raphael",
                "Middlename" => "Magdales",
                "Lastname" => "Ramos",
                "Section" => "3A",
                "Courses" => "BSIT",
                "Yearlevel" => "3rd Year"
            )
        )
    );
?>

<table border="1">
    <thead> 
        <th>StudentID</th>
        <th>Firstname</th>
        <th>Middlename</th>
        <th>Lastname</th>
        <th>Section</th>
        <th>Course</th>
        <th>Year Level</th>
    </thead>
    <tbody>
        <?php
            $i = 0;
            foreach($table['body'] as $body){
        ?>       
        <tr>
            <td><?php Echo $i;?></td>
            <td><?php Echo $body['Firtsname'];?></td>
            <td><?php Echo $body['Middlename'];?></td>
            <td><?php Echo $body['Lastname'];?></td>
            <td><?php Echo $body['Section'];?></td>
            <td><?php Echo $body['Courses'];?></td>
            <td><?php Echo $body['Yearlevel'];?></td>
        </tr>
        <?php
                $i++;
            }
        ?>
    </tbody>
</table>