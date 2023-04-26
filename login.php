<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the submitted username and password
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate the username and password
    if ($username === 'Admin' && $password === '123456') {
        // Save the username in a session variable
        $_SESSION['username'] = $username;

        // Check if the "Remember me" checkbox is checked
        if (isset($_POST['remember_me'])) {
            // Set a cookie to remember the username (replace "7 days" with your desired expiry time)
            setcookie('username', $username, time() + (7 * 24 * 60 * 60));
        }

        // Redirect the user to index1.html
        header('Location: index1.html');
        exit();
    } else {
        $error = 'Invalid username or password';
    }
}
?>
