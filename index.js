
function EditForm() {
    document.querySelector('.popup_type_edit').classList.toggle('popup_opened');
}

const editButton = document.querySelector('.button_type_edit');
editButton.addEventListener('click', EditForm);

const editCloseButton = document.querySelector('.popup_type_edit .button_type_close');
editCloseButton.addEventListener('click', EditForm);

const editpopup = document.querySelector('.popup_type_edit');
function closeeditPopupOnOverlayClick(event) {
    if  (event.target === event.currentTarget) {
        editpopup.classList.remove('popup_opened')
    }
}
editpopup.addEventListener('click', closeeditPopupOnOverlayClick)

const formElement = document.querySelector('.form_type_edit');

function formSubmitHandler(evt) {
	evt.preventDefault(); 
	let nameInput = formElement.querySelector('.username').value;
	let jobInput = formElement.querySelector('.profession').value;
	
    document.querySelector('.profile__username').textContent = nameInput;
    document.querySelector('.profile__userjob').textContent = jobInput;

}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', EditForm);


const elementLike = document.querySelectorAll('.element__like');

function Like() {
    this.classList.toggle('activated');
}


