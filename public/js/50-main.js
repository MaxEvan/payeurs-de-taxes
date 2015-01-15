// Fastclick
// ------------------
$(function() {
    FastClick.attach(document.body);
});


// Load more
// ------------------
var loadMoreContent = "";

$("a.load-more").click(function(e){
    e.preventDefault();
    if(loadMoreContent == "")
        loadMoreContent = $(this).prev().html();
    
    $(this).prev().append(loadMoreContent);
});


// Portfolio
// ------------------
$(".item-choice a").click(function(e){
   e.preventDefault();
});

$('#Grid').mixitup();


// CUSTOM ---

// Load article
$(".col-right").on("click", ".sidebarArticle", function(e) {
	e.preventDefault();
	var id = $(this).attr("data-articleId");
	var url = "opinions/" + id;
	window.history.pushState('', '', '/' + url);
	$.ajax({
		url: "/ajaxArticles",
		dataType: "json",
		type: "GET",
		data: {ajax: "ajax",
			   id: id},
		success: function(resp) {
			$("#articleContent").empty().html(resp);
			e.preventDefault();
			$.smoothScroll({offset:0});
		},
		error: function(resp) {
			console.log(resp);
		}
	});
});

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