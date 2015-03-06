<div class="media comment">
    <div class="media-body">
        <h3 class="media-heading">{{ $comment['author'] }}</h3>
        <p class="comment-date">{{ isset($comment->created_at) ? $comment->created_at : 'Date manquante!' }}</p>
        <p class="comment-content">{{ isset($comment->content) ? $comment->content : 'Contenu manquant!' }}</p>
    </div>
</div>