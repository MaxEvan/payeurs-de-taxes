function showCommentBox() {
    var html =  '<div class="panel panel-default contact btn-footer commentBox">' +
                '<div class="panel-body">' +
                '<form role="form">' +
                '<div class="form-group">' +
                '<textarea class="form-control" rows="10" id="commentMessage" placeholder="Votre texte ici..."></textarea>' +
                '</div>' +
                '</form>' +
                '<div class="text-center">' +
                '<button class="pdtxBtn writeComment">Terminer</button>' +
                '</div>' +
                '</div>' +
                '</div>';

    $("#commentsDiv").append(html);

}