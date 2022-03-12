export class Card {
    constructor(data, cardSelector, handleCardClick, handledDeleteClick, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handledDeleteClick = handledDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;
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
        this._cardLike = this._element.querySelector('.element__like');
        this._cardDelete = this._element.querySelector('.element__trash');
        
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
      
        this._cardLike.addEventListener('click', () => {
            this._handleLikeClick(this._id);
        });

        this._cardDelete .addEventListener('click', () => {
            this._handledDeleteClick(this._id);
        });
    }
    _likeCard() {
        this._element.querySelector('.element__like').classList.add('element__like_active');
    }
    _disLikeCard() {
        this._element.querySelector('.element__like').classList.remove('element__like_active');
    }
    isLiked() {
        const userHasLikeCard = this._likes.find(user => user._id === this._userId);
        return userHasLikeCard 
    }
    deleteCard() {
        this._element.remove();
        this._element = null;
    }
    setLikes(newLikes) {
        this._likes = newLikes;
        const likesCount = this._element.querySelector('.element__likes-count');
        likesCount.textContent = this._likes.length;
       
        if (this.isLiked()) {
            this._likeCard();
        } else {
            this._disLikeCard();
        }
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this.setLikes(this._likes);

        if(this._ownerId !== this._userId) {
            this._cardDelete.style.display = 'none';
        }
        return this._element;
    }
}