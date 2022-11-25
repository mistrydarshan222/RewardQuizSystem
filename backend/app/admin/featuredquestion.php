<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class featuredquestion extends Model
{
    use HasFactory;
    protected $table = 'featuredquestion';

    protected $fillable = ['question', 'option1','option2', 'option3','option4', 'correct'];
}
