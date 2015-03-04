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

    public function saveComment($user_id, $opinion_id, $content) 
    {
        $insert = ['user_id'    => $user_id,
                    'opinion_id' => $opinion_id, 
                    'content'    => $content];
        DB::table('comments')->insert($insert);
    }
}