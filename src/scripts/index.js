import {Card} from  './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {PopupWithImage} from './components/PopupWithImage.js';

import {editButton, editPopup, profileForm, profileUserName, profileUserJob, nameInput,
    jobInput, cardsContainer, addButton, addPopup, addForm, addFormTitle, addFormLink,
    imagePopup, linkImage, titleImage, popups, formValidators, initialCards, validationProps} from './utils/constants.js';

const closePopupOnEscape = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

const openPopup = popup => {
    popup.classList.add('popup_opened');

    document.addEventListener('keydown', closePopupOnEscape);
}

const closePopup = popup => {
    popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closePopupOnEscape);
}

const openEditPopup = () =>  {
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;

    openPopup(editPopup);
}

const handleProfileFormSubmit = evt => {
	evt.preventDefault();
	
	profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;

   closePopup(editPopup);
}

const handleCardClick = (name, link) => {
    const imagePrewiew = new PopupWithImage ('.popup_type_image');
    imagePrewiew.setEventListeners();
    imagePrewiew.open(link, name);
    // linkImage.setAttribute('src', link);
    // linkImage.setAttribute('alt', name);
    // titleImage.textContent = name;

    // openPopup(imagePopup);
}

const createCard = (name, link) => {
    const card = new Card({name, link}, '.card-template', handleCardClick);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
}
  
const addNewCard = event => {
    event.preventDefault();

    const nameNewCard = addFormTitle.value;
    const linkNewCard = addFormLink.value;

    createCard(nameNewCard, linkNewCard);
    
    closePopup(addPopup);
    //addForm.reset();  
    formValidators['addForm'].resetValidation();
}

initialCards.reverse().forEach((item) => {
    createCard(item.name, item.link);
});

editButton.addEventListener('click', openEditPopup);

profileForm.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', () => {
    addForm.reset();
    openPopup(addPopup);
    formValidators['addForm'].resetValidation();
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('button_type_close')) {
            closePopup(popup);
          }
    });
}) ;

addForm.addEventListener('submit', addNewCard);

const enableValidation = (validationProps) => {
    const formList = Array.from(document.querySelectorAll(validationProps.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(validationProps, formElement);
      const formName = formElement.getAttribute('name');
  
      formValidators[formName] = validator;
      validator.enableValidation();
    });
}
  
enableValidation(validationProps);