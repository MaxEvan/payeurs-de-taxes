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

    /**
    * Vote for an opinion
    *
    * @return Response
    */
    public function vote($user_id, $vote_array, $opinion_id, $vote_side) 
    {
        // Push the opinion's ID in the array and make it the new voted for array for the user
        array_push($vote_array, $opinion_id);
        $vote_array = serialize($vote_array);

        // Grab the opinion and the side
        $opinion    = Opinion::find($opinion_id);
        $side       = Input::get('side');

        // Make the databases updates
        DB::table('users')->where('id', $user_id)->update(['voted_for' => $vote_array]);
        DB::table('opinions')->where('id', $opinion_id)->update([$side => $opinion->$side+1]);

        return "VOTE_DONE";
    }
}