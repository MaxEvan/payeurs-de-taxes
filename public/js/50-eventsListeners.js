// Load an opinion
$(".col-right").on("click", ".sidebarOpinion", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-opinionid");
    var url = "opinions/" + id;
    renderOpinion(id);
    updateUrl(url);
});

// Load more opinions
$("#loadMore").click(function(e) {
    var offset = $(".item-img").length;
    getMoreOpinions(offset);
});

// Back to top button click
$("#backToTop").click(function(e) {
    e.preventDefault();
    returnToTop();
});

// Logout button
$("#logout").click(function(e) {
    e.preventDefault();
    logout();
});

// Show the dropdown
$("#menuIcon").click(function(e) {
    e.preventDefault();
    $("#profileDropdown").toggleClass("hidden");
});

// Vote for
$(document).on("click", "#voteFor", function() {
    var id = $("#currentOpinion").attr("data-id");
    vote(id, "pour").done(function(resp) {
        if(resp == "ALREADY_VOTED"){
            flashMessage.error("Vous avez d&eacute;j&agrave; vot&eacute; pour cet article.");
        }
        else{
            flashMessage.success("Votre vote est enregistr&eacute; avec succ&egrave;.");
        }
    });
});

// Vote against
$(document).on("click", "#voteAgainst", function() {
    var id = $("#currentOpinion").attr("data-id");
     vote(id, "contre").done(function(resp) {
        if(resp == "ALREADY_VOTED"){
            flashMessage.error("Vous avez d&eacute;j&agrave; vot&eacute; pour cet article.");
        }
        else{
            flashMessage.success("Votre vote est enregistr&eacute; avec succ&egrave;.");
        }
    });
});

// Comment button
$(document).on("click", "#leaveComment", function() {
    if(!window.commentBoxInstance){
        var id = $("#currentOpinion").attr("data-id");
        vote(id, null).done(function(resp) {
            if(resp != "ALREADY_VOTED"){
                flashMessage.error("Vous devez voter avant de pouvoir &eacute;crire un commentaire.");
            }
            else{
                flashMessage.info("Laissez un comentaire");
                showCommentBox();
                window.commentBoxInstance = 1;
            }
        });
    }
});


$(document).on("click", ".writeComment",function(){
    var message = $("#commentMessage").val();
    alert(message);
    // saveComment();
});