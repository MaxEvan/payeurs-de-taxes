<?php

class PagesController extends BaseController {

    /**
     * Show the home page
     *
     * @return Response
     */
    public function showHome() 
    {
        $opinions = $this->initializeSidebarOpinions();
        return View::make('pages.home')->with('articles', $opinions);
    }

    /**
     * Ajax render the contact page
     *
     * @return Response
     */
    public function showContact() 
    {
        return View::make('pages.contact');
    }

    /**
     * Ajax render the opinions page
     *
     * @return Response
     */
    public function showOpinions() 
    {
        return View::make('pages.opinions');
    }

    /**
     * Ajax render the suggetions page
     *
     * @return Response
     */
    public function showSuggestions() 
    {
        return View::make('pages.suggestions');
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
    public function showVerify() 
    {
        return View::make('pages.verify');
    }

}