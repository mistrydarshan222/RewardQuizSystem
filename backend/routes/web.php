<?php

use Spatie\FlareClient\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\admin\QueController;
use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\QuizController;
use App\Http\Controllers\admin\OrderController;
use App\Http\Controllers\admin\SettingController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ProductsController;
use App\Http\Controllers\admin\ForgotPasswordController;

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
// Route::get('/', function () { return view('admin.dashboard'); })->name('dashboard')->middleware(['auth']);

    Route::group(['prefix' => 'admin', 'middleware' => ['auth'] ], function(){
    
    // Route::get('/', function () { return view('admin.dashboard'); })->name('dashboard');
    Route::get('/', [CategoryController::class, 'dashboard'])->name('dashboard');
    Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
    Route::post('/category', [CategoryController::class, 'store'])->name('category.store');

    Route::post('/category/update', [CategoryController::class, 'update'])->name('category.update');
    Route::post('/category/delete/{id}', [CategoryController::class, 'delete'])->name('category.delete');
    // Route::get('/category', function () { return view('admin.category'); });


    // Quiz WEB

    Route::get('/quiz', [QuizController::class, 'index'])->name('quiz.index');
    Route::post('/quiz', [QuizController::class, 'store'])->name('quiz.store');

    Route::get('/quiz/edit/{id}', [QuizController::class, 'edit'])->name('quiz.edit.index');
    Route::post('/quiz/edited/{id}', [QuizController::class, 'editStore'])->name('quiz.edit.store');
    Route::get('/quiz/delete/{id}', [QuizController::class, 'delete'])->name('quiz.delete');


    // question

    Route::get('/que/{id}', [QueController::class, 'index'])->name('que.index');
    Route::post('/que', [QueController::class, 'store'])->name('que.store');
    Route::post('/que/edited', [QueController::class, 'edited'])->name('que.edited');
    Route::get('/que/deleted/{id}', [QueController::class, 'deleted'])->name('que.deleted');



    Route::get('/otp/{number}', [QueController::class, 'sendOTP'])->name('que.sendOTP');

    Route::get('/setting', [SettingController::class, 'index'])->name('setting');
    Route::post('/setting', [SettingController::class, 'update'])->name('update.setting');

    //products

    Route::get('/products', [ProductsController::class, 'index'])->name('products.index');
    Route::post('/products', [ProductsController::class, 'store'])->name('products.store');
    Route::post('/products/edited', [ProductsController::class, 'update'])->name('products.edited');
    Route::get('/products/deleted/{id}', [ProductsController::class, 'delete'])->name('products.deleted');

     //order

     Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
     Route::post('/orders', [OrderController::class, 'update'])->name('orders.update');

     
     

});

Route::get('/', function () { return redirect()->route('dashboard'); });




Route::get('login', [AuthController::class, 'index'])->name('login');
Route::post('post-login', [AuthController::class, 'postLogin'])->name('login.post');
Route::get('registration', [AuthController::class, 'registration'])->name('register');
Route::post('post-registration', [AuthController::class, 'postRegistration'])->name('register.post');
// Route::get('dashboard', [AuthController::class, 'dashboard']);
Route::get('logout', [AuthController::class, 'logout'])->name('logout');

