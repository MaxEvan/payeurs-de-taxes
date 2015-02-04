<?php

class OpinionsController extends BaseController {

	public function renderOpinion() {
		// Render the selected opinion in the content section
	}

	public function getMoreOpinions() {
		$offset = Input::get('offset');
		$more = DB::table('articles')->orderBy('date', 'desc')->skip($offset)->take(2)->get();
		$html = View::make('partials.sidebarArticles')
				->with('articles', $more)->render();
		return Response::json($html);
	}

	public function fillSidebar($count, $offset) 
	{
	    //func_body...
	}
}