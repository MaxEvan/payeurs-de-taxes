<?php

// Mail
// Route::post('userEmail', 'UsersController@...');

// Suggestion...
Route::get('/suggestions', 'PagesController@showSuggestions');

// Contact...
Route::get('/contact', 'PagesController@showContact');

// Opinions...
Route::get('/opinions/{id?}', 'PagesController@showOpinion');
Route::get('/renderOpinion', 'OpinionsController@renderOpinion');
Route::get('/getMoreOpinions', 'OpinionsController@getMoreOpinions');

// Login/Registration...
Route::post('/login', 'UsersController@login');
// Route::post('/register/verify', 'VerificationController@verify');
Route::post('/register', 'UsersController@createUser');

// Pages...
Route::get('/login', ['as' => 'login', 'uses' => 'PagesController@showLogin']);
Route::get('/register/confirmation', 'PagesController@showConfirmation');
Route::get('/register', ['as' => 'register', 'uses' => 'PagesController@showRegister']);
Route::get('/', ['as' => 'home', 'uses' => 'PagesController@showHome']);