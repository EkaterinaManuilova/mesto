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
    setUserInfo(nameNew, jobNew) {
        this._userName.textContent = nameNew;
        this._userJob.textContent = jobNew;
    }
}