<?php namespace PDTX\Forms;

use \Validator;
use \Session;
use \Redirect;

class FormValidator {

    /**
     * Validate a form for user confirmation
     * @var Form field values
     *
     * @return Response
     */
    public function validateConfirmation($input)
    {
        $rules = [
            'username'     => 'required|exists:users',
            'confirmation' => 'required'
        ];

        $validator = Validator::make($input, $rules);

        if($validator->fails())
        {
            $messages = $validator->messages();
            return ['messages' => $messages];
        }
        else
        {
            return true;
        }
    }

    /**
     * Validate a form and catch errors if any
     * @var Form field values
     *
     * @return Response
     */
    public function validateRegister($input)
    {
        $rules = [
            'username' => 'required|min:6|unique:users|alpha_num',
            'email'    => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6|alpha_num'
        ];

        $validator = Validator::make($input, $rules);

        if($validator->fails())
        {
            $keep = Session::keep(['username', 'email']);
            $messages = $validator->messages();
            return ['messages' => $messages, 'input' => $keep];
        }
        else
        {
            return true;
        }
    }

    /**
     * Validate a form and catch errors if any
     * @var Form field values
     *
     * @return Response
     */
    public function validateLogin($formInput)
    {
        // returns the validation response
        // if errors keep input and back()
        // else return @response
    }
}