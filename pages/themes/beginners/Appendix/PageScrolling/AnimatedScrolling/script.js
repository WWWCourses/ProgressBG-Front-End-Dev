const scroller = {
	init(){
		this.nodes = this.nodes || this.getNodes();
		this.attachEvents();
		// set focus to first page:
		this.nodes.pages[0].classList.add("focus")
	},
	getNodes(){
		return {
			navLinks : document.querySelectorAll("header>nav>a"),
			pages : document.querySelectorAll("main>section.pages>article"),
		};
	},
	attachEvents(){
		this.nodes.navLinks.forEach((navLink, navLinkIndex)=>{
			navLink.addEventListener("click", this.scrollPage(navLinkIndex));
		})
	},
	scrollPage(navLinkIndex){
		return	function(e){
			scroller.nodes.pages.forEach(page=>{
				page.classList.remove("focus");
			})

			scroller.nodes.pages[navLinkIndex].classList.add("focus")
		}
	}
}

scroller.init();