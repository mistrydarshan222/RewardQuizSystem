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
        Schema::table('playedquiz', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('playedquiz_id');
            $table->foreign('playedquiz_id')->references('id')->on('playedquiz')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('playedquiz', function (Blueprint $table) {
            //

            $table->unsignedBigInteger('user_id');


        });
    }
};
