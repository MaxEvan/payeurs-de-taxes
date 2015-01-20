@extends('templates.login_register')

@section('content')
    <div id="registerBody">
        <h1>Remplissez le formulaire pour acc&eacute;der au site</h1>
        <br/>
        <br/>
        {{ Form::open(['id' => 'registerForm']) }}
            <div>
                {{ Form::label('username', "Nom d'utilisateur") }}
                <br/>
                {{ Form::text('username', null, ['class' => 'form-control registerInput']) }}
                <?php if($errors->first('username')){ echo "<p>" . $errors->first('username'). "</p>";}?>
            </div> <br/>
            <div>
                {{ Form::label('email', 'Adresse courriel') }}
                <br/>
                {{ Form::text('email', null, ['class' => 'form-control registerInput', 'placeholder' => 'exemple@payeursdetaxes.ca']) }}
                <?php if($errors->first('email')){ echo "<p>" . $errors->first('email'). "</p>";}?>
            </div> <br/>
            <div>
                {{ Form::label('Password', 'Mot de passe') }}
                <br/>
                {{ Form::password('password', ['class' => 'form-control registerInput']) }}
                <?php if($errors->first('password')){ echo "<p>" . $errors->first('password'). "</p>";}?>
            </div> <br/>
            <div>
                {{ Form::label('password_confirmation', 'Validation') }}
                <br/>
                {{ Form::password('password_confirmation', ['class' => 'form-control registerInput', 'placeholder' => 'R&eacute;p&eacute;tez le mot de passe']) }}
            </div> <br/>
            <div>
                {{ Form::submit('Cr&eacute;er le compte', ['class' => 'btn btn-primary', 'id' => 'register']) }}
            </div>
        {{ Form::close() }}
    </div>
@stop