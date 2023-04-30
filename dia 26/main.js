const $menu_icon = document.querySelector('.menu_icon');
const $center=document.querySelector('.center');
const $menu = document.querySelector('.menu');
const $search_icon = document.querySelector('.search_icon');
const $search_input = document.querySelector('.search_input');
let menuOpen = false;

(function(){
			$menu_icon.addEventListener('click', function(){
		if(!menuOpen){
			$center.classList.add('active');
			$menu.classList.add('active');
			menuOpen = true;
		}
		else{
		$center.classList.remove('active');
		$menu.classList.remove('active');	
		menuOpen=false;
		}
	});

	$search_icon.addEventListener('click', function(){
		if(!menuOpen){
			$search_input.classList.add('active');
			menuOpen = true;
		}
		else{
			$search_input.classList.remove('active');
			menuOpen = false;
		}
	});
	
})();