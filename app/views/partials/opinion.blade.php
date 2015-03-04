<div id="currentOpinion" data-id="{{ isset($displayedOpinion->id) ? $displayedOpinion->id : 'blank' }}">
    <!--opinion image-->
    <img src="{{ isset($displayedOpinion->image) ? $displayedOpinion->image : 'blank' }}" class="currentOpinionImg">

    <!--opinion title-->
    <div class="titleContainer">
        <h1 class="opinionTitle">{{ isset($displayedOpinion->content) ? $displayedOpinion->title : 'Titre manquant!' }}</h1>
        <span class="pull-right">
            {{ isset($displayedOpinion->pour) ? $displayedOpinion->pour : 0 }}
            <img class="opinionIcon" src="/img/icon/approve.png" alt="">
            {{ isset($displayedOpinion->contre) ? $displayedOpinion->contre : 0 }}
            <img class="opinionIcon" src="/img/icon/disapprove.png" alt="">
        </span>
    </div>
    <h1 class="spacer">___</h1>

    <!--opinion date-->
    <p class="opinion-date">
        {{ isset($displayedOpinion->date) ? date('d-m-Y', strtotime($displayedOpinion->date)) : 'Date manquante' }}
    </p>

    <!--opinion tags-->
    <p class="opinion-tags">
        <!-- load the tags associated with the opinion -->
    </p>

    <!--opinion content-->
    <p class="opinion-description">
        <small>
            {{ isset($displayedOpinion->resume) ? $displayedOpinion->resume : 'R&eacute;sum&eacute; manquant...' }}
        </small>
    </p>
    <br>
    <p class="opinion-content paragraph">
        {{ isset($displayedOpinion->content) ? $displayedOpinion->content : 'Contenu manquant...' }}
    </p>
    <p>
        <i class="pull-right">
           &Eacute;crit par : {{ isset($displayedOpinion->author) ? $displayedOpinion->author : 'Auteur!' }}
        </i>
    </p>

    <br>
    <hr>


    <!--navigation-->
<!-- <ul class="pager">
<li class="previous"><a href="#">&lt; Pr&eacute;c&eacute;dent</a></li>
<li class="next disabled"><a href="#">Suivant &gt;</a></li>
</ul> -->

<!-- Voting area -->
<h1>Votez</h1>
<div id="voteArea"><button id="voteFor" class="btn btn-default pdtxBtn">EN ACCORD</button> ou  <button id="voteAgainst" class="btn btn-default pdtxBtn">EN D&Eacute;SACCORD</button></div>
<hr>
<!--comments-->
<div id="commentsDiv">
    <h1>Commentaires</h1>
</div>
<div class="text-center">
    <button id="leaveComment" class="btn btn-default pdtxBtn authBtn">Ajouter un commentaire</button>
</div>
<hr>


<h1>Pour faire part d'une opinion...</h1>
<a href="/suggestions">Visitez la page des suggestions</a>
</div>