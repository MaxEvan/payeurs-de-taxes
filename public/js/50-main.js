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