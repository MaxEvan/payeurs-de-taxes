<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->call('UsersTableSeeder');
		$this->call('OpinionsTableSeeder');
	}

}

class UsersTableSeeder extends Seeder {
	public function run()
	{
		DB::table('users')->delete();
		User::create( array('username' => 'beta', 'password' => Hash::make('pdtxbeta123')) );
	}
}

class OpinionsTableSeeder extends Seeder {
	public function run()
	{
		DB::table('opinions')->delete();
		for($i=1; $i<11; $i++)
		{
			Opinion::create( 
				['title' => 'TITRE ' . $i, 
				 'content' => 'content ' . $i, 
				 'date' => '2015-01-0' . $i, 
				 'image' => '/img/vole.jpg', 
				 'pour' => rand(1, 20), 
				 'contre' => rand(1, 20), 
				 'resume' => 'resume ' . $i] 
			);
		}
	}
}