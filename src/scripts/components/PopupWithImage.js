import Popup from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imageLink = this._popup.querySelector('.popup__image-link');
        this._imageTitle = this._popup.querySelector('.popup__image-title');
    }
    open(link, title){
        this._imageLink.src = link;
        this._imageLink.alt = title;
        this._imageTitle.textContent = title;
        super.open();
    }
}