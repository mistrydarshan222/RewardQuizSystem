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
        Schema::create('playedquiz', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('playedquiz');
            $table->unsignedBigInteger('quiz_id');
            $table->foreign('playedquiz_id')->references('id')->on('playedquiz')->onDelete('cascade');
            $table->foreign('quiz_id')->references('id')->on('quiz')->onDelete('cascade');
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
        Schema::dropIfExists('playedquiz');
    }
};
