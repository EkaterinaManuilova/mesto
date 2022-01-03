const editButton = document.querySelector('.button_type_edit');
const editPopup = document.querySelector('.popup_type_edit');
const editCloseButton = editPopup.querySelector('.button_type_close');
const profileForm = document.querySelector('.form_type_edit');
const profileUserName = document.querySelector('.profile__username');
const profileUserJob = document.querySelector('.profile__userjob');
const nameInput = profileForm.querySelector('.form__input_name_username');
const jobInput = profileForm.querySelector('.form__input_name_profession');
const editSubmitButton = profileForm.querySelector('.button_type_submit');

const cardsContainer = document.querySelector('.elements');
const addButton = document.querySelector('.button_type_add');
const addPopup = document.querySelector('.popup_type_add');
const addCloseButton = addPopup.querySelector('.button_type_close');
const addForm = document.querySelector('.form_type_add');
const addFormTitle = addForm.querySelector('.form__input_name_placetitle');
const addFormLink = addForm.querySelector('.form__input_name_placeurl');
const addSubmitButton = addForm.querySelector('.button_type_submit');

const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopup.querySelector('.button_type_close');
const linkImage = imagePopup.querySelector('.popup__image-link');
const titleImage = imagePopup.querySelector('.popup__image-title');



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

const openPopup = popup => {
    popup.classList.add('popup_opened');

    popup.addEventListener('click', (event) => {
        if  (event.target === event.currentTarget) {
            popup.classList.remove('popup_opened');
        }
    });

    document.addEventListener('keydown', (event) => {
        if  (event.key === 'Escape') {
                popup.classList.remove('popup_opened');
        }
        });
}

const closePopup = popup => {
    popup.classList.remove('popup_opened');

    popup.removeEventListener('click', (event) => {
        if  (event.target === event.currentTarget) {
            popup.classList.remove('popup_opened');
       }
});

    document.removeEventListener('keyup', (event) => {
        if  (event.key === 'Escape') {
            popup.classList.remove('popup_opened');
       }
    });
}

const openEditPopup = () =>  {
    openPopup(editPopup);

    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

const handleProfileFormSubmit = evt => {
	evt.preventDefault(); 
	
	profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;

   closePopup(editPopup);
}

const createCard = (nameValue, linkValue) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementTitle = cardElement.querySelector('.element__title');
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementTitle.textContent = nameValue;
    cardElementImage.setAttribute('src', linkValue);
    cardElementImage.setAttribute('alt', nameValue);

    return cardElement;
}

const addCard = (name, link) => {
    const cardElement = createCard(name, link);
    cardsContainer.prepend(cardElement);
}

const addNewCard = event => {
    event.preventDefault();

    const nameNewCard = addFormTitle.value;
    const linkNewCard = addFormLink.value;

    addForm.reset();

    addCard(nameNewCard, linkNewCard);

    closePopup(addPopup);
}

cardsContainer.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('element__image')) {
        openPopup(imagePopup);
        linkImage.setAttribute('src', evt.target.getAttribute('src'));
        linkImage.setAttribute('alt', evt.target.getAttribute('alt'));
        titleImage.textContent = evt.target.getAttribute('alt'); 
    }
});

cardsContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle('element__like_active');
    }
});

cardsContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('element__trash')) {
        evt.target.closest('li').remove();
    }
});

initialCards.reverse().forEach((element) => {
    addCard(element.name, element.link);
});

editButton.addEventListener('click', openEditPopup);

editCloseButton.addEventListener('click', () => {
    closePopup(editPopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', () => {
    openPopup(addPopup);
    addSubmitButton.setAttribute('disabled', true);
    addSubmitButton.classList.add('button_disabled');
});

addCloseButton.addEventListener('click', () => {
    closePopup(addPopup);
});

addForm.addEventListener('submit', addNewCard);

imageCloseButton.addEventListener('click', () => {
    closePopup(imagePopup);
});