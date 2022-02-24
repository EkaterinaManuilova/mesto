
import {Card} from  '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';


import {editButton, nameInput,
    jobInput, addButton,addFormTitle, addFormLink,
    formValidators, initialCards, validationProps} from '../utils/constants.js';

const handleCardClick = (name, link) => {
    const imagePrewiew = new PopupWithImage ('.popup_type_image');
    imagePrewiew.setEventListeners();
    imagePrewiew.open(link, name);
}

const cardList = new Section ({
    items: initialCards.reverse(),
    renderer: (cardItem) => {
        const card = new Card (cardItem, '.card-template', handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
}, '.elements');

cardList.renderItems();

const cardAddForm = new PopupWithForm ('.popup_type_add', () => {
   const inputValues = {name: addFormTitle.value, link: addFormLink.value }
   
        const newCard = new Card (inputValues, '.card-template', handleCardClick);
        const newCardElement = newCard.generateCard();
        cardList.addItem(newCardElement);  
        cardAddForm.close();      
    });

addButton.addEventListener('click', () => {
        cardAddForm.open();
        formValidators['addForm'].resetValidation();
    });

cardAddForm.setEventListeners();

const userInfo = new UserInfo ('.profile__username', '.profile__userjob');

const profileEditForm = new PopupWithForm ('.popup_type_edit', () => {
    userInfo.setUserInfo(nameInput.value, jobInput.value);
    profileEditForm.close();
});

editButton.addEventListener('click', () => { 
    const info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.job;
    profileEditForm.open();
    formValidators['editForm'].resetValidation();
});

profileEditForm.setEventListeners();

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