<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Condo App</title>
        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    </head>
    <body>
        <div id="app">
            <app-component></app-component>
        </div>
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
