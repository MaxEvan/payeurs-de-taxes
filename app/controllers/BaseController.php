<?php

class BaseController extends Controller {
	/**
	 * Initializes the sideBar articles in each pages.
	 *
	 * @return Response
	 */
	public function initializeSidebarOpinions()
    {
		return DB::table('articles')->orderBy('date', 'desc')->take(4)->get();
	}

}