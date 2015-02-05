<div class="mix web-design mix_all sidebarArticle" data-articleId="{{ isset($opinion->id) ? $opinion->id : '#'}}">
    <div class="panel panel-default item">
        <div class="panel-heading">
            <a href="/articles/{{ isset($opinion->id) ? $opinion->id : '#'}}" class="articleLink">
                <!--work image-->
                <img class="item-img" src="{{ isset($opinion->image) ? $opinion->image : 'blank' }}" alt="Work 1">
            </a>
        </div>
        <div class="panel-body">
            <a href="/articles/{{ isset($opinion->id) ? $opinion->id : '#'}}" class="articleLink">
                <div>
                    <h4 class="articleTitle">{{ isset($opinion->title) ? $opinion->title : 'Titre Manquant' }}</h4>
                    <span class="pull-right">
                        {{ isset($opinion->pour) ? $opinion->pour : 0 }}
                        <img class="thumbnailThumbs" src="/img/icon/approve.png" alt="">
                        {{ isset($opinion->contre) ? $opinion->contre : 0 }}
                        <img class="thumbnailThumbs" src="/img/icon/disapprove.png" alt="">
                    </span>
                </div>
                <p>{{ isset($opinion->date) ? date('Y-m-d', strtotime($opinion->date)) : 'Date manquante' }}<br>
                    <hr>
                    {{ isset($opinion->resume) ? substr($opinion->resume, 0, 30).(' ...') : 'Contenu manquant' }}</p>
            </a>
            <!--work tags-->
            <p class="item-tags">
            </p>
        </div>
    </div>
</div>