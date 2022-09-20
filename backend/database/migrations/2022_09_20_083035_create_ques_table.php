<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ques', function (Blueprint $table) {
            $table->id();
            $table->text('Que');
            $table->text('Option1');
            $table->text('Option2');
            $table->text('Option3');
            $table->text('Option4');
            $table->text('Correct');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ques');
    }
};
