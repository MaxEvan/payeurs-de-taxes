@extends('templates.formPage')

@section('content')
        <h1>Confirmation du compte...</h1> <br>
        <p  class="text-justify">Entrez le code de confirmation re&ccedil;u par courriel <br> avec votre nom d'usager pour confirmer votre inscription.</p>
        <br/>
        {{ Form::open(['class' => 'authForm']) }}
            {{ Form::label('username', "Nom d'usager") }}
            {{ Form::text('username', null, ['class' => 'form-control authInput']) }}
        <?php if($errors->first('username')){ echo "<p class='error'>" . $errors->first('username') . "</p>";}?>
            {{ Form::label('password', 'Mot de passe') }}
            {{ Form::password('password', ['class' => 'form-control authInput']) }}
        <?php if($errors->first('password')){ echo "<p class='error'>" . $errors->first('password') . "</p>";}?>
            {{ Form::label('confirmation', 'Code de confirmation') }}
            {{ Form::text('confirmation', null, ['class' => 'form-control authInput']) }}
        <?php if($errors->first('confirmation')){ echo "<p class='error'>" . $errors->first('confirmation') . "</p>";}?>
            {{ Form::submit('Confirmer le compte', ['class' => 'btn btn-default pdtxBtn authBtn', 'id' => 'confirm']) }}
        {{ Form::close() }}
        <br>
        <div>
            <a href="/login"><small>Retour &agrave; la page de connexion.</small></a>
        </div>
@stop