//forgotpassword
Route::get('forget-password', [ForgotPasswordController::class, 'showForgetPasswordForm'])->name('forget.password.get');
Route::post('forget-password', [ForgotPasswordController::class, 'submitForgetPasswordForm'])->name('forget.password.post'); 
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetPasswordForm'])->name('reset.password.get');
Route::post('reset-password', [ForgotPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');



Route::get('/cache', function() {
    Artisan::call('cache:clear');

    dd("Cache Clear All");
});



// Route::group(['prefix' => 'email'], function(){
//     Route::get('inbox', function () { return view('pages.email.inbox'); });
//     Route::get('read', function () { return view('pages.email.read'); });
//     Route::get('compose', function () { return view('pages.email.compose'); });
// });

// Route::group(['prefix' => 'apps'], function(){
//     Route::get('chat', function () { return view('pages.apps.chat'); });
//     Route::get('calendar', function () { return view('pages.apps.calendar'); });
// });

// Route::group(['prefix' => 'ui-components'], function(){
//     Route::get('accordion', function () { return view('pages.ui-components.accordion'); });
//     Route::get('alerts', function () { return view('pages.ui-components.alerts'); });
//     Route::get('badges', function () { return view('pages.ui-components.badges'); });
//     Route::get('breadcrumbs', function () { return view('pages.ui-components.breadcrumbs'); });
//     Route::get('buttons', function () { return view('pages.ui-components.buttons'); });
//     Route::get('button-group', function () { return view('pages.ui-components.button-group'); });
//     Route::get('cards', function () { return view('pages.ui-components.cards'); });
//     Route::get('carousel', function () { return view('pages.ui-components.carousel'); });
//     Route::get('collapse', function () { return view('pages.ui-components.collapse'); });
//     Route::get('dropdowns', function () { return view('pages.ui-components.dropdowns'); });
//     Route::get('list-group', function () { return view('pages.ui-components.list-group'); });
//     Route::get('media-object', function () { return view('pages.ui-components.media-object'); });
//     Route::get('modal', function () { return view('pages.ui-components.modal'); });
//     Route::get('navs', function () { return view('pages.ui-components.navs'); });
//     Route::get('navbar', function () { return view('pages.ui-components.navbar'); });
//     Route::get('pagination', function () { return view('pages.ui-components.pagination'); });
//     Route::get('popovers', function () { return view('pages.ui-components.popovers'); });
//     Route::get('progress', function () { return view('pages.ui-components.progress'); });
//     Route::get('scrollbar', function () { return view('pages.ui-components.scrollbar'); });
//     Route::get('scrollspy', function () { return view('pages.ui-components.scrollspy'); });
//     Route::get('spinners', function () { return view('pages.ui-components.spinners'); });
//     Route::get('tabs', function () { return view('pages.ui-components.tabs'); });
//     Route::get('tooltips', function () { return view('pages.ui-components.tooltips'); });
// });

// Route::group(['prefix' => 'advanced-ui'], function(){
//     Route::get('cropper', function () { return view('pages.advanced-ui.cropper'); });
//     Route::get('owl-carousel', function () { return view('pages.advanced-ui.owl-carousel'); });
//     Route::get('sortablejs', function () { return view('pages.advanced-ui.sortablejs'); });
//     Route::get('sweet-alert', function () { return view('pages.advanced-ui.sweet-alert'); });
// });

// Route::group(['prefix' => 'forms'], function(){
//     Route::get('basic-elements', function () { return view('pages.forms.basic-elements'); });
//     Route::get('advanced-elements', function () { return view('pages.forms.advanced-elements'); });
//     Route::get('editors', function () { return view('pages.forms.editors'); });
//     Route::get('wizard', function () { return view('pages.forms.wizard'); });
// });

// Route::group(['prefix' => 'charts'], function(){
//     Route::get('apex', function () { return view('pages.charts.apex'); });
//     Route::get('chartjs', function () { return view('pages.charts.chartjs'); });
//     Route::get('flot', function () { return view('pages.charts.flot'); });
//     Route::get('morrisjs', function () { return view('pages.charts.morrisjs'); });
//     Route::get('peity', function () { return view('pages.charts.peity'); });
//     Route::get('sparkline', function () { return view('pages.charts.sparkline'); });
// });

// Route::group(['prefix' => 'tables'], function(){
//     Route::get('basic-tables', function () { return view('pages.tables.basic-tables'); });
//     Route::get('data-table', function () { return view('pages.tables.data-table'); });
// });

// Route::group(['prefix' => 'icons'], function(){
//     Route::get('feather-icons', function () { return view('pages.icons.feather-icons'); });
//     Route::get('flag-icons', function () { return view('pages.icons.flag-icons'); });
//     Route::get('mdi-icons', function () { return view('pages.icons.mdi-icons'); });
// });

// Route::group(['prefix' => 'general'], function(){
//     Route::get('blank-page', function () { return view('pages.general.blank-page'); });
//     Route::get('faq', function () { return view('pages.general.faq'); });
//     Route::get('invoice', function () { return view('pages.general.invoice'); });
//     Route::get('profile', function () { return view('pages.general.profile'); });
//     Route::get('pricing', function () { return view('pages.general.pricing'); });
//     Route::get('timeline', function () { return view('pages.general.timeline'); });
// });

// Route::group(['prefix' => 'auth'], function(){
//     Route::get('login', function () { return view('pages.auth.login'); });
//     Route::get('register', function () { return view('pages.auth.register'); });
// });

Route::group(['prefix' => 'error'], function(){
    Route::get('404', function () { return view('pages.error.404'); });
    Route::get('500', function () { return view('pages.error.500'); });
});

Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});

// 404 for undefined routes
// Route::any('/{page?}',function(){
//     return View::make('pages.error.404');
// })->where('page','.*');
