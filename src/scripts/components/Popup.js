export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupOnEscape);
    }
    close() {
        this._popup.classList.remove('popup_opened');

        document.removeEventListener('keydown', this._closePopupOnEscape);
    }
    _closePopupOnEscape = (evt) => {
        if (evt.key === 'Escape') {
          this._popup.close()
        }
      }
      setEventListeners() {
        this.popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this._popup.close();
            }
            if (evt.target.classList.contains('button_type_close')) {
                this._popup.close();
              }
        });
      }
}