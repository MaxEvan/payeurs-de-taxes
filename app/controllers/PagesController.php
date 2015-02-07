<?php

use \Opinion;

class PagesController extends BaseController {

    protected $opinions;

    protected $latest;

    function __construct(Opinion $opinion)
    {
        $this->opinions = $opinion->initializeOpinions();
        $this->latest   = $opinion->getLatestOpinion();
    }

    /**
     * Initialize page with sidebar opinions
     * @var name of the .blade.php file
     * @var assoc. array passed to the View::make->with() method
     *
     * @return Response
     */
    public function initialize($name, $data = null)
    {
        $page = 'pages.' . $name;
        $array = [];
        $array['opinions'] = $this->opinions;
        if($data) 
        {
            foreach($data as $k => $v)
            {
                $array[$k] = $v;
            }
        }
        // dd($array);
        return View::make($page)->with($array);
    }

    /**
     * Show the home page
     *
     * @return Response
     */
    public function showHome()
    {
        return $this->initialize('home');
    }
   
   /**
    * Show the opinions page with the displayed opinion in content section
    * @var displayedOpinion id
    *
    * @return Response
    */
    public function showOpinion($id = null) {
        if($id == null)
        {
            return $this->initialize('opinions', ['displayedOpinion' => $this->latest]);
        }
        else
        {
            return true;
        }
    }

    /**
     * Show the suggestions page
     *
     * @return Response
     */
    public function showSuggestions() 
    {
        return $this->initialize('suggestions');
    }

    /**
     * Show the contact page
     *
     * @return Response
     */
    public function showContact() 
    {
        return $this->initialize('contact');
    }

    /**
     * Show the login page
     *
     * @return Response
     */
    public function showLogin() 
    {
        return View::make('pages.login');
    }

    /**
     * Show the register page
     *
     * @return Response
     */
    public function showRegister() 
    {
        return View::make('pages.register');
    }

    /**
     * Show the verify page
     *
     * @return Response
     */
    public function showConfirmation() 
    {
        return View::make('pages.confirmation');
    }

}