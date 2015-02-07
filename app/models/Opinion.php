<?php

class Opinion extends Eloquent { 

    protected $table   = 'opinions';
    protected $guarded = [];

    public function initializeOpinions() 
    {
        $opinions = DB::table('opinions')->orderBy('date', 'desc')->take(4)->get();
        return $opinions;
    }

    public function getOpinion($id) 
    {
        // $opinion = Opinion...
    }

    public function store($inputValues /*All the field values*/) 
    {
        // Write to database for eventual admin form for writing opinions
    }

    public function getLatestOpinion() 
    {
        $latest = DB::table('opinions')->orderBy('date', 'desc')->take(1)->get();
        return $latest[0];
    }
}