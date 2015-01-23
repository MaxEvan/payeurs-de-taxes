@extends('templates.login_register')

@section('content')
        <h1>Derni&egrave;re v&eacute;rification...</h1>
        <br/>
        {{ Form::open(['class' => 'authForm']) }}
            {{ Form::label('username', 'Entrez le nom du compte') }}
            {{ Form::text('username', null, ['class' => 'form-control authInput']) }}
            {{ Form::label('confirmation', 'Entrez votre code de confirmation') }}
            {{ Form::text('confirmation', null, ['class' => 'form-control authInput']) }}
            {{ Form::submit('Confirmer', ['class' => 'btn btn-default confirmBtn authBtn', 'id' => 'confirm']) }}
        {{ Form::close() }}
@stop