function renderOpinion(id) {
    $.ajax({
        url: "/renderOpinion",
        dataType: "json",
        type: "GET",
        data: {id: id},
        success: function(resp) {
            $("#opinionContent").empty().html(resp);
        }
    });
    $(".col-left").animate({ scrollTop: 0 },  1000);
}