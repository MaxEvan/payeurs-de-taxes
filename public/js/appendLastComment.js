app.appendLastComment = function(obj) {
    var html =  '<div class="media comment">' +
                    '<div class="media-body">' +
                        '<h3 class="media-heading">' + obj.author + '</h3>' +
                        '<p class="comment-date">' + obj.updated_at + '</p>' +
                        '<p class="comment-content">' + obj.content + '</p>' +
                    '</div>' +
                '</div>';

    $("#commentsDiv").append(html);
}