<?php

class CommentsController extends BaseController {

	/**
	 * Save the comment written by the user
	 *
	 * @return Response
	 */
	public function save()
	{
		$comment = Comment::create([
			'user_id'    => Auth::user()->id,
			'opinion_id' => Input::get('opinion_id'),
			'author'     => Auth::user()->username,
			'content'    => Input::get('content')
		]);

		return $comment;
	}

}
