export class FormValidator {
    constructor(props, formElement) {
        this._formElement = formElement;
        this._props = props;
        this._inputs = Array.from(this._formElement.querySelectorAll(this._props.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._props.submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._props.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._props.errorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._props.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._props.errorClass);
    }

    _hasInvalidInput = () => {
        return this._inputs.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
          } else {
            this._hideInputError(inputElement);
          }
    }

    _disableSubmitButton = () => {
        this._buttonElement.classList.add(this._props.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }

    _enableSubmitButton = () => {
        this._buttonElement.classList.remove(this._props.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
          } else {
            this._enableSubmitButton();
            this._buttonElement.classList.remove(this._props.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
          }
    }

    _setEventListeners() {
        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
              });
            });
        }

    enableValidation() {
        this._formElement.addEventListener('submit',(evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }  
}