<!DOCTYPE html>
<html lang="pl" dir="ltr">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="./css/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/style.css">
		<script src="./css/bootstrap/js/bootstrap.min.js">

		</script>
		<title>Formularz rejestracji</title>
	</head>
	<body>
		<form method="post">
			<div class="form-group">
				<div id="info" class="alert alert-primary">
					Rejestracja użytkownika
				</div>
				<input type="text" name="login" class="form-control" placeholder="login" autocomplete="off" autofocus required><br>
				<input type="password" name="haslo1" class="form-control" placeholder="hasło" required><br>
				<input type="password" name="haslo2" class="form-control" placeholder="potwierdź hasło" required><br>
				<input type="text" name="miasto" class="form-control" placeholder="miasto" required><br>
				<input type="date" name="data_urodzenia" class="form-control"><br>
				<input type="submit" class="btn btn-info" name="przycisk1" value="Anuluj" formnovalidate>
				<input type="submit" class="btn btn-info" name="przycisk2" value="Zarejestruj się" formnovalidate>
			</div>
		</form>
		<?php
			if (isset($_POST['przycisk1'])) {
				header('location: ./index.php');
			}elseif (isset($_POST['przycisk2'])) {
				if (!empty($_POST['login']) &&
				    !empty($_POST['haslo1']) &&
				    !empty($_POST['haslo2']) &&
				    !empty($_POST['miasto']) &&
					  !empty($_POST['data_urodzenia'])) {
					if ($_POST['haslo1'] != $_POST['haslo2']) {
						?>
							<script>
								let info = document.getElementById('info');
								info.innerHTML = 'Hasła są różne!';
								info.className = 'alert alert-danger';
							</script>
						<?php
					}else{
						$login = $_POST['login'];
						$haslo1 = $_POST['haslo1'];
						$miasto = $_POST['miasto'];
						$data_urodzenia = $_POST['data_urodzenia'];

						require_once('./script/connect.php');
						require_once('./script/add_user.php');

					}

				}else{
					?>
						<script>
							let info = document.getElementById('info');
							info.innerHTML = 'Wypełnij wszystkie pola!';
							info.className = 'alert alert-danger';
						</script>
					<?php
				}
			}elseif(isset($_POST['przyciskR'])){
				?>
					<script>
						let info = document.getElementById('info');
						info.innerHTML = 'Wypełnij wszystkie pola!';
						info.className = 'alert alert-primary';
					</script>
				<?php
			}
		 ?>
	</body>
</html>
