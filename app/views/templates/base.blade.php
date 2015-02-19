<!DOCTYPE html>
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
				<div class="col-lg-8 col-md-8 col-sm-7 col-left">
					<div class="name" style="diplay:inline;">
						<a href="/">PayeursDeTaxes.ca</a>
						<span style="float:right;">
							<span style="color:white;"> | {{ Auth::user()->username }}</span>
							<a href="#" id="logout" style="font-size: 13px;"><u>D&eacute;connexion</u></a>
						</span>
						<div style="float:right">
							<a href="https://www.facebook.com/pages/Payeursdetaxesca/1621627638064752"><img class="social" src="/img/icon/icon-facebook.png" alt="facebook"></a>
							<a href="https://twitter.com/PayeursDeTaxes"><img class="social" src="/img/icon/icon-twitter.png" alt="twitter"></a>
				       		<a href="https://plus.google.com/u/0/103967291940630513527"><img class="social imgSocial" src="/img/icon/icon-google.png" alt="Google plus"></a>    
				    	</div>
					</div> 
				</div>
				<div class="col-lg-4 col-md-4 col-sm-5 col-right">
					<nav>
						<ul class="list-inline" id="menu">
							<li class="navLink">
								<a href="/">Accueil</a>
							</li>							
							<li class="navLink">
								<a href="/opinions">Opinions</a>
							</li>
							<li class="navLink">
								<a href="/suggestions">Suggestions</a>
							</li>
							<li class="navlink">
								<a href="/contact">contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="row bottom">
				<div id="col-left" class="col-lg-8 col-md-8 col-sm-7 col-left">
					<section id="opinionContent">
						@yield('content')
					</section>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-5 col-right">
					<div id="scroll-shadow"></div>
					<h2 class="section-header">Derni&egrave;res opinions</h2>
					<section class="row" id="Grid">
						<div id="sideContent">
							<!-- @include('partials.sideFilters') -->
							@include('partials.sidebarOpinions')
						</div>
						<button style="display: block; width: 150px; margin: 20px auto" id="loadMore" class="btn btn-default pdtxBtn ">Plus de r&eacute;sultats...</button>
						<div style="width: 150px; margin: auto" id="loading" class="hidden">
							<h3 style="display:inline-block; margin:20px 0;">Chargement</h3>
							<img style="display:inline-block; height: 5px;" src="/img/ajax-loader.gif" />
						</div>
					</section>
				</div>
		</div> 
		<a href="#" id="backToTop"><img id="returnTop" src="/img/arrow-up.png" alt="return to top"></a>
		<script src="/js/min/min.js"></script>
	</body>
</html>