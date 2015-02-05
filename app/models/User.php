<?php

class User extends Eloquent {
	
	protected $fillable = ['username', 'password', 'email', 'confirmation_code'];
	protected $table = 'users';
	protected $hidden = array('password');
    
}