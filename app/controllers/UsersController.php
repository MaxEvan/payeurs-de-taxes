<?php

use PDTX\Mailers\UserMailer;
use PDTX\Forms\FormValidator;

class UsersController extends BaseController {

    protected $mailer;
    protected $validator;
    protected $opinion;

    public function __construct(UserMailer $mailer, FormValidator $validator, Opinion $opinion) {
        $this->mailer = $mailer;
        $this->validator = $validator;
        $this->opinion = $opinion;
    }

    /**
    * Log the user in
    *
    * @return Response
    */
    public function login($input=null)
    {
        (!$input) ? $input = ['username' => Input::get('username'), 'password' => Input::get('password')] : false;

        $auth = ['username' => $input['username'], 
                 'password' => $input['password'],
                 'confirmed' => 1, 
                 'active' => 1];

        if(Auth::attempt($auth, false, true))
        {
            return Redirect::home();
        }
        else
        {
            return Redirect::back()->withErrors(['message' => "Connexion impossible, assurez vous que votre <br/> compte est confrm&eacute et v&eacute;rifiez vos identifiants."]);
        }
    }

    /**
    * Log the user out
    *
    * @return Response
    */
    public function logout()
    {
        Auth::logout();
        return Redirect::to('/login');
    }

    /**
    * Register a new user
    *
    * @return Response
    */
    public function register()
    {
        if($this->validator->validateRegistrationForm())
        {
            $code = str_random(20);
            User::create([
                'username'          => Input::get('username'),                               
                'password'          => Hash::make(Input::get('password')),
                'email'             => Input::get('email'),               
                'confirmation_code' => $code                        
            ]);

            $this->mailer->sendConfirmation(Input::get('email'), $code);
            return Redirect::to('register/confirmation');
        }
        else
        {
           return Redirect::back()->withInput(Input::all())->withErrors(Session::get('messages'));
        }
    }

    /**
    * Confirm user with emailed code
    *
    * @return Response
    */
    public function confirm()
    {
        if($this->validator->validateConfirmationForm())
        {
            $this->login();
        }
        else
        {
            dd("NOT/OK/CONFIRMATION");
            return Redirect::back()->withInput(Input::all())->withErrors(Session::get('messages'));
        }
    }

    /**
    * Check if a user has already voted or not for an opinion
    *
    * @return Response
    */
    public function vote()
    {
        $user_id    = Auth::user()->id;
        $opinion_id = Input::get('currentOpinionId');
        $vote_side  = Input::get('side');
        $voted_for  = User::find($user_id)->voted_for;
        !$voted_for ? $voted_for = []: $voted_for = unserialize($voted_for);        

        if(in_array($opinion_id, $voted_for))
        {
            $ret = "ALREADY_VOTED";
        }
        else
        {
            !$vote_side ? $ret = "NEED_VOTE" : $ret = $this->opinion->vote($user_id ,$voted_for, $opinion_id, $vote_side);
        }

        return $ret;
    }

    public function SendSuggestionToAdmin() 
    {
        return "powpow";
    }

    public function sendEmailToAmdin() 
    {
        return "powpowopw";
    }
}
