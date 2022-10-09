<?php

namespace App\Http\Controllers\admin;

use App\admin\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    
    public function index(){   
        $products = product::all();
        return view('admin.products', ['products' => $products]);     
    }
     
    public function store(Request $request){
        $validated = $request->validate([            
            'name' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg',            
            'coins' => 'required'           
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        Product::create([
            'name' => $request->name,
            'image' => $imageName,
            'description' => $request->description,
            'coins' => $request->coins,           
        ]);

        return back()
        ->with('message', 'You have successfully Added Product.');
    }

    function update(Request $request) {
    
        $products = product::find($request->id);
        $data = [
        'name' => $request->name,
        'description' => $request->description,
        'coins' => $request->coins];
        if($request->image){
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            $data['image'] = $imageName;

        }
        $products->update($data);

        return back()
        ->with('message', 'You have successfully Updated Product.');
    }

    function delete($id){
        Product::where('id', $id)->delete();

        return back()
        ->with('message', 'You have successfully Updated Product.');
      
    }
    
 
}
