let dom = {
	navResponsiveIcon : document.querySelector('.nav-responsive-icon'),
	navMenu: document.querySelector('.nav-menu'),
}

dom.navResponsiveIcon.addEventListener('click', function (e) {
	// toggle between hamburger/close icon
	e.target.classList.toggle('active');

	// show/hide nav menu
	dom.navMenu.classList.toggle('active');
})