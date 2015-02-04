// Fastclick
// ------------------
$(function() {
    FastClick.attach(document.body);
});

// Portfolio
// ------------------
$(".item-choice a").click(function(e){
   e.preventDefault();
});

$('#Grid').mixitup();

// Load more articles
$("#moreArticles").click(function(e) {
	e.preventDefault();
	$.ajax({
		type: "GET",
		url: "/getMoreArticles",
		dataType: "json",
		data: {offset: offset},
		success: function(resp) {
			offset += 2;
			$("#sideContent").append(resp);
		},
		error: function(resp) {
			console.log('error!');
		}
	});
});

// return top display
$("#col-left").scroll(function() {
	if($(this).scrollTop() > 500){
		$("#returnTop").fadeIn();
	}
	else{
		$("#returnTop").fadeOut();
	}
});

$(window).scroll(function() {
	if($("#col-left").scrollTop() != 0) {
		return true;
	}
	else if($(this).scrollTop() > 300){
		$("#returnTop").fadeIn();
	}
	else{
		$("#returnTop").fadeOut();
	}
});

// return top action
$("#backToTop").click(function(e){
	e.preventDefault();
	if($("#col-left").scrollTop() > 0){
		$("#col-left").animate({scrollTop : 0}, 800);
	}else{
		$("html, body").animate({scrollTop : 0}, 800);
	}
});
// END return top

// register_login
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
				$(".error").toggleClass("hidden");
				setTimeout(function(){
					$(".error").toggleClass("hidden");
				}, 1750);
			}
			else{
				location.reload('/');
			}
		}
	});
});