const editButton = document.querySelector('.button_type_edit');
const editPopup = document.querySelector('.popup_type_edit');
const editCloseButton = editPopup.querySelector('.button_type_close');
const profileForm = document.querySelector('.form_type_edit');
const profileUserName = document.querySelector('.profile__username');
const profileUserJob = document.querySelector('.profile__userjob');
const nameInput = profileForm.querySelector('.form__input_name_username');
const jobInput = profileForm.querySelector('.form__input_name_profession');

const cardsContainer = document.querySelector('.elements');
const addButton = document.querySelector('.button_type_add');
const addPopup = document.querySelector('.popup_type_add');
const addCloseButton = addPopup.querySelector('.button_type_close');
const addForm = document.querySelector('.form_type_add');
const addFormTitle = addForm.querySelector('.form__input_name_placetitle')
const addFormLink = addForm.querySelector('.form__input_name_placeurl')

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

const openPopup = popup =>{
    popup.classList.add('popup_opened');
}

const closePopup = popup => {
    popup.classList.remove('popup_opened');
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
    const cardElementLike = cardElement.querySelector('.element__like');
    const cardElementTrash = cardElement.querySelector('.element__trash');

    cardElementTitle.textContent = nameValue;
    cardElementImage.setAttribute('src', linkValue);
    cardElementImage.setAttribute('alt', nameValue);

    cardElementImage.addEventListener('click', () => {
        openPopup(imagePopup);
        linkImage.setAttribute('src', linkValue);
        linkImage.setAttribute('alt', nameValue)
        titleImage.textContent = nameValue;
    });

    cardElementLike.addEventListener('click', event => {
        event.target.classList.toggle('element__like_active');
    });

    cardElementTrash.addEventListener('click',  () => {
        cardElement.remove();
    });

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

    addFormTitle.value = "";
    addFormLink.value = "";

    addCard(nameNewCard, linkNewCard);

    closePopup(addPopup);
}

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
});

addCloseButton.addEventListener('click', () => {
    closePopup(addPopup);
});

addForm.addEventListener('submit', addNewCard);

imageCloseButton.addEventListener('click', () => {
    closePopup(imagePopup);
});


