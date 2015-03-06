<?php

class Comment extends Eloquent { 

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table   = 'comments';

    /**
     * What fields are guarded against mass assignement.
     *
     * @var string
     */
    protected $guarded = [];

    public function get($opinion_id)
    {
        return Comment::where('opinion_id', '=', $opinion_id)->get();
    }
}