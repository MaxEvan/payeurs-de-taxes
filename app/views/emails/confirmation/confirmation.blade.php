<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="color: black; font-size: 14px;">
        <h1>Merci d'avoir cr&eacute;&eacute; un compte chez PayeursDeTaxes.ca!</h1>

        <div>
            Il ne reste plus qu'&agrave; confirmer votre adresse courriel.<br>
            Cliquez sur ce lien pour confirmer votre compte<br>
            {{ URL::route('confirmation') }}/{{ $code }} <br>
        </div>

    </body>
</html>