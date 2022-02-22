import Popup from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
    }
    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] =input.value;
        });
        return this._inputValues;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }
    close()  {
        this._form.reset();
        super.close();
    }
}