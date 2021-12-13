const editButton = document.querySelector('.button_type_edit');
const editPopup = document.querySelector('.popup_type_edit');
const editCloseButton = editPopup.querySelector('.button_type_close');
const formElement = document.querySelector('.form_type_edit');
let profileUserName = document.querySelector('.profile__username');
let profileUserJob = document.querySelector('.profile__userjob');
let nameInput = formElement.querySelector('.form__input_name_username');
let jobInput = formElement.querySelector('.form__input_name_profession');

function editForm() {
    editPopup.classList.add('popup_opened');
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

function editFormClose() {
    editPopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
	evt.preventDefault(); 
	
	profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;

    editFormClose();
}

editButton.addEventListener('click', editForm);
editCloseButton.addEventListener('click', editFormClose);
formElement.addEventListener('submit', formSubmitHandler);


