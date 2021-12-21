const editButton = document.querySelector('.button_type_edit');
const editPopup = document.querySelector('.popup_type_edit');
const editCloseButton = editPopup.querySelector('.button_type_close');
const formElement = document.querySelector('.form_type_edit');
let profileUserName = document.querySelector('.profile__username');
let profileUserJob = document.querySelector('.profile__userjob');
let nameInput = formElement.querySelector('.form__input_name_username');
let jobInput = formElement.querySelector('.form__input_name_profession');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


const editForm = () =>  {
    editPopup.classList.add('popup_opened');
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

const editFormClose = () => {
    editPopup.classList.remove('popup_opened');
}

const formSubmitHandler = evt => {
	evt.preventDefault(); 
	
	profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;

    editFormClose();
}

function addCard(nameValue, linkValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementTitle = cardElement.querySelector('.element__title');
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardElementLike = cardElement.querySelector('.element__like');
    const cardElementTrash = cardElement.querySelector('.element__trash');

    cardElementTitle.textContent = nameValue;
    cardElementImage.textContent = linkValue;
    cardElementImage.setAttribute('src', linkValue);
    cardElementImage.setAttribute('alt', nameValue);

    cardElement.addEventListener('click', () =>{
        imagePopup.classList.add('popup_opened');
        linkImage.setAttribute('src', linkValue);
        titleImage.textContent = nameValue;
    });

    cardElementLike.addEventListener('click', event => {
        event.target.classList.toggle('element__like_active');
    });

    cardElementTrash.addEventListener('click',  () => {
        cardElementTrash.parentElement.remove();
    });

    cardsContainer.prepend(cardElement);
}

initialCards.forEach(function(element){
    addCard(element.name, element.link);
});

editButton.addEventListener('click', editForm);
editCloseButton.addEventListener('click', editFormClose);
formElement.addEventListener('submit', formSubmitHandler);


