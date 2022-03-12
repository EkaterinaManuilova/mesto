import './index.css';

import {Card} from  '../components/Card';
import {FormValidator} from '../components/FormValidator';
import {PopupWithForm} from '../components/PopupWithForm';
import {PopupWithImage} from '../components/PopupWithImage';
import {Section} from '../components/Section';
import {UserInfo} from '../components/UserInfo';
import {api} from '../components/Api.js';


import {editButton, nameInput,
    jobInput, addButton, profileAvatarButton,
    formValidators, validationProps} from '../utils/constants';

let userId

api.getProfile()
.then(res => {
    const data = {
        name: res.name,
        about: res.about,
        avatar: res.avatar
    }
    userInfo.setUserInfo(data)
    userInfo.setUserAvatar(data)
    userId = res._id
})

const userInfo = new UserInfo ('.profile__username', '.profile__job', '.profile__avatar-img');

const profileEditForm = new PopupWithForm ('.popup_type_edit', (inputValues) => {
    profileEditForm.renderLoading(true)
   const user = {name: inputValues.username, about:  inputValues.profession}
   api.editProfile(user.name, user.about)
   .then(() => {
    userInfo.setUserInfo(user)
    profileEditForm.close();
   })
   .finally(() => {
       profileEditForm.renderLoading(false)
   })
})

editButton.addEventListener('click', () => { 
    const info = userInfo.getUserInfo()
    nameInput.value = info.name
    jobInput.value = info.about
    profileEditForm.open()
    formValidators['editForm'].resetValidation()
})

profileEditForm.setEventListeners()

const avatarChangeForm = new PopupWithForm('.popup_type_avatar', (inputValues) => {
    avatarChangeForm.renderLoading(true)
    const data = {avatar:inputValues.avatar}
    api.updateAvatar(data.avatar)
    .then(() => {
        userInfo.setUserAvatar(data)
        avatarChangeForm.close()
    })
   .finally(() => {
    avatarChangeForm.renderLoading(false)
   })
})

profileAvatarButton.addEventListener('click', () => {
    avatarChangeForm.open()
    formValidators['avatarForm'].resetValidation()
})

avatarChangeForm.setEventListeners()

const imagePopup = new PopupWithImage ('.popup_type_image')

imagePopup.setEventListeners()

const createCard = (item) => {
    const card = new Card (
        item, 
        '.card-template', 
        () => {
            imagePopup.open(item.link, item.name)
        }, 
        (id) => {
            confirmDeleteForm.open()
            confirmDeleteForm.changeSubmitHandler(() => {
                api.deleteCard(id)
                .then(() => {
                    card.deleteCard()
                    confirmDeleteForm.close()
                })
            })
        },
        (id) => {
            if (card.isLiked()) {
                api.deleteLike(id)
            .then(res => {
                card.setLikes(res.likes)
            })
            } else {
                api.addLike(id)
                .then(res => {
                    card.setLikes(res.likes)
                })
            }           
        })
    return card.generateCard()
}

api.getInitialCards()
.then(cards =>  {
    cards.reverse().forEach(data => {
        const card = createCard(
            {
            name: data.name, 
            link: data.link,
            likes: data.likes,
            id: data._id,
            userId: userId,
            ownerId: data.owner._id
        })
        cardList.addItem(card)
    })
})

const cardList = new Section ({
    items: [],
    renderer: (cardItem) => {
        createCard(cardItem)
    }
}, '.elements')

const cardAddForm = new PopupWithForm ('.popup_type_add', (inputValues) => {
    cardAddForm.renderLoading(true)
   api.addCard(inputValues.name, inputValues.link)
   .then(res => {
       const data = {name: res.name, link: res.link, likes: res.likes, id: res._id, userId: userId, ownerId: res.owner._id}
        const card =  createCard(data)
        cardList.addItem(card)
        cardAddForm.close()
   })
   .finally(() => {
       cardAddForm.renderLoading(false)
   })
    });

addButton.addEventListener('click', () => {
        cardAddForm.open();
        formValidators['addForm'].resetValidation();
    });

cardAddForm.setEventListeners();

cardList.renderItems()

const confirmDeleteForm = new PopupWithForm('.popup_type_confirm-del')

confirmDeleteForm.setEventListeners()

const enableValidation = (validationProps) => {
    const formList = Array.from(document.querySelectorAll(validationProps.formSelector))
    formList.forEach((formElement) => {
      const validator = new FormValidator(validationProps, formElement)
      const formName = formElement.getAttribute('name')
  
      formValidators[formName] = validator
      validator.enableValidation()
    })
}
  
enableValidation(validationProps)