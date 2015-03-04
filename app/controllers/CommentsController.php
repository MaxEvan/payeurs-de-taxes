<?php

class CommentsController extends BaseController {

	protected $comment;

	function __construct(Comment $comment) {
		$this->comment = $comment;
	}
	
	/**
	 * Save the comment written by the user
	 *
	 * @return Response
	 */
	public function saveComment()
	{
		$user_id    = Auth::user()->id;
		$opinion_id = Input::get('opinion_id');
		$content    = Input::get('content');
		$this->comment->saveComment($user_id, $opinion_id, $content);
	}

}
