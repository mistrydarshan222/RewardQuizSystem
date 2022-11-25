<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\admin\featuredquestion;
use App\Http\Controllers\Controller;

class FeaturedQueController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */    

    function index() {
        $featuredquestion = featuredquestion::all();      

        return view('admin.featuredque',['featuredquestion' => $featuredquestion]);
    }

    function Store(Request $request) {

        $validated = $request->validate([
            'question' => 'required',
            'option1' => 'required',
            'option2' => 'required',
            'option3' => 'required',
            'option4' => 'required',
            'correct' => 'required',            
        ]);

        featuredquestion::create([
            'question' => $request->question,            
            'option1' => $request->option1,
            'option2' => $request->option2,
            'option3' => $request->option3,
            'option4' => $request->option4,
            'correct' => $request->correct,
        ]);


        return back()
        ->with('message', 'You have successfully Added Featured Question.');
    }

    function edited(Request $request){        
        $featuredquestion = featuredquestion::find($request->id);

        $data = [
            'question' => $request->question,
            'option1' => $request->option1,
            'option2' => $request->option2,
            'option3' => $request->option3,
            'option4' => $request->option4,
            'correct' => $request->correct,
        ];
           
        $featuredquestion->update($data);        
        
        return back()
        ->with('message', 'You have successfully Edited Question.');

    }

    function deleted($id){

        featuredquestion::where('id', $id)->delete();
        return back()
        ->with('message', 'You have successfully Deleted Question.');

    }

}
