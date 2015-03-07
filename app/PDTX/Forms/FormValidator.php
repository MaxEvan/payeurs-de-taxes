<?php namespace PDTX\Forms;

use \Validator;
use \Session;
use \Redirect;
use \Input;
use \DB;
use \Hash;

class FormValidator {

    /**
     * Validate a form for user confirmation
     * @var Form field values
     *
     * @return Response
     */
    public function validateConfirmationForm()
    {
        $rules = [
            'username'     => 'required|exists:users',
            'password'     => 'required',
            'confirmation' => 'required'
        ];

        $pass = DB::table('users')->where('username', Input::get('username'))->pluck('password');
        if(! Hash::check(Input::get('password'), $pass))
        {
            Session::flash('messages', ['messages' => "V&eacute;rifiez votre nom d'usager et mot de passe"]);
            return false;
        }

        $validator = Validator::make(Input::all(), $rules);
        if($validator->fails())
        {
            $messages = $validator->messages();
            Session::flash('messages', $messages);
            return false;
        }

        $check = DB::table('users')->where('username', Input::get('username'))->pluck('confirmation_code');
        if(Input::get('confirmation') === $check)
        {
            return true;
        }
        else
        {   
            Session::flash('messages', ['confirmation' => "Le code de confirmation n'est pas le bon."]);
            return false;
        }

        return true;
    }

    /**
     * Validate a form and catch errors if any
     * @var Form field values
     *
     * @return Response
     */
    public function validateRegistrationForm()
    {
        $rules = [
            'username' => 'required|min:6|unique:users|alpha_num',
            'email'    => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6|alpha_num'
        ];

        $validator = Validator::make(Input::all(), $rules);
        if($validator->fails())
        {
            $messages = $validator->messages();
            Session::flash('messages', $messages);
            return false;
        }

        return true;
    }

    /**
     * Validate a form and catch errors if any
     * @var Form field values
     *
     * @return Response
     */
    public function validateLogin($formInput)
    {

    }
}