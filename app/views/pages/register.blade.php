@extends('templates.formPage')

@section('content')
    <h1>Inscription</h1>
    <br/>
    {{ Form::open(['class' => 'authForm']) }}
        <div>
            {{ Form::label('username', "Nom d'utilisateur") }}
            {{ Form::text('username', null, ['class' => 'form-control authInput']) }}
            <?php if($errors->first('username')){ echo "<p class='error'>" . $errors->first('username'). "</p>";}?>
        </div>
        <div>
            {{ Form::label('email', 'Adresse courriel') }}
            {{ Form::text('email', null, ['class' => 'form-control authInput', 'placeholder' => 'exemple@payeursdetaxes.ca']) }}
            <?php if($errors->first('email')){ echo "<p class='error'>" . $errors->first('email'). "</p>";}?>
        </div> 
        <div>
            {{ Form::label('password', 'Mot de passe') }}
            {{ Form::password('password', ['class' => 'form-control authInput']) }}
            <?php if($errors->first('password')){ echo "<p class='error'>" . $errors->first('password'). "</p>";}?>
        </div>
        <div>
            {{ Form::label('password_confirmation', 'Validation') }}
            {{ Form::password('password_confirmation', ['class' => 'form-control authInput', 'placeholder' => 'R&eacute;p&eacute;tez le mot de passe']) }}
        </div>
        <div>
            {{ Form::submit('Cr&eacute;er le compte', ['class' => 'btn btn-default pdtxBtn authBtn', 'id' => 'register']) }}
        </div>
        <br>
        <div>
            <a href="/login"><small>Retour &agrave; la page de connexion.</small></a>
        </div>
    {{ Form::close() }}
@stop