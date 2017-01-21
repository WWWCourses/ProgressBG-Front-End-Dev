// за да "прихванем" skrol върху целия прозорец:
window.addEventListener('scroll', changeHeader);

// хедъра, който ще променяме:
var headerNode = document.getElementsByTagName('header')[0];


// функция, която променя стила на header, когато
// потребителя скролне вертикално повече от половината
function changeHeader(){
	var bodyNode = document.body;
	// височината на vewport-a:
	var vh = window.innerHeight;
	// височината на реалното съдържание в body:
	var bh = bodyNode.scrollHeight;
	console.log("vh=", vh, "; bodyHeight=", bh);

	if ( bh>vh && bodyNode.scrollTop > (bh-vh)/2 ){
		headerNode.style.background = 'rgba(80, 80, 80, .5)';
		// headerNode.style.color = '#333';
		console.log("scrollTop" , document.body.scrollTop );
	}

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Задача за упражнение:
	// довършете функцията, така че когато потребителя се върне в
	// началото на страницата елементът (header) да връща оригиналното
	// си офомление
}