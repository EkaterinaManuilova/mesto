export const editButton = document.querySelector('.button_type_edit');

export const nameInput = document.querySelector('.form__input_name_username');
export const jobInput = document.querySelector('.form__input_name_profession');

export const cardsContainer = document.querySelector('.elements');
export const addButton = document.querySelector('.button_type_add');

export const addFormTitle = document.querySelector('.form__input_name_placetitle');
export const addFormLink = document.querySelector('.form__input_name_placeurl');

export const linkImage = document.querySelector('.popup__image-link');
export const titleImage = document.querySelector('.popup__image-title');

export const formValidators = {};

export const initialCards = [
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

  export const validationProps = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_name_error',
    errorClass: 'form__input-error_active'
}