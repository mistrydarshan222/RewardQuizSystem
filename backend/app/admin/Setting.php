<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'logo', 'favicon','title', 'metadescription', 'metakeywords', 'metaogdescription', 'headerScript', 'footerScript','publisherid','Firstpageinstructions','LoginPageinstructions', 'quizrules', 'privacypolicy'
    ];
    use HasFactory;
}
