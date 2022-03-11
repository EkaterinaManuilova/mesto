class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
      }
    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
    updateAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
              })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .catch(console.log)
    }
}


export const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: 'acd61999-4052-4e2c-ac01-2d07086ee9a5',
    'Content-Type': 'application/json'
  }
});