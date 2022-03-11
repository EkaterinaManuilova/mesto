export class UserInfo {
    constructor(userNameSelector, userJobSelector, userAvatarSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
        this._avatar = document.querySelector(userAvatarSelector);
    }
    getUserInfo() {
        const info = {};
        info.name =  this._userName.textContent;
        info.about = this._userJob.textContent;
        return info;
    }
    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.about;
        // this._avatar.src = data.avatar;
        // this._avatar.alt = 'новый аватар'
    }
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
        this._avatar.alt = 'Мой новый аватар'
    }
}