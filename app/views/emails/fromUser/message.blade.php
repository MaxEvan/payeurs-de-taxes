<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="color: black; font-size: 14px;">
        @if($title)
            <h1>{{ $title }}</h1>
        @endif

        <div>
            {{ $body }}
        </div>

    </body>
</html>