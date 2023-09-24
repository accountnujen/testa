<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    file_put_contents('db.json', $_POST['content']);

    echo json_encode(array('message' => 'Данные сохранены.'));
    
} else {
    echo json_encode(array('message' => 'Недопустимый метод запроса.'));
}
?>