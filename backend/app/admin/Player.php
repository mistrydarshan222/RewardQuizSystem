<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = [
        'name', 'email','profile_pic', 'phone_number', 'coins',
    ];
    use HasFactory;
}
