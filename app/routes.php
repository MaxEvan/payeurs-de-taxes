<?php

// Mail
// Route::post('userEmail', 'UserController@...');

// Suggestion...
Route::get('suggestions', 'PagesController@showSuggestions');

// Contact...
Route::get('contact', 'PagesController@showContact');

// Opinions...
Route::get('opinions/{id?}', 'PagesController@showOpinion');
// Route::get('getMoreArticles', 'OpinionsController@getMoreArticles');
// Route::get('ajaxArticles', 'OpinionsController@getIndex');

// Login/Registration...
// Route::post('login', 'LoginController@login');
// Route::post('/register/verify', 'VerificationController@verify');
Route::post('register', 'UserController@createUser');

// Pages...
Route::get('login', ['as' => 'login', 'uses' => 'PagesController@showLogin']);
Route::get('/register/verify', 'PagesController@showVerify');
Route::get('register', ['as' => 'register', 'uses' => 'PagesController@showRegister']);
Route::get('/', ['as' => 'home', 'uses' => 'PagesController@showHome']);