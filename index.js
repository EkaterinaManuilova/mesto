//функция открытие/закрытие попапа
function EditForm() {
    document.querySelector(".popup_type_edit").classList.toggle('popup_opened');
}

//находим кнопку редактирования формы для профиля, вешаем обработчик клика, открываем форму редактирования профиля
let editButton = document.querySelector(".button_type_edit");
editButton.addEventListener('click', EditForm);
//закрываем форму редактирования профиля нажатием на крестик
let editCloseButton = document.querySelector(".popup_type_edit .button_type_close");
editCloseButton.addEventListener('click', EditForm);
//редактируем профиль с помощью формы редактирования
//находим форму
let formElement = document.querySelector('.form_type_edit');
//пишем функцию для  получения введенных  в форму значений и присваиваем их тсоответствующим екстовым полям профиля
function formSubmitHandler(evt) {
	evt.preventDefault(); //отменяем стандартные действия браузера
	let nameInput = formElement.querySelector(".username").value;
	let jobInput = formElement.querySelector(".profession").value;
	
    document.querySelector(".profile__username").textContent = nameInput;
    document.querySelector(".profile__userjob").textContent = jobInput;

}
//вешаем обработчик на кнопку отправки формы, применяем функцию и закрываем форму
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', EditForm);

//ставим лайки
let elementLike = document.querySelectorAll('.element__like');//выбираем все кнопки с сердечками
//пишем функцию, которая будет добавлять/удалять класс активейтед
function Like() {
    this.classList.toggle('activated');
}
//перебираем сердечки и вешаем обработчик клика на выбранные с функцией
//for (i=0; i<elementLike.length; i++) {
    //elementLike[i].addEventListener('click',Like)
//}

