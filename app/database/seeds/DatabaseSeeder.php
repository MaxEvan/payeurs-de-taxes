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
				 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac consectetur dolor, quis mollis nulla. Etiam a varius nibh. Aenean id nulla mollis, venenatis lacus vel, iaculis nisi. Vestibulum sed tempor augue. Maecenas congue facilisis magna, eget ornare urna dignissim vitae. Fusce pellentesque nisi id elit maximus viverra. Morbi venenatis, elit a tincidunt porta, libero libero eleifend mi, in laoreet augue nulla quis massa. Mauris eu nulla odio. Mauris accumsan pharetra nisl, at eleifend velit molestie in. Etiam pulvinar ex lectus, sed cursus velit pretium sed. Pellentesque auctor laoreet dui, ut maximus ligula fermentum sed. Donec fringilla vulputate justo quis consequat. Proin gravida viverra elit nec congue. Morbi ac metus a sapien interdum ultrices. Suspendisse potenti.Suspendisse ac tortor in est posuere placerat. Nunc ligula tortor, dapibus in libero ut, fermentum fringilla arcu. Phasellus scelerisque semper libero, sed mollis orci euismod a. Integer sollicitudin, mi id fringilla condimentum, sapien dui tristique ipsum, quis sagittis diam eros ut lorem. Vestibulum dignissim auctor pretium. Sed libero nisl, laoreet non sodales sit amet, malesuada a nulla. Vivamus egestas non sem at rutrum. Phasellus vel lobortis turpis. Duis consequat turpis nec quam lacinia, eu mattis orci euismod. Phasellus imperdiet ex dolor, id consectetur tortor ultricies non. Nullam viverra nisl quis imperdiet iaculis. Mauris luctus ultrices hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim sagittis quam, ut facilisis erat pulvinar eget. Curabitur facilisis tortor eget eros ullamcorper luctus. Etiam at vestibulum massa.Ut a fermentum lorem. Donec nec elit in erat convallis placerat eu a lorem. Vestibulum tincidunt, ex a gravida suscipit, augue quam placerat tortor, sed mattis ex sem nec lorem. Nunc mattis orci sed lorem ultricies bibendum. Aenean condimentum nisl neque, a pretium erat viverra id. Maecenas vehicula elit maximus, imperdiet quam in, malesuada dui. Donec vitae dolor est. In accumsan felis consequat luctus congue. Suspendisse varius luctus nibh, eget sagittis nibh. Quisque finibus efficitur condimentum. Donec rutrum nisi ut orci finibus ultricies. Aenean convallis nec ante eget aliquet. Suspendisse placerat lorem eu tellus vestibulum, quis cursus massa rutrum. Vestibulum posuere, elit id volutpat consectetur, lorem diam mattis neque, et pellentesque ex mauris eu risus. Nullam ornare faucibus ligula quis tempus.Maecenas tempor a arcu et facilisis. Vestibulum eget turpis libero. Cras eget maximus turpis, in aliquam justo. Mauris maximus, ante eu semper rhoncus, metus lacus varius augue, vitae posuere mauris quam ac est. Etiam pulvinar fringilla risus sodales varius. Duis ultrices varius tortor et lobortis. Cras vehicula sapien eget porttitor dapibus. In egestas pulvinar dolor eget congue. Suspendisse placerat sagittis lacus in ullamcorper. Nunc accumsan magna mi, vel viverra mauris scelerisque ac. Cras iaculis vitae mauris id mattis. In hac habitasse platea dictumst. Donec tempor augue mauris, ut sollicitudin arcu fermentum quis.In hac habitasse platea dictumst. Quisque porttitor odio id pellentesque molestie. Ut quis convallis massa. Aliquam sed neque ultrices, eleifend lectus eu, luctus purus. Integer blandit, massa ut scelerisque tincidunt, neque arcu interdum tortor, finibus porttitor sapien erat in libero. Sed non purus in magna fermentum commodo ut vel ligula. Etiam nibh ipsum, faucibus at diam ac, vulputate egestas enim. Integer lacinia nibh et risus ultrices, a commodo massa convallis.', 
				 'date' => '2015-01-0' . $i, 
				 'image' => '/img/vole.jpg', 
				 'pour' => rand(1, 20), 
				 'contre' => rand(1, 20), 
				 'resume' => 'resume ' . $i] 
			);
		}
	}
}