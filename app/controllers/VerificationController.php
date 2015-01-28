<?php

class VerificationController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		return View::make('pages.verify');
	}

	public function verify()
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

