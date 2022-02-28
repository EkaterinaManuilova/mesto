export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._cardImage = this._element.querySelector('.element__image');
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
      
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeCard(evt);
        });

        this._element.querySelector('.element__trash').addEventListener('click', (evt) => {
            this._deleteCard();
        });
    }

    _likeCard(evt) {
        if (evt.target.classList.contains('element__like')) {
            evt.target.classList.toggle('element__like_active');
        }
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        
        return this._element;
    }
}