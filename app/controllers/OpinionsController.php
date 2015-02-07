<?php

class OpinionsController extends BaseController {
	
	public function getMoreOpinions() {
		$offset = Input::get('offset');
		$more 	= DB::table('opinions')->orderBy('date', 'desc')->skip($offset)->take(2)->get();
		$html 	= View::make('partials.sidebarOpinions')->with('opinions', $more)->render();
		return Response::json($html);
	}

	public function fillSidebar($count, $offset) 
	{
	    //func_body...
	}
}