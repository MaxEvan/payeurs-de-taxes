@extends('templates.base')

@section('content')
	<h1>Suggestions</h1>
    <h1 class="spacer">___</h1>
    <h5>Si vous avez envie de nous envoyer une de vos opinions par écrit, vous pouvez le faire ici et nous verrons si nous serons en mesure de la publier sur le site...</h5>
    <div class="panel panel-default contact btn-footer">
        <div class="panel-body">
            <form role="form">
                <div class="form-group">
                    <textarea class="form-control" rows="1" id="opinionTitle" placeholder="Titre de l'opinion..."></textarea>
                </div>
                <div class="form-group">
                    <textarea class="form-control" rows="10" id="opinionBody" placeholder="Votre texte ..."></textarea>
                </div>
            </form>
            <div class="pull-right">
                <button id="sendOpinion" class="btn btn-default pdtxBtn">Envoyer</button>
            </div>
        </div>
    </div>
@stop

@section('scripts')
@stop