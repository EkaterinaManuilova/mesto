import './index.css';

import {Card} from  '../components/Card';
import {FormValidator} from '../components/FormValidator';
import {PopupWithForm} from '../components/PopupWithForm';
import {PopupWithImage} from '../components/PopupWithImage';
import {Section} from '../components/Section';
import {UserInfo} from '../components/UserInfo';


import {editButton, nameInput,
    jobInput, addButton, profileAvatarButton, avatarImage,
    formValidators, initialCards, validationProps} from '../utils/constants';

const imagePopup = new PopupWithImage ('.popup_type_image');

const handleCardClick = (name, link) => {
    imagePopup.open(link, name);
}

imagePopup.setEventListeners();

const createCard = (item) => {
    const card = new Card (item, '.card-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
}

const cardList = new Section ({
    items: initialCards.reverse(),
    renderer: (cardItem) => {
        createCard(cardItem);
    }
}, '.elements');

cardList.renderItems();

const cardAddForm = new PopupWithForm ('.popup_type_add', (inputValues) => {
   const data = {name:inputValues.name, link:inputValues.link }
    createCard(data);
    cardAddForm.close();
    });

addButton.addEventListener('click', () => {
        cardAddForm.open();
        formValidators['addForm'].resetValidation();
    });

cardAddForm.setEventListeners();

const userInfo = new UserInfo ('.profile__username', '.profile__job');

const profileEditForm = new PopupWithForm ('.popup_type_edit', (inputValues) => {
   const user = {name: inputValues.username, job:  inputValues.profession}
    userInfo.setUserInfo(user);
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

const avatarChangeForm = new PopupWithForm('.popup_type_avatar', (inputValues) => {
    avatarImage.src = inputValues.avatar;
    avatarImage.alt = 'Ваш новый аватар';
    avatarChangeForm.close();
});

profileAvatarButton.addEventListener('click', () => {
    avatarChangeForm.open();
    formValidators['avatarForm'].resetValidation();
});

avatarChangeForm.setEventListeners();

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