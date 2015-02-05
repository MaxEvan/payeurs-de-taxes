function getOpinion(id) {
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
}