<?php

use PDTX\Mailers\UserMailer;

class UserController extends BaseController {

    protected $mailer;

    public function __construct(UserMailer $mailer) {
        $this->mailer = $mailer;
    }

    public function login() 
    {

        if( Cookie::get('auth') != null ){
            return Redirect::home();
        }else{
            $username = Input::get('username');
            $password = Input::get('password');

            $pass = DB::table('users')
                ->where('username', $username)
                ->pluck('password');

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
    }

    /**
     * Creates a user
     *
     * @return Response
     */
    public function createUser() 
    {
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
}
