app.getMoreOpinions = function(offset) {
    $("#loading, #loadMore").toggleClass("hidden");
    setTimeout(function() {

        $.getJSON( "/getMoreOpinions", {offset: offset}, 
            function(resp) { 
                var ret = resp;
                $("#sideContent").append(ret);
                $("#loading, #loadMore").toggleClass("hidden");
                if($(window).width() > 768){
                    var scroll = $("#sideContent").height();
                    $(".col-right").animate({ scrollTop: scroll }, 1000);
                }
                else{
                    var scroll = $(document).height();
                    $("body").animate({ scrollTop: scroll }, 1000);   
                }
            }
        );

    },1000);  
}