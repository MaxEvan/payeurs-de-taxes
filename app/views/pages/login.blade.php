@extends('templates.formPage')

@section('content')
	<h1>Connexion</h1>
    <?php if($errors->first('message')){ echo "<p class='error'>" . $errors->first('message'). "</p>";}?>
	{{ Form::open(['class' => 'authForm']) }}
		<div>
			{{ Form::label('username', "Nom d'utilisateur") }}
			{{ Form::text('username', null, ['class' => 'form-control authInput']) }}
		</div>
		<div>
			{{ Form::label('password', "Mot de passe") }}
			{{ Form::password('password', ['class' => 'form-control authInput']) }}
		</div>
		<div>
			{{ Form::submit('Connexion', ['class' => 'btn btn-default pdtxBtn authBtn', 'id' => 'login']) }}
		</div>
	{{ Form::close() }}
	<br>
	<div><a href="/">Retour à la page d'accueil</a></div><br>
	<div><a href="/register">Pas de compte? Inscrivez vous ici!</a></div><br>
	<div><a href="/register/confirmation">Vous avec un compte non confirm&eacute;? cliquez ici...</a></div>
	<div class="hidden error">MAUVAIS USAGER OU MOT DE PASSE!</div>
@stop