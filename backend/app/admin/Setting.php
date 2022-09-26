<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'logo', 'favicon','title', 'headerScript', 'footerScript',
    ];
    use HasFactory;
}
