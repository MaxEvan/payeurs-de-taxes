<?php

class LoginController extends BaseController {

	/**
	 * Directs the user to the login control page to enter the site.
	 *
	 * @return Response
	 */
	public function getIndex() {
		return View::make('pages.login');
	}

	public function login() {
		if( Cookie::get('auth') != null ){
			return Redirect::home();
		}else{
			$data = Input::get();
			$username = $data['username'];
			$password = $data['password'];

			$result = DB::table('users')
				->where('username', $username)
				->get();

			if($result){
				$hash = $result[0]->password;
				if(Hash::check($password, $hash)){
					$hashcook = Hash::make($password);
					$cookie = Cookie::forever('auth', $hashcook);
					return Response::make()->withCookie($cookie);
				}
				else{
					$ret = "fail";
					return $ret;
				}
			}
			else{
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
	public function update() {
		$pass = Hash::make('pdtxbeta123');
		DB::table('users')
			->where('username', 'beta')
			->update(array('password' => $pass));
	}

}
