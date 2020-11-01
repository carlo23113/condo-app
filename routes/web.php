<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Auth::routes();

Route::post('/login', 'AccountsController@login');
Route::post('/logout', 'AccountsController@logout');

Route::get("/checksession","AccountsController@session");

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{any}', function () {

    return view('home');

})->where("any", ".*");