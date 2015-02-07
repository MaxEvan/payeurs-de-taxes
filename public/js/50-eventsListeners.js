// Load article in content section
$(".col-right").on("click", ".sidebarArticle", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-articleId");
    var url = "opinions/" + id;
    updateUrl(url);
});

// Load more articles button click
$("#loadMore").click(function(e) {
    var offset = $(".item-img").length;
    getMoreOpinions(offset);
});
