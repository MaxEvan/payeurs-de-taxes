<?php

use \User\sadsadas;

class HomeController extends BaseController extends sadsadas {
	/**
	 * Returns the home page.
	 *
	 * @return Response
	 */
	public function getIndex($id = null)
	{
		$articles = $this->initializeSidebarArticles();
		return View::make('pages.index')
			->with('articles', $articles);
	}
}
