<div class="mix web-design mix_all sidebarArticle" data-articleId="{{ isset($article->id) ? $article->id : '#'}}">
    <div class="panel panel-default item">
        <div class="panel-heading">
            <a href="/articles/{{ isset($article->id) ? $article->id : '#'}}" class="articleLink">
                <!--work image-->
                <img class="item-img" src="{{ isset($article->image) ? $article->image : 'blank' }}" alt="Work 1">
            </a>
        </div>
        <div class="panel-body">
            <a href="/articles/{{ isset($article->id) ? $article->id : '#'}}" class="articleLink">
                <div>
                    <h4 class="articleTitle">{{ isset($article->title) ? $article->title : 'Titre Manquant' }}</h4>
                    <span class="pull-right">
                        {{ isset($article->pour) ? $article->pour : 0 }}
                        <img class="thumbnailThumbs" src="/img/icon/approve.png" alt="">
                        {{ isset($article->contre) ? $article->contre : 0 }}
                        <img class="thumbnailThumbs" src="/img/icon/disapprove.png" alt="">
                    </span>
                </div>
                <p>{{ isset($article->date) ? date('Y-m-d', strtotime($article->date)) : 'Date manquante' }}<br>
                    <hr>
                    {{ isset($article->resume) ? substr($article->resume, 0, 30).(' ...') : 'Contenu manquant' }}</p>
            </a>
            <!--work tags-->
            <p class="item-tags">
                
            </p>
        </div>
    </div>
</div>