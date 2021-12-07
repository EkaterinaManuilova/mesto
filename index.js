
function openEditForm() {
    document.querySelector(".popup_type_edit").classList.add('popup_opened');
}

function closeEditForm(){
    document.querySelector(".popup_type_edit").classList.remove('popup_opened');
}

let editButton = document.querySelector(".button_type_edit");
editButton.addEventListener('click', openEditForm);

let editCloseButton = document.querySelector(".popup_type_edit .button_type_close");
editCloseButton.addEventListener('click', closeEditForm);

let formElement = document.querySelector('.form_type_edit');

function formSubmitHandler(evt) {
	evt.preventDefault(); 
	let nameInput = formElement.querySelector(".input__username").value;
	let jobInput = formElement.querySelector(".input__profession").value;
	
    document.querySelector(".profile__username").textContent = nameInput;
    document.querySelector(".profile__userjob").textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closeEditForm);
