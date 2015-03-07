<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('username', 30)->unique();
            $table->string('password', 60);
            $table->string('email')->unique();
            $table->boolean('admin')->default(0);
            $table->boolean('active')->default(0);;
            $table->boolean('confirmed')->default(0);
            $table->string('confirmation_code')->nullable();
            $table->binary('voted_for')->nullable();
            $table->rememberToken();
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
        Schema::table('users', function(Blueprint $table)
        {
            Schema::drop('users');
        });
    }

}
