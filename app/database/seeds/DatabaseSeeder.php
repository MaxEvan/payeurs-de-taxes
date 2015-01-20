<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->call('UserTableSeeder');
		// $this->call('ArticleTableSeeder');
	}

}

class UserTableSeeder extends Seeder {
	public function run()
	{
		DB::table('users')->delete();
		User::create( array('username' => 'beta', 'password' => Hash::make('pdtxbeta123')) );
	}
}

class ArticleTableSeeder extends Seeder {
	public function run()
	{
		DB::table('articles')->delete();
		Article::create( array('title' => 'TITRE 1', 'content' => 'content', 'date' => '2015-01-01', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 2', 'content' => 'content', 'date' => '2015-01-02', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 3', 'content' => 'content', 'date' => '2015-01-03', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 4', 'content' => 'content', 'date' => '2015-01-04', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 5', 'content' => 'content', 'date' => '2015-01-05', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 6', 'content' => 'content', 'date' => '2015-01-06', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 7', 'content' => 'content', 'date' => '2015-01-07', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
		Article::create( array('title' => 'TITRE 8', 'content' => 'content', 'date' => '2015-01-08', 'image' => '/img/vole.jpg', 'resume' => 'resume') );
	}
}