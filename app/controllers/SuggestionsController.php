<?php

class SuggestionsController extends BaseController {
	/**
	 * Returns the about page.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$articles = $this->initializeSidebarArticles();
		return View::make('pages.suggestions')
					->with('articles', $articles);
	}
	
}
