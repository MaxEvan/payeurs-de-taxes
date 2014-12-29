<style>
	
	body{ 
		margin: 0;
	}
	
	#loginbar {
		text-align: center;
		height: 50px;
		background-color: rgb(51,51,51);
		color: #f7f7f7;
		font-family: Trebuchet MS;
	}

	p{
		padding-top: 15px;
	}

	#buttonDiv{
		margin-top: 20%;
		text-align: center;
	}

	#access, #login{
		background-color: black;
		color: white;
	}

	.modal, .loginInput{
		text-align: center;		
	}

	.loginInput{
		border-bottom: 1px solid black !important;
	}

	.modaleBody{
		padding: 0;
	}

	.modal-body{
		padding: 10 0 0 0;
	}

	#error{
		color: red;
	}
</style>

<html>

<head>
	<meta charset="utf-8">
	<title>PayeursDeTaxes.CA - La voix des contribuables</title>
	<link rel="icon" type="image/png" href="/img/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- Bootstrap -->
	<link href="/css/10-bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="/css/min/min.css" rel="stylesheet" media="screen">
</head>

<body class="page-index">
	<div class="container" id="container">
		<div class="row top">
			<div class="col-left">
				<div class="name"><a href="/">PayeursDeTaxes.ca</a></div>
			</div>
		</div>

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
		        	    <label for="exampleInputEmail1">Nom d'usager</label>
		        	    <input type="username" class="form-control loginInput" id="username" placeholder="Nom d'usager">
		        	  </div>
		        	  <div class="form-group">
		        	    <label for="exampleInputPassword1">Mot de passe</label>
		        	    <input type="password" class="form-control loginInput" id="pass" placeholder="Mot de passe">
		        	  </div>
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
	</div>
	<script src="/js/min/min.js"></script>

<script>
	$("#login").click(function(){
		var user = $("#username").val();
		var pass = $("#pass").val();
		$.ajax({
			url: '/login',
			type: 'POST',
			data:{
				username: user,
				password: pass
			},
			success: function(data) {
				if(data == "fail"){
					$("#error").toggleClass("hidden");
					setTimeout(function(){
						$("#error").toggleClass("hidden");
					}, 1750);
				}
				else{
					location.reload('/');
				}
			}
		});
	});
</script>
</body>

</html>

