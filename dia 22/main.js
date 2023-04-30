const $menu = document.querySelector('.menu');
let menuOpen = false;
$menu.addEventListener('click', function(){
	if(!menuOpen){
		$menu.classList.add('open');
		menuOpen = true;
	}
	else{
		$menu.classList.remove('open');
		menuOpen = false;
	}
});