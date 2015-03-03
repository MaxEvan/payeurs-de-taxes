<?php

Route::group(['before' => 'userIsAuth'], function() {
    Route::get('/login', ['as' => 'login', 'uses' => 'PagesController@showLogin']);
    Route::get('/register/confirmation', ['as' => 'confirmation', 'uses' => 'PagesController@showConfirmation']);
    Route::get('/register', ['as' => 'register', 'uses' => 'PagesController@showRegister']);
    Route::post('/login', 'UsersController@login');
    Route::post('/register/confirmation', 'UsersController@confirm');
    Route::post('/register', 'UsersController@register');
});



Route::group(['before' => 'userIsNotAuth'], function() {    
    Route::get('/', ['as' => 'home', 'uses' => 'PagesController@showHome']);
    Route::get('/logout', 'UsersController@logout');
    Route::get('/opinions/{id?}', 'PagesController@showOpinion');
    Route::get('/renderOpinion', 'OpinionsController@renderOpinion');
    Route::get('/getMoreOpinions', 'OpinionsController@getMoreOpinions');
    Route::get('/suggestions', 'PagesController@showSuggestions');
    Route::get('/contact', 'PagesController@showContact');
    Route::post('/vote', 'UsersController@checkVote');
});