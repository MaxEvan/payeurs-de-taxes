<?php

class OpinionsController extends BaseController {
	
	/**
	 * Load more opinions in the sideBar
	 *
	 * @return Response
	 */
	public function getMoreOpinions() 
	{
		$offset = Input::get('offset');
		$more 	= DB::table('opinions')->orderBy('date', 'desc')->skip($offset)->take(2)->get();
		$html 	= View::make('partials.sidebarOpinions')->with('opinions', $more)->render();
		return Response::json($html);
	}

	/**
	 * Render the opinion's json html in the content section via Ajax
	 *
	 * @return Response
	 */
	public function renderOpinion()
	{
		$id      = Input::get('id');
		$opinion = Opinion::find($id);
		$html    = Response::json(View::make('partials.opinion')->with('displayedOpinion', $opinion)->render());
		return ['powpow', $html];
	}

}