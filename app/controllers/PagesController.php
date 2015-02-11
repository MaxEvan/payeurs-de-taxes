<?php

use \Opinion;

class PagesController extends BaseController {
    
    /**
     * Instance of the Opinion model.
     *
     * @var string
     */
    protected $opinion;

    /**
     * Injection of the Opinion model in the construct.
     *
     * @var string
     */
    function __construct(Opinion $opinion)
    {
        $this->opinion = $opinion;
    }

    /**
     * Initialize page with sidebar opinions.
     * @var Name of the .blade.php file
     * @var Assoc. array passed to the View::make->with() method
     *
     * @return Response
     */
    public function initialize($name, $data = null)
    {
        $page = 'pages.' . $name;
        $array = [];
        $array['opinions'] = $this->opinion->initializeSidebarOpinions();
        if($data) 
        {
            foreach($data as $k => $v)
            {
                $array[$k] = $v;
            }
        }
        return View::make($page)->with($array);
    }

    /**
     * Show the home page.
     *
     * @return Response
     */
    public function showHome()
    {
        return $this->initialize('home');
    }
   
   /**
    * Show the opinions page with the displayed opinion in content section.
    * @var Displayed opinion id
    *
    * @return Response
    */
    public function showOpinion($id = null) {
        if($id == null)
        {
            return $this->initialize('opinions', ['displayedOpinion' => $this->opinion->getOpinion()]);
        }
        else
        {
            return $this->initialize('opinions', ['displayedOpinion' => $this->opinion->getOpinion($id)]);
        }
    }

    /**
     * Show the suggestions page.
     *
     * @return Response
     */
    public function showSuggestions() 
    {
        return $this->initialize('suggestions');
    }

    /**
     * Show the contact page.
     *
     * @return Response
     */
    public function showContact() 
    {
        return $this->initialize('contact');
    }

    /**
     * Show the login page.
     *
     * @return Response
     */
    public function showLogin() 
    {
        return View::make('pages.login');
    }

    /**
     * Show the register page.
     *
     * @return Response
     */
    public function showRegister() 
    {
        return View::make('pages.register');
    }

    /**
     * Show the identity confirmation page.
     *
     * @return Response
     */
    public function showConfirmation() 
    {
        return View::make('pages.confirmation');
    }

}