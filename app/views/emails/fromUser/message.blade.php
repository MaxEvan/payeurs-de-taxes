<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="color: black; font-size: 14px;">

        @if($title)
            <h3>Titre de l'opinion: {{ $title }}</h3>
        @endif

        <div>
            {{ $body }}
        </div>

    </body>
</html>