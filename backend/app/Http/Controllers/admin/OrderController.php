<?php

namespace App\Http\Controllers\admin;

use App\admin\Order;
use App\admin\Player;
use App\admin\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function index(){   
        $orders = Order::all();
        $orderDetails = array();
        foreach ($orders as $order) {
            $singleOrder = array();
            $singleOrder['order_id'] = $order->id;           
            $singleOrder['order_status'] = $order->status;           
            $players =  DB::table('players')->where('id','=', $order->player_id)->get();            ;
            $products =   Product::where('id', $order->product_id)->get();
            foreach($players as $player){
                $singleOrder['Player_name'] = $player->name;
                $singleOrder['Player_email'] = $player->email;
                $singleOrder['Player_phonenumber'] = $player->phone_number;          
            }
            foreach($products as $product){
                $singleOrder['Product_name'] = $product->name;
                $singleOrder['Product_image'] = $product->image;
                $singleOrder['Product_coins'] = $product->coins;
            }
            array_push($orderDetails, $singleOrder);
            }
          
     
        return view('admin.order')->with(compact('orderDetails'));       ;     
    }

    function update(Request $request){

        $status = $request->status;
        $order = Order::find($request->id);
        $order->update([
            "status"=> $status
        ]);
        return response()->json("DONE", 200);      


    }
}
