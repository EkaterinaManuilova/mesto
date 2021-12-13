const editButton = document.querySelector('.button_type_edit');
const editCloseButton = document.querySelector('.popup_type_edit .button_type_close');
const formElement = document.querySelector('.form_type_edit');
let profileUserName = document.querySelector('.profile__username');
let profileUserJob = document.querySelector('.profile__userjob');
let nameInput = formElement.querySelector('.form__input_name_username');
let jobInput = formElement.querySelector('.form__input_name_profession');

function editForm() {
    document.querySelector('.popup_type_edit').classList.toggle('popup_opened');
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

function formSubmitHandler(evt) {
	evt.preventDefault(); 
	
	profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;

    editForm();
}

editButton.addEventListener('click', editForm);
editCloseButton.addEventListener('click', editForm);
formElement.addEventListener('submit', formSubmitHandler);


