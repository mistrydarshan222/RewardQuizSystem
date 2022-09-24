<?php

namespace App\Http\Controllers\Api;
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

use App\admin\Player;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class PlayerController extends Controller
{
    function playerSave(Request $request){
        $alldata = $request->json()->all();

        $name =  ($alldata['name']  ?? null ? $alldata['name'] : null);
        $email =  ($alldata['email']  ?? null ? $alldata['email'] : null);
        $profile_pic =  ($alldata['profile_pic']  ?? null ? $alldata['profile_pic'] : null);
        $coins =  ($alldata['coins']   ?? null  ? $alldata['coins'] : 0);
        $phone_number =  ($alldata['phone_number']  ?? null ? $alldata['phone_number'] : null);



        try {
           $user = Player::create([
                'name' => $name,
                'email' =>$email,
                'profile_pic' =>$profile_pic,
                'coins' =>$coins,
                'phone_number' =>$phone_number,
            ]);

         return response()->json([
            'data'    =>  $user,
        ], 200);

         } catch (\Exception $e) {

            if ($e->getCode() == 23000) {
            $playerData = Player::where('email', $email)->first();

                return response()->json([
                    'data'    => $playerData,
                ], 200);


            }
         }
    }

}
