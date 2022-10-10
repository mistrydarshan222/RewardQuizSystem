<?php

namespace App\Http\Controllers\Api;
header('Access-Control-Allow-Origin: *');

use App\admin\Que;
use App\admin\Quiz;
use App\admin\Order;
use App\admin\Player;
use App\admin\product;
use App\admin\Setting;
use App\admin\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    function order(Request $request){
        $alldata = $request->json()->all();
        $player_id =  $alldata['player_id'];
        $product_id =  $alldata['product_id'];
        $coins =  $alldata['coins'];      

        $player = DB::table('players')->where('id','=', $player_id)
        ->get('coins');
        $Foundplayer = Player::find($player_id);
        $playerCoins = $player[0]->coins;
        if((int) $playerCoins >= (int) $coins){
           $order = Order::create([
                'player_id' => $player_id,
                'product_id' => $product_id,   
                'status' => "Pending"
            ]);
            $finalcoins = ((int) $playerCoins - (int) $coins);
  
            $Foundplayer->update([
                'coins' => $finalcoins
            ]);
            

        return response()->json($order, 200);   
        }
        else{
            return response()->json("NO COINS", 404);        
        }
        return response()->json("Technical Error", 500);      
    }

    public function playedQuiz($id){
       
        $player = DB::table('playedquiz')->where('player_id','=',$id)->count();
        
        return response()->json($player, 200);      




    }

    
    
}
