@extends('templates.base')

@section('content') 
            <h1>Prenez contact avec nous</h1>
            <h1 class="spacer">___</h1>
            <h5>Vous pouvez nous &eacute;crire directement afin de nous faire part de vos commentaires...</h5>
            <hr>
			@include('partials.contactForm')  
@stop

@section('scripts')
@stop