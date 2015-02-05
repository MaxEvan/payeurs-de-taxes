$(".pageLink").click(function(e) {
    e.preventDefault();
    var url = $(this).data("url");
    updateUrl(url);
});

$(".col-right").on("click", ".sidebarArticle", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-articleId");
    var url = "opinions/" + id;
    updateUrl(url);
});
