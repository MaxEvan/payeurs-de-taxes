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
            flashMessage.error(appMessages.alreadyVoted);
        }
        else{
            flashMessage.success(appMessages.voteSaved);
        }
    });
});

// Vote against
$(document).on("click", "#voteAgainst", function() {
    var id = $("#currentOpinion").attr("data-id");
     vote(id, "contre").done(function(resp) {
        if(resp == "ALREADY_VOTED"){
            flashMessage.error(appMessages.alreadyVoted);
        }
        else{
            flashMessage.success(appMessages.voteSaved);
        }
    });
});

// Comment button
$(document).on("click", "#leaveComment", function() {
    if(!window.commentBoxInstance){
        var id = $("#currentOpinion").attr("data-id");
        vote(id, null).done(function(resp) {
            if(resp != "ALREADY_VOTED"){
                flashMessage.error(appMessages.voteFirst);
            }
            else{
                flashMessage.info(appMessages.leaveComment);
                showCommentBox();
            }
        });
    }
});

// Save the comment
$(document).on("click", "#writeComment",function(){
    var opinion_id = $("#currentOpinion").attr("data-id");
    var content = $("#commentMessage").val();
    content = $.trim(content);
    if(!content || content.length == 0){        
         flashMessage.error(appMessages.emptyComment);
         return false;
    }
    // saveComment(opinion_id, content);
    closeCommentBox();
    flashMessage.success(appMessages.commentSaved)
});

// Cancel the current comment
$(document).on("click", "#cancelComment",function(){
    closeCommentBox();
});