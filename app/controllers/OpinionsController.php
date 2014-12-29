<?php

class OpinionsController extends BaseController {
	/**
	 * Returns the selected article.
	 *
	 * @return Response
	 */
	public function getIndex($id = null){
		$articles = $this->initializeSidebarArticles();
		$ajax = Input::get('ajax');
		if($ajax == "ajax"){
			$id = Input::get('id');
			$recent =  $this->initializeMainArticle($id);
			$html =  View::make('partials.article')
					->with([
						'articles' => $articles,
						'recent' => $recent[0]
						])->render();
			return Response::json($html);
		}
		else{
			$recent =  $this->initializeMainArticle($id);
			return View::make('pages.opinions')
			->with([
				'articles' => $articles,
				'recent' => $recent[0]
			]);
		}
	}

	public function initializeMainArticle($id = null) {
		if($id == null){
			// no specified $id ? -> get the newest article
			return DB::table('articles')->orderBy('date', 'desc')->take(1)->get();
		}
		else{
			// initialize the article with the passed $id
			return $return = DB::table('articles')->where('id', '=', $id)->get();
		}
	}

	public function getMoreArticles() {
		$offset = Input::get('offset');
		$more = DB::table('articles')->orderBy('date', 'desc')->skip($offset)->take(2)->get();
		$html = View::make('partials.sidebarArticles')
				->with('articles', $more)->render();
		return Response::json($html);
	}
}