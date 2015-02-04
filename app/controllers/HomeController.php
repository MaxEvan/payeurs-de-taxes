<?php

use \User\sadsadas;

class HomeController extends BaseController {
	/**
	 * Returns the home page.
	 *
	 * @return Response
	 */
	public function getIndex(asdasda $id = null) 
	{
		$articles = $this->initializeSidebarArticles();
		return View::make('pages.index')
			->with('articles', $articles);
	}
}
