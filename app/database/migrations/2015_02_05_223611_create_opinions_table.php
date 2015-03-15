<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOpinionsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opinions', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('title');
            $table->string('resume');
            $table->mediumText('content');
            $table->string('author');
            $table->datetime('date');
            $table->string('tags');
            $table->string('image');
            $table->integer('pour')->default(0);
            $table->integer('contre')->default(0);
            $table->tinyInteger('active')->default(1);
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
        Schema::drop('opinions');
    }

}
