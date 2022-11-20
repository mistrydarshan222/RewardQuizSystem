<?php

namespace App\Http\Controllers\admin;

use App\admin\Que;
use App\admin\Quiz;
use App\admin\Order;
use App\admin\Product;
use App\admin\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller {
    //

    function index() {
        $category = Category::all();
        return view('admin.category', ['category' => $category]);
    }

    function dashboard(){

        $counter_products = Product::count();
        $counter_order = Order::count();
        $counter_category = Category::count();
        $counter_que = Que::count();
        $counter_question = Quiz::count();

        $counters = array();
        $counters['Products'] = $counter_products;
        $counters['Orders'] = $counter_order;
        $counters['Categories'] = $counter_category;
        $counters['Questions'] = $counter_que;
        $counters['Quizes'] = $counter_question;

        return view('admin.dashboard', compact('counters'));

    }
    function update(Request $request) {

        $category = Category::find($request->id);

        if ($request->image) {
            $validator =    Validator::make($request->all(), [
                    'name' => 'required',
                    'image' => 'required|image|mimes:jpeg,png,jpg,webp',
                ]);
               
                if ($validator->fails()) {
                    return response()->json([
                                 $validator->errors()->all()
                    ],201);
                }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            $category->update([
                'name' => str_replace("-"," ", $request->name),

                'image' => $imageName,
            ]);
        }
        else {
                $request->validate([
                    'name' => 'required',
                ]);
                    $category->update([
                        'name' => str_replace("-"," ", $request->name),


                    ]);
                }
                $returndata['success'] = "Done";
                return response()->json($returndata, 200);
    }
    
    function Store(Request $request) {


        $validated = $request->validate([
            'name' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg',
        ]);


        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        Category::create([
            'name' => str_replace("-"," ", $request->name),
            'image' => $imageName,
        ]);


        return back()
            ->with('message', 'You have successfully Added Caetgory.');
    }

    function delete($id){

        Category::where('id', $id)->delete();
        $returndata['success'] = "Done";
        return response()->json($returndata, 200);

    }


}
