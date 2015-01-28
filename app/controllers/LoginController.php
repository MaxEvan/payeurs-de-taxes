<?php

class LoginController extends BaseController {

	/**
	 * Directs the user to the login control page to enter the site.
	 *
	 * @return Response
	 */
	public function getIndex() 
	{
		return View::make('pages.login');
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
	 * Temporary function to update the password of beta user to using laravel's Bcrypt technique
	 *
	 * @return Response
	 */
	// public function update() 
	// {
	// 	$pass = Hash::make('pdtxbeta123');
	// 	DB::table('users')
	// 		->where('username', 'beta')
	// 		->update(array('password' => $pass));
	// }

}
