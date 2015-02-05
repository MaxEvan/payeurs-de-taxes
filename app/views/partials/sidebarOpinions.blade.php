@if(isset($opinions))
	@foreach($opinions as $opinion)
		@include('partials.opinionsThumb')
	@endforeach
@endif