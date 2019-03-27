<?php

	if (!$polaczenie->connect_errno) {

		//szyfrowanie hasła
		$haslo1 = password_hash($haslo1, PASSWORD_ARGON2ID);

		$sql = "INSERT INTO `user`(`login`, `haslo`, `miasto`, `data_urodzenia`)
		        VALUES (\"$login\",\"$haslo1\",\"$miasto\",\"$data_urodzenia\")";

		if ($rezultat = $polaczenie->query($sql)) {
			// code...
		}else{
			echo "Błędne zapytanie";
		}
	}else{
		header('location: ../index.php');
	}

 ?>
