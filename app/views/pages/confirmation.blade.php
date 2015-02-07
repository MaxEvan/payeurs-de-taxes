@extends('templates.formPage')

@section('content')
        <h1>Confirmation du compte...</h1> <br>
        <p  class="text-justify">Vous avez re&ccedil;u un num&eacute;ro de confirmation <br> &agrave; l'adresse courriel fournie. Entrez ce code avec <br> votre nom d'usager pour confirmer votre inscription.</p>
        <br/>
        <?php if($errors->first('confirmation')){ echo "<p class='error'>" . $errors->first('confirmation'). "</p>";}?>
        {{ Form::open(['class' => 'authForm']) }}
            {{ Form::label('username', "Nom d'usager") }}
            {{ Form::text('username', null, ['class' => 'form-control authInput']) }}
            {{ Form::label('confirmation', 'Code de confirmation') }}
            {{ Form::text('confirmation', null, ['class' => 'form-control authInput']) }}
            {{ Form::submit('Confirmer le compte', ['class' => 'btn btn-default pdtxBtn authBtn', 'id' => 'confirm']) }}
        {{ Form::close() }}
@stop