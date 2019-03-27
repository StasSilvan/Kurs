<?php
	if (!empty($_POST['login']) &&
	    !empty($_POST['haslo'])){
		$login = $_POST['login'];
		$haslo = $_POST['haslo'];

		require_once('./script/connect.php');

		$sql = "SELECT haslo FROM `user` WHERE login = \"$login\"";

		if ($rezultat = $polaczenie->query($sql)) {
			if ($polaczenie->affected_rows > 0) {
				//echo $polaczenie->affected_rows;

				 $wiersz = $rezultat->fetch_assoc();
				$passHash = $wiersz['haslo'];
				// echo $login,'<br>';
				// echo $haslo,'<br>';
				// echo $passHash,'<hr>';

				if (password_verify("$haslo",$passHash)){
					header('location: ./zalogowany.php');;
				}else {
					echo 'bledny login lub haslo';
				}

				// echo password_verify("$haslo",$passHash);

				 exit();
			}else{
				//użytkownik o podanym loginie nie istnieje lub hasło jest błędne
		 //echo "<script>alert('Sprawdz hasło lub Login');</script>";
			// header('location: ./index.php');



			}
		}else{
			echo "Błędne zapytanie!";
		}
	}
	// else{
         //header('location: ./index.php');
	// }

	/*
		zad. dom.
		Dokończyć system logowania
		zmodyfikować bazę danych i dodać tabelę z uprawnieniami i dodatkowe pole (klucz obcy) w tabeli user
		zmodyfikować formularz rejestracji gdzie użytkownikowi będzie automatyczniem zwykłym userem

		***
		użytkownik po zalogowaniu będzie miał odpowiednie uprawnienia (admin, user, moderator),
		będzie przekierowany do strony zalogowany.php i w zależności od uprawnień będzie miał różny content na stronie

		***
		Administrator będzie miał możliwośc dodania nowego użytkownika, edycji danych, i wyświetlą mu się wszyscy użytkownicy
		(na zajęciach dodać paginację)
	*/
 ?>
