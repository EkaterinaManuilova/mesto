export class UserInfo {
    constructor(userNameSelector, userJobSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }
    getUserInfo() {
        const info = {};
        info.name =  this._userName.textContent;
        info.job = this._userJob.textContent;
        return info;
    }
    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;
    }
}