// Load opinion in content section Ajax
$(".col-right").on("click", ".sidebarOpinion", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-opinionid");
    var url = "opinions/" + id;
    renderOpinion(id);
    updateUrl(url);
});

// Load more articles button click
$("#loadMore").click(function(e) {
    var offset = $(".item-img").length;
    getMoreOpinions(offset);
});

// Get back to top
$("#backToTop").click(function(e){
    e.preventDefault();
    returnToTop();
});

// Logout
$("#logout").click(function(e) {
    e.preventDefault();
    logout();
})