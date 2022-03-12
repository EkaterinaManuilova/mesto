import Popup from './Popup';
export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._btn = this._form.querySelector('.button_type_submit');
        this._btnText = this._btn.textContent;
    }
    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] =input.value;
        });
        return this._inputValues;
    }
    changeSubmitHandler(newSubmitHandler) {
        this._handleFormSubmit = newSubmitHandler;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }
    renderLoading(isLoading) {
        if (isLoading) {
            this._btn.textContent = 'Сохранение...';
        } else {
            this._btn.textContent = this._btnText;
        }
    }
    close()  {
        this._form.reset();
        super.close();
    }
}