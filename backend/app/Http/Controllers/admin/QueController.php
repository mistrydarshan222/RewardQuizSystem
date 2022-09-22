<?php

namespace App\Http\Controllers\admin;

use App\admin\Que;

use Twilio\Rest\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class QueController extends Controller
{
    //

    public function index($id){

        $que = DB::table('ques')->where('quiz_id', $id)->get();

        return view('admin.que',['que'=>$que,'id'=>$id]);

    }
    function Store(Request $request) {

        $validated = $request->validate([
            'que' => 'required',
            'option1' => 'required',
            'option2' => 'required',
            'option3' => 'required',
            'option4' => 'required',
            'correct' => 'required',
            'quiz_id' => 'required'

        ]);

        Que::create([
            'que' => $request->que,
            'quiz_id' => $request->quiz_id,
            'option1' => $request->option1,
            'option2' => $request->option2,
            'option3' => $request->option3,
            'option4' => $request->option4,
            'correct' => $request->correct,

        ]);


        return back()
        ->with('message', 'You have successfully Added Question.');
    }

    function edited(Request $request){

        $category = Que::find($request->id);
        $request->validate([

            'que' => 'required',
            'option1' => 'required',
            'option2' => 'required',
            'option3' => 'required',
            'option4' => 'required',
            'correct' => 'required',
            'quiz_id' => 'required',

        ]);
        $category->update([
            'que' => $request->que,
            'option1' => $request->option1,
            'option2' => $request->option2,
            'option3' => $request->option3,
            'option4' => $request->option4,
            'correct' => $request->correct,
            'quiz_id' => $request->quiz_id

        ]);
        return back()
        ->with('message', 'You have successfully Edited Question.');

    }

    function deleted($id){

        Que::where('id', $id)->delete();
        return back()
        ->with('message', 'You have successfully Deleted Question.');

    }

    public function sendOTP($number){

      

       

        $token = "ACf909568a8d2f285fc339fb0b06e73366";
        $twilio_sid = "fa35bbd69d04fd422e4780d84800d064";
       
        $twilio = new Client($twilio_sid, $token);
        $verification = $twilio->verify->v2->services("VA088170279b5611843ce60075f852ef84")
                                   ->verifications
                                   ->create("917990039931", "sms");


        dd($verification->status);


    }
}
