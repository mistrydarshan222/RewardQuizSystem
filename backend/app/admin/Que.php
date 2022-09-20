<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Que extends Model
{
    protected $fillable = [ 'que', 'option1','option2','option3','option4','correct','quiz_id'];

    use HasFactory;
}
