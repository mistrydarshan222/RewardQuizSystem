<?php

namespace App\Http\Controllers\admin;

use App\admin\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    //
    function index() {

        $data = DB::table('settings')->where('id', 1)->get();
        return view('admin.setting',['data'=>$data]);
    }

    function update(Request $request){
       
        $setting = Setting::find(1);


        $validated = $request->validate([
            'title' => 'required',
            'logo' => 'image|mimes:jpeg,png,jpg',
            'favicon' => 'image|mimes:jpeg,png,jpg',
        ]);

        $data  = [
            'title' => $request->title,
            'metadescription'=> $request->metadescription,
            'headerScript' => $request->headerScript,
            'footerScript' => $request->footerScript, 
            'publisherid' =>    $request->publisherid,
            'Firstpageinstructions' => $request->Firstpageinstructions, 
            'LoginPageinstructions' => $request->LoginPageinstructions,
        ];
        
        if($request->logo){
            $logoName = time() . '.' . $request->logo->extension();
            $request->logo->move(public_path('images'), $logoName);
            $data['logo'] =  $logoName;
        }

        
        if($request->favicon){
            $faviconName = time() .time(). '.' . $request->favicon->extension();
            $request->favicon->move(public_path('images'), $faviconName);
            $data['favicon'] =  $faviconName;            
        }
       
      $result =  $setting->update($data);
        return back()
        ->with('message', 'You have Changed Settings.');
    }
}
