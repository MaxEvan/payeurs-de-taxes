@extends('templates.login_register')

@section('content')
		<!-- Button trigger modal -->
		<div id="buttonDiv">
			<h4>Le site est encore en version bêta! Vous devez avoir un identifiant pour y acc&eacute;der.</h4>
			<button id="access" type="button" class="btn btn-lg" data-toggle="modal" data-target="#myModal">
			  Acc&eacute;der au site
			</button>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
		        <h4 class="modal-title" id="myModalLabel">Veuillez entrer vos informations</h4>
		      </div>
		      <div class="modal-body modaleBody">
		        	<form role="form">
		        	  <div class="form-group">
		        	    <label for="username">Nom d'usager</label>
		        	    <input type="username" class="form-control loginInput" id="username" placeholder="Nom d'usager">
		        	  </div>
		        	  <div class="form-group">
		        	    <label for="pass">Mot de passe</label>
		        	    <input type="password" class="form-control loginInput" id="pass" placeholder="Mot de passe">
		        	  </div>
		        	  <div><small><a href="/register">Pas de compte? Inscrivez vous ici!</a></small></div>
		        	  <div id="error" class="hidden">MAUVAIS USAGER OU MOT DE PASSE!</div>
		        	</form>
		      </div>
		      <div class="modal-footer">
		        <button id="close" type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
		        <button id="login" type="button" class="btn btn-primary">Connexion</button>
		      </div>
		    </div>
		  </div>
		</div>
@stop