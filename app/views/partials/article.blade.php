<!--article image-->
<img src="{{ isset($recent->image) ? $recent->image : 'blank' }}" class="currentArticleImg">

<!--article title-->
<div class="titleContainer">
    <h1 class="articleTitle">{{ isset($recent->content) ? $recent->title : 'Titre manquant!' }}</h1>
    <span class="pull-right">
        {{ isset($recent->pour) ? $recent->pour : 0 }}
        <img class="articleIcon" src="/img/icon/approve.png" alt="">
        {{ isset($recent->contre) ? $recent->contre : 0 }}
        <img class="articleIcon" src="/img/icon/disapprove.png" alt="">
    </span>
</div>
<h1 class="spacer">___</h1>

<!--article date-->
<p class="article-date">
    {{ isset($recent->date) ? date('d-m-Y', strtotime($recent->date)) : 'Date manquante' }}
</p>

<!--article tags-->
<p class="article-tags">
    <!-- load the tags associated with the article -->
</p>

<!--article content-->
<p class="article-description">
    <small>
        {{ isset($recent->resume) ? $recent->resume : 'R&eacute;sum&eacute; manquant...' }}
    </small>
</p>
<br>
<p class="article-content paragraph">
    {{ isset($recent->content) ? $recent->content : 'Contenu manquant...' }}
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