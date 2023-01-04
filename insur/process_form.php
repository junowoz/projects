<?php

// Conexión a la base de datos
$host = "localhost";
$user = "username";
$password = "password";
$dbname = "database_name";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Procesamiento de la inscripción
if (isset($_POST['submit'])) {
  $grupo = mysqli_real_escape_string($conn, $_POST['grupo']);
  $fecha_inscripcion = date("Y-m-d H:i:s");

  $sql = "INSERT INTO inscripciones (grupo, fecha_inscripcion) VALUES ('$grupo', '$fecha_inscripcion')";
  mysqli_query($conn, $sql);
}

// Obtener lista de inscripciones
$sql = "SELECT * FROM inscripciones ORDER BY fecha_inscripcion ASC";
$result = mysqli_query($conn, $sql);
