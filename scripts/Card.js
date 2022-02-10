import {imagePopup, imageCloseButton, linkImage, titleImage, openPopup,  closePopup} from './index.js';

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
       return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openPrewiewCard();
        });
        imageCloseButton.addEventListener('click', () => {
            this._closePrewiewCard();
        });
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeCard(evt);
        });
        this._element.querySelector('.element__trash').addEventListener('click', (evt) => {
            this._trashCard(evt);
        });
    }

    _openPrewiewCard() {
        linkImage.src = this._link;
        linkImage.alt = this._name;
        titleImage.textContent = this._name;
        openPopup(imagePopup);
    }

    _closePrewiewCard()  {
        closePopup(imagePopup);
    }

    _likeCard(evt) {
        if (evt.target.classList.contains('element__like')) {
            evt.target.classList.toggle('element__like_active');
        }
    }

    _trashCard(evt) {
        if (evt.target.classList.contains('element__trash')) {
            evt.target.closest('li').remove();
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;
        
        return this._element;
    }
}