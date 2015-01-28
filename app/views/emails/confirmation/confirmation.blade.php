<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>Il ne reste plus qu'&agrave; confirmer votre adresse courriel.</h2>

        <div>
            Merci d'avoir cr&eacute;&eacute; un compte chez PayeursDeTaxes.ca! <br>
            Entrez le code de confirmation ci-bas avec votre nom d'usager sur la page suivante: {{ URL::to('register/verify') }} pour terminer votre inscription.<br>
            Code de confirmation -> {{ $confirmation_code }}
        </div>

    </body>
</html>