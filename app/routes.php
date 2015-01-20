<?php

Route::controller('suggestions', 'SuggestionsController');
Route::controller('contact', 'ContactController');
Route::controller('opinions/{id?}', 'OpinionsController');
Route::get('getMoreArticles', 'OpinionsController@getMoreArticles');
Route::get('ajaxArticles', 'OpinionsController@getIndex');
Route::get('login', ['as' => 'login', 'uses' => 'LoginController@getIndex']);
Route::post('login', 'LoginController@login');
Route::get('/register/verify', 'VerificationController@getIndex');
Route::post('register', 'UserController@createUser');
Route::controller('register', 'UserController');
Route::get('/', ['as' => 'home', 'uses' => 'HomeController@getIndex']);