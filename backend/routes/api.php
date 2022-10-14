<?php

use App\Http\Controllers\admin\ProductsController;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\PlayerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', [MainController::class, 'AllCategory'])->name('main.allquiz');

Route::get('/featured-que', [MainController::class, 'FeaturedQue'])->name('main.featuredque');

Route::get('/quizzes', [MainController::class, 'AllQuiz'])->name('main.allquiz');

Route::get('/quiz/{id}', [MainController::class, 'singlequiz'])->name('main.singlequiz');

Route::get('/que/{id}', [MainController::class, 'SingleQue'])->name('main.singleque');

Route::get('/category/{name}', [MainController::class, 'singlecategory'])->name('main.singlecategory');

Route::post('/player/save', [PlayerController::class, 'playerSave'])->name('main.playerSave');

Route::get('/setting', [MainController::class, 'settingData'])->name('setting');

Route::post('/playedquiz', [PlayerController::class, 'Playedquiz'])->name('Playedquiz');

Route::post('/checkedplayedquiz', [PlayerController::class, 'checkedplayedquiz'])->name('checkedplayedquiz');

Route::get('/products', [MainController::class, 'products'])->name('products');

Route::post('/order', [MainController::class, 'order'])->name('order');

Route::get('/playedQuiz/{id}', [MainController::class, 'playedQuiz'])->name('playedQuiz');

Route::post('/coinupdate', [MainController::class, 'coinupdate'])->name('coinupdate');






