<?php

use PDTX\Mailers\UserMailer;
use PDTX\Forms\FormValidator;

class UsersController extends BaseController {

    protected $mailer;
    protected $validator;

    public function __construct(UserMailer $mailer, FormValidator $validator) {
        $this->mailer = $mailer;
        $this->validator = $validator;
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
    * @var User object
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
}
