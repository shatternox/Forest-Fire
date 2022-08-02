<?php

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

Route::prefix('v1')->group(function () {

    Route::get('/login', function() {
        abort(403);
    });
    
    Route::post('/login', function(Request $request) {
        $email = $request->input('email');
        $password = $request->input('password');

        if(empty($email) || empty($password)){
            return 'Credentials harus diisi!';
        }

        $r = array(
            "email"=>$email,
            "status"=>"Wrong Credentials!"
        );
        
        return response($r, 200)->header('Content-Type', 'application/json');
    });
    
    Route::get('/ticket', function() {
        abort(403);
    });
    
    Route::post('/ticket', function(Request $request) {
        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $concern = $request->input('concern');

        if(empty($name) || empty($email) || empty($phone) || empty($concern)){
            return array(
                "name"=>$name,
                "email"=>$email,
                "phone"=>$phone,
                "concern"=>$concern,
                "status"=>"Semua data harus diisi"
            );
        }

        $r = array(
            "name"=>$name,
            "email"=>$email,
            "phone"=>$phone,
            "concern"=>$concern,
            "status"=>"Ticket berhasil dimasukkan!"
        );
        return response($r, 200)->header('Content-Type', 'application/json');
    });


    // Injection point.
    Route::post('/donation', function(Request $request) {

        $donation_value = $request->input("donationVal");

        if(!is_numeric($donation_value)){
            throw new Exception("Please enter a valid number");
        }

        $r = array(
            "status"=>"Donasi berhasil, terima kasih banyak!"
        );
        
        return response($r, 200)->header('Content-Type', 'application/json');
    });

});






