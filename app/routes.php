<?php

Route::group(['before' => 'userIsAuth'], function() {
    Route::get('/login', ['as' => 'login', 'uses' => 'PagesController@showLogin']);
    Route::get('/register', ['as' => 'register', 'uses' => 'PagesController@showRegister']);
    Route::post('/login', 'UsersController@login');
    Route::get('/register/confirmation/{code?}', ['as' => 'confirmation', 'uses' => 'UsersController@confirm']);
    Route::post('/register', 'UsersController@register');
});

Route::group(['before' => 'userIsNotAuth'], function() {
    Route::get('/logout', 'UsersController@logout');
    Route::post('/sendEmailToAdmin', 'UsersController@sendEmailToAdmin');
    Route::post('/saveComment', 'CommentsController@save');
    Route::post('/vote', 'UsersController@vote');
});

Route::get('/opinions/{id?}', 'PagesController@showOpinion');
Route::get('/renderOpinion', 'OpinionsController@renderOpinion');
Route::get('/getMoreOpinions', 'OpinionsController@getMoreOpinions');
Route::get('/suggestions', 'PagesController@showSuggestions');
Route::get('/contact', 'PagesController@showContact');
Route::get('/', ['as' => 'home', 'uses' => 'PagesController@showHome']);