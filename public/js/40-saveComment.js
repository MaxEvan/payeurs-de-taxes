app.saveComment = function(opinion_id, content) {
    $.ajax({
        url: "/saveComment",
        type: "POST",
        data: {
            opinion_id : opinion_id,
            content : content
        },
        success: function(resp){
            app.appendLastComment(resp);
        }
    })
}