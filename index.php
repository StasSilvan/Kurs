<!DOCTYPE html>
<html lang="pl" dir="ltr">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="./css/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/style.css">
		<script src="./css/bootstrap/js/bootstrap.min.js">

		</script>
		<title>Formularz logowania</title>
	</head>
	<body>
		<form method="post">
			<div id="zle" style="display:none"></div>
			<div class="form-group">
				<input type="text" name="login" class="form-control" placeholder="login" autocomplete="off" autofocus required><br>
				<input type="password" name="haslo" class="form-control" placeholder="hasło" required><br>
				<input type="submit" class="btn btn-info" name="przycisk1" value="Zaloguj się" formaction="./sprawdz.php">
				<input type="submit" class="btn btn-info" name="przyciskR" value="Zarejestruj się" formaction="zarejestruj.php" formnovalidate>
			</div>
		</form>
		<?php

		 ?>
	</body>
</html>
