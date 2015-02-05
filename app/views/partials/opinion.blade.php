<!--article image-->
<img src="{{ isset($displayedOpinion->image) ? $displayedOpinion->image : 'blank' }}" class="currentArticleImg">

<!--article title-->
<div class="titleContainer">
    <h1 class="articleTitle">{{ isset($displayedOpinion->content) ? $displayedOpinion->title : 'Titre manquant!' }}</h1>
    <span class="pull-right">
        {{ isset($displayedOpinion->pour) ? $displayedOpinion->pour : 0 }}
        <img class="articleIcon" src="/img/icon/approve.png" alt="">
        {{ isset($displayedOpinion->contre) ? $displayedOpinion->contre : 0 }}
        <img class="articleIcon" src="/img/icon/disapprove.png" alt="">
    </span>
</div>
<h1 class="spacer">___</h1>

<!--article date-->
<p class="article-date">
    {{ isset($displayedOpinion->date) ? date('d-m-Y', strtotime($displayedOpinion->date)) : 'Date manquante' }}
</p>

<!--article tags-->
<p class="article-tags">
    <!-- load the tags associated with the article -->
</p>

<!--article content-->
<p class="article-description">
    <small>
        {{ isset($displayedOpinion->resume) ? $displayedOpinion->resume : 'R&eacute;sum&eacute; manquant...' }}
    </small>
</p>
<br>
<p class="article-content paragraph">
    {{ isset($displayedOpinion->content) ? $displayedOpinion->content : 'Contenu manquant...' }}
</p>

<!--navigation-->
<!-- <ul class="pager">
    <li class="previous"><a href="#">&lt; Pr&eacute;c&eacute;dent</a></li>
    <li class="next disabled"><a href="#">Suivant &gt;</a></li>
</ul> -->
<hr>

<!--comments-->
<h1>Commentaires</h1>
@include('partials.comment')
<hr>
<h3>pour faire part d'une opinion...</h3>
@include('partials.contactForm')
<hr>