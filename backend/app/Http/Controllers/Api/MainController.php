<?php

namespace App\Http\Controllers\Api;
header('Access-Control-Allow-Origin: *');

use App\admin\Que;
use App\admin\Quiz;
use App\admin\Setting;
use App\admin\product;

use App\admin\Category;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    //

    public function Allquiz(){   
        
        $Quiz = Quiz::all();
        return response()->json([
            'data'    =>  $Quiz
        ], 200);

    }
    public function FeaturedQue(){

        $Ques = Que::select('*')->inRandomOrder()->limit(2)->get();
        return response()->json([
            'data'    => $Ques
        ], 200);

    }
    public function AllCategory(){

        $category = Category::all();
        return response()->json([
            'data'    =>  $category
        ], 200);

    }
    public function SingleQue($id){
        $que =  Que::where('quiz_id', $id)->get();
        return response()->json([
            'data'    =>  $que
        ], 200);
    }

    public function singlequiz($id){
        $quiz =  Quiz::where('name', $id)->get();
        return response()->json([
            'data'    =>  $quiz
        ], 200);
    }

    public function singlecategory($name){
    
        $quiz =  Quiz::where('category', $name)->get();

        return response()->json([
            'data'    =>  $quiz
        ], 200);
    }


    public function settingData(){
    
        $setting =  Setting::where('id', 1)->get();

        return response()->json([
            'data'    =>  $setting
        ], 200);
    }



    function products(){
        $products = product::all();
        return response()->json($products, 200);
        
    }

    
}
