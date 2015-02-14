@extends('templates.formPage')

@section('content')
<div>
    <h1>Erreur 404</h1>
    <hr>
    <br>
    <h3>La page demand&eacute;e n'a pas &eacute;t&eacute; trouv&eacute;e !</h3>
    <br>
    <h5>V&eacute;rifiez que l'URL entr&eacute;e est bien valide.</h5>
    <br>
    <a href="/"><h6>Retour &agrave; la page d'accueil</h6></a>
    <a href="/opinions/"><h6>Retour &agrave; la page des opinions</h6></a>
</div>
@stop