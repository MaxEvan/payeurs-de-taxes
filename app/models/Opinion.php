<?php

class Opinion extends Eloquent { 

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table   = 'opinions';

    /**
     * What fields of the table are guarded against mass assignement.
     *
     * @var string
     */
    protected $guarded = [];

    /**
     * Gets the 4 latest opinions to initialize the sidebar
     *
     * @return array of opinions
     */
    public function initializeSidebarOpinions() 
    {
        $opinions = DB::table('opinions')->orderBy('date', 'desc')->take(4)->get();
        return $opinions;
    }

    /**
     * Gets the opinion with the id in the parameters.
     *
     * @return Opinion's values.
     */
    public function getOpinion($id = null) 
    {
        if(!$id)
        {
            $id      = DB::table('opinions')->max('id');
            $opinion = Opinion::find($id);
        }

        $opinion = Opinion::find($id);

        if(!$opinion)
        {
            App::abort(404);
        }
        
        return $opinion;
    }

    /**
     * Stores the opinion written by an admin.
     *
     * @return array of opinions
     */
    public function store($inputValues /*All the field values*/) 
    {
        // Write to database for eventual admin form for writing opinions
    }

    /**
     * Gets the latest opinion to display
     *
     * @return array of opinions
     */
    public function getLatestOpinion() 
    {
        $latest = DB::table('opinions')->orderBy('date', 'desc')->take(1)->get();
        return $latest[0];
    }
}