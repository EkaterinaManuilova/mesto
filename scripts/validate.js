const showInputError = (formElement, inputElement, errorMessage, props) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(props.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(props.errorClass);
  }
  
  const hideInputError = (formElement, inputElement, props) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(props.inputErrorClass);
    errorElement.classList.remove(props.errorClass);
    errorElement.textContent = '';
  }

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  
  const checkInputValidity = (formElement, inputElement, props) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, props);
    } else {
      hideInputError(formElement, inputElement, props);
    }
  }
  
  const setEventListeners = (formElement,  props) => {
    const inputs = Array.from(formElement.querySelectorAll(props.inputSelector));
    const buttonElement = formElement.querySelector(props.submitButtonSelector);

    toggleButtonState(inputs, buttonElement, props.inactiveButtonClass);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        toggleButtonState(inputs, buttonElement, props.inactiveButtonClass);
        checkInputValidity(formElement, inputElement, props);
      });
    });
  }
  
  const enableValidation = (props) => {
    const forms = Array.from(document.querySelectorAll(props.formSelector));
    forms.forEach((formElement) => {
      setEventListeners(formElement, props);
    });
  }

  enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_name_error',
    errorClass: 'form__input-error_active'
  });