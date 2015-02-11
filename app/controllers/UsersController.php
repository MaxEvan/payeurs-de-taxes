<?php

use PDTX\Mailers\UserMailer;
use PDTX\Forms\PdtxFormValidator;

class UserController extends BaseController {

    protected $mailer;

    public function __construct(UserMailer $mailer) {
        $this->mailer = $mailer;
    }

    /**
    * Log the user in
    * @var User object
    *
    * @return Response
    */
    public function login()
    {
        $username = Input::get('username');
        $password = Input::get('password');

        $pass = DB::table('users')->where('username', $username)->pluck('password');

        if($pass)
        {
            if(Hash::check($password, $pass))
            {
                $hashcook = Hash::make('authorizationsuccessful');
                $cookie = Cookie::forever('auth', $hashcook);
                return Response::make()->withCookie($cookie);
            }
            else
            {
                $ret = "fail";
                return $ret;
            }
        }
        else
        {
            $ret = "fail";
            return $ret;
        }
    }

    /**
    * Create a new user
    * @var User object
    *
    * @return Response
    */
    public function create(User $user)
    {
    //TODO: externalize the validator logic
        $rules = [
        'username' => 'required|min:6|unique:users|alpha_num',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed|min:6|alpha_num'
        ];

        $input = Input::only(
            'username',
            'email',
            'password',
            'password_confirmation'
            );

        $validator = Validator::make($input, $rules);

        if($validator->fails()) {
            $keep = Session::keep(['username', 'email']);
            $messages = $validator->messages();
            return Redirect::back()->withInput($keep)->withErrors($messages);
        }

        $code = str_random(20);

        User::create([
            'username'          => Input::get('username'),                               
            'password'          => Hash::make(Input::get('password')),
            'email'             => Input::get('email'),               
            'confirmation_code' => $code                              
            ]);

        $this->mailer->sendConfirmation(Input::get('email'), $code);

        return Redirect::to('register/verify');
    }

    public function confirm(User $user)
    {
        $username     = Input::get('username');
        $confirmation = Input::get('confirmation');
        $value        = DB::table('users')->where('username', $username)->pluck('confirmation_code');

        if($confirmation === $value)
        {
            $hashcook = Hash::make('authorizationsuccessful');
            $cookie = Cookie::forever('auth', $hashcook);
            DB::table('users')->where('username', $username)->update(['active' => 1, 'confirmed' => 1]);
            return Redirect::home()->withCookie($cookie);
        }
        else
        {   
            $keep = Session::keep('username');
            return Redirect::back()->withInput($keep)->withErrors(['confirmation' => "Le nom d'usager ou le code de confirmation n'est pas bon"]);
        }
    }
}
