@extends('templates.formPage')

@section('content')
        <h1>Confirmation du compte...</h1> <br>
        <p  class="text-justify">Entrez le code de confirmation re&ccedil;u par courriel <br> avec votre nom d'usager pour confirmer votre inscription.</p>
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