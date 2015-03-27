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

        if(Auth::attempt($auth, true))
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
            return View::make("pages.registerEmail");
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
    public function confirm($code = null)
    {
        $user = DB::table('users')->where('confirmation_code', $code)->get();

        if(!$code || !$user){
            return Redirect::to('/login');
        }
        else
        {
            $update = ['active' => 1, 'confirmed' => 1, 'confirmation_code' => null];
            DB::table('users')->where('confirmation_code', $code)->update($update); 
            return View::make('pages.confirmation');
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

    public function sendEmailToAdmin() 
    {
        $user  = Auth::user()->email;
        $body  = Input::get('body');
        $title = Input::get('title');

        $this->mailer->sendEmailToAdmin($user, $body ,$title);
    }
}
