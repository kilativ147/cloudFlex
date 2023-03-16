cls();
function cls(){console.clear();}

//Меню бургер
const burgerContainer = document.querySelector('.header__container');
const burgerButton = document.querySelector('.header__burger');
if (burgerContainer){
  document.addEventListener("click", (event)=>{
		if (event.target.closest('.header__burger')) {
      burgerButton.classList.toggle('_active');
      burgerContainer.classList.toggle('_active');
      document.body.classList.toggle('._lock');
    }
	}); 
}

//Меню мови
const langButton = document.querySelector('.menu__lang-button');
const langList = document.querySelector('.menu__lang-list');
if (langList){
	document.addEventListener("click", (event)=>{
		if (event.target.closest('.menu__lang-button')) langList.classList.toggle('_active');
		if (!event.target.closest('.menu__lang-button')) langList.classList.remove('_active');
	})
}
document.addEventListener('keyup', (event)=>{
		if (event.code ==='Escape') {
			burgerButton.classList.remove('_active');
			burgerContainer.classList.remove('_active');
			langList.classList.remove('_active');
		}
	});


//Ініціалізація навігаційних посилань
	var navButs = document.querySelectorAll(".menu__link");
	for (var x = 0; x < navButs.length; x++) navButs[x].addEventListener("click", scrollToTarget);

//Скролінг сторінки
function scrollToTarget(event) {
	event.preventDefault(); //відключення переходу за посиланням
	let targetId = event.target.closest('a').getAttribute('href'); //зчитування посилання
	let target = document.querySelector(targetId); //знаходимо об'єкт вказаний у посиланні
	let offset = -100;
	let bodyRect = document.body.getBoundingClientRect().top;	//позиція екрану
	let targetRect = target.getBoundingClientRect().top;	//позиція цілі скролу
	let targetPosition = targetRect - bodyRect; //відстань між нимим
	let offsetPosition = targetPosition + offset; //додати поправку на хедер
	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
	if (burgerButton && burgerContainer){
		burgerButton.classList.remove('_active');
		burgerContainer.classList.remove('_active');
	}
};