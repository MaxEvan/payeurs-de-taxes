<?php

use PDTX\Mailers\UserMailer;

class UserController extends BaseController {

    protected $mailer;

    public function __construct(UserMailer $mailer) {
        $this->mailer = $mailer;
    }

	/**
	 * Lands on the register page to create new user
	 *
	 * @return Response
	 */
	public function getIndex() 
    {
		return View::make('pages.register');
	}

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
