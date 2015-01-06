@extends('templates.base')

@section('content') 
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2">
            <!--input contact-->
            <h1>Prenez contact avec nous</h1>
            <h1 class="spacer">___</h1>
            <p>Vous pouvez prendre le temps de nous &eacute;crire directement afin de nous faire part de vos commentaires.</p>
            <hr>
			@include('partials.contactForm')
        </div>
    </div>    
@stop

@section('scripts')
@stop