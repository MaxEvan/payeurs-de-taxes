<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="color: black; font-size: 14px;">
        <h2>Il ne reste plus qu'&agrave; confirmer votre adresse courriel.</h2>

        <div>
            Merci d'avoir cr&eacute;&eacute; un compte chez PayeursDeTaxes.ca! <br>
            Entrez vos informations &agrave; cette adresse pour terminer votre inscription! <br>
            {{ URL::to('register/verify') }} <br>
            <h2>Code de confirmation => {{ $code }}</h2>
        </div>

    </body>
</html>