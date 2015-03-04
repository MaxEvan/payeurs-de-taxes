function showCommentBox() {
    var html =  '<div class="panel panel-default contact btn-footer commentBox">' +
                '<div class="panel-body">' +
                '<form role="form">' +
                '<div class="form-group">' +
                '<textarea class="form-control" rows="10" id="commentMessage" placeholder="Votre texte ici..."></textarea>' +
                '</div>' +
                '</form>' +
                '<div class="text-center">' +
                '<button id="writeComment" class=" btn btn-default pdtxBtn">Soumettre</button>' +
                '<button id="cancelComment" class=" btn btn-default pdtxBtn">Annuler</button>' +
                '</div>' +
                '</div>' +
                '</div>';

    $("#commentsDiv").append(html);

    window.commentBoxInstance = 1;
}