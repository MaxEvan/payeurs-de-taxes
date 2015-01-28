<?php

// Mail
// Route::post('userEmail', 'UserController@...');

// Suggestion...
Route::controller('suggestions', 'SuggestionsController');

// Contact...
Route::controller('contact', 'ContactController');

// Opinions...
Route::controller('opinions/{id?}', 'OpinionsController');
Route::get('getMoreArticles', 'OpinionsController@getMoreArticles');
Route::get('ajaxArticles', 'OpinionsController@getIndex');

// Login/Registration...
Route::get('login', ['as' => 'login', 'uses' => 'LoginController@getIndex']);
Route::post('login', 'LoginController@login');
Route::get('/register/verify', 'VerificationController@getIndex');
Route::post('/register/verify', 'VerificationController@verify');
Route::post('register', 'UserController@createUser');
Route::get('register', ['as' => 'register', 'uses' => 'UserController@getIndex']);

// Home...
Route::get('/', ['as' => 'home', 'uses' => 'HomeController@getIndex']);