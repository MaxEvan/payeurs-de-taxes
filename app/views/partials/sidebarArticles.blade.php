@if(isset($articles))
	@foreach($articles as $article)
		@include('partials.articleThumb')
	@endforeach
@endif