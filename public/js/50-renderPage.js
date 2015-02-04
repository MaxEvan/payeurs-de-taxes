function renderPage(url) {
    return "rendered";
}

// Load article
$(".col-right").on("click", ".sidebarArticle", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-articleId");
    var url = "opinions/" + id;
    updateUrl(url);
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