export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this.nameElement = document.querySelector(nameSelector);
    this.jobElement = document.querySelector(jobSelector);
    this.avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
      avatar: this.avatarElement.src,
    };
  }
  setUserInfo(name, job, avatar, _id) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = job;
  }
  setUserAvatar(avatar) {
    this.avatarElement.src = avatar;
    this.avatarElement.alt = `Avatar de ${this.nameElement.textContent}`;
  }
}
