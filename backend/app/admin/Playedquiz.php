<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playedquiz extends Model
{

    use HasFactory;

    protected $table = 'playedquiz';

    protected $fillable = [ 'player_id', 'quiz_id'];

}
