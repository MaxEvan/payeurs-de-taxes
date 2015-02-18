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
        if(Auth::attempt(['username' => $input['username'], 'password' => $input['password']], false, true))
        {
            Session::put('username', $input['username']);
            return View::make('pages.home');
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
    * Create a new user
    * @var User object
    *
    * @return Response
    */
    public function create()
    {
        $input = Input::only(
            'username',
            'email',
            'password',
            'password_confirmation'
        );

        if(!is_array($return = $this->validator->validateRegister($input)))
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
           return Redirect::back()->withInput($return['input'])->withErrors($return['messages']);
        }
    }

    public function confirm()
    {
        $input = [
            'username'     => Input::get('username'),
            'password'     => Input::get('password'),
            'confirmation' => Input::get('confirmation')
        ];

        $check = DB::table('users')->where('username', $input['username'])->pluck('confirmation_code');

        if($input['confirmation'] === $check)
        {
            DB::table('users')->where('username', $input['username'])->update(['active' => 1, 'confirmed' => 1]);
            $this->login($input);
        }
        else
        {   
            $keep = Session::keep('username');
            return Redirect::back()->withInput($keep)->withErrors(['confirmation' => "Les informations entr&eacute;es ne sont pas valides. Veuillez les v&eacute;rifier avant de continuer."]);
        }
    }
}
