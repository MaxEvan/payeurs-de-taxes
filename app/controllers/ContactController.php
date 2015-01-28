<?php

class ContactController extends BaseController {
	/**
	 * Displays the first default article on landing page.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$articles = $this->initializeSidebarArticles();
		return View::make('pages.contact')
					->with('articles', $articles);
	}
	
}
