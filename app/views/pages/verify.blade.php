@extends('templates.login_register')

@section('content')
        <h1>Derni&egrave;re v&eacute;rification...</h1> <br>
        <p>Vous avez re&ccedil;u un num&eacute;ro de confirmation &agrave; l'adresse courriel fournie.<br>
        <p>Entrez ce code avec votre nom d'usager pour confirmer votre inscription.</p>
        <br/>
        <?php if($errors->first('confirmation')){ echo "<p class='error'>" . $errors->first('confirmation'). "</p>";}?>
        {{ Form::open(['class' => 'authForm']) }}
            {{ Form::label('username', "Nom d'usager") }}
            {{ Form::text('username', null, ['class' => 'form-control authInput']) }}
            {{ Form::label('confirmation', 'Code de confirmation') }}
            {{ Form::text('confirmation', null, ['class' => 'form-control authInput']) }}
            {{ Form::submit('Confirmer', ['class' => 'btn btn-default confirmBtn authBtn', 'id' => 'confirm']) }}
        {{ Form::close() }}
@stop