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
					<div id="navbar" class="name" style="diplay:inline;">
						<a href="/">PayeursDeTaxes.ca</a>
						<span id="profileDiv">
							<div id="dropdown">
								<a href="#" id="menuIcon"><img id="bars" src="/img/icon/icon_bars.png"></a>
								<ul id="profileDropdown" class="hidden">
									<li class="dropdownItem" >D&eacute;connexion <img id="logoutImg" src="/img/icon/logout.png" alt=""></li>
									<li class="dropdownItem" >D&eacute;connexion <img id="logoutImg" src="/img/icon/logout.png" alt=""></li>
									<li class="dropdownItem" >D&eacute;connexion <img id="logoutImg" src="/img/icon/logout.png" alt=""></li>
									<li class="dropdownItem" >D&eacute;connexion <img id="logoutImg" src="/img/icon/logout.png" alt=""></li>
									<li class="dropdownItem" id="logout">D&eacute;connexion <img id="logoutImg" src="/img/icon/logout.png" alt=""></li>
									<li class="dropdownItem">{{Auth::user()}}</li>
								</ul>
							</div>
						</span>
						<span id="socialDiv" style="float:right;">
							<a class="socialLink" href="https://www.facebook.com/pages/Payeursdetaxesca/1621627638064752"><img class="social socialImg" src="/img/icon/icon-facebook.png" alt="facebook"></a>
							<a class="socialLink" href="https://twitter.com/PayeursDeTaxes"><img class="social socialImg" src="/img/icon/icon-twitter.png" alt="twitter"></a>
				       		<a class="socialLink" href="https://plus.google.com/u/0/103967291940630513527"><img class="social socialImg" src="/img/icon/icon-google.png" alt="Google plus"></a>    
				    	</span>
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
					<h3 class="section-header">Derni&egrave;res opinions</h3>
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