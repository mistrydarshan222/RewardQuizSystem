<?php

namespace App\Http\Controllers\admin;

use App\admin\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller {
    //

    function index() {
        $category = Category::all();
        return view('admin.category', ['category' => $category]);
    }

    function update(Request $request) {

        $category = Category($request->id);

        if ($request->image) {
                $request->validate([
                    'name' => 'required',
                    'image' => 'required|image|mimes:jpeg,png,jpg',
                ]);


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
