"use strict"

document.addEventListener("click", documentClick) //делегирование клика отслеживаем куда кликнули 

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')){ //если на бургер или дочерний элемент то добавляем или убираем класс
		document.documentElement.classList.toggle('menu-open');
	}
}