import { observable, action, makeObservable } from 'mobx';

class AuthStore {
    isLoginFormVisible = false;
    isPasswordRecoveryVisible = false;
    constructor() {
        makeObservable(this, {

            isLoginFormVisible: observable,
            isPasswordRecoveryVisible: observable,
            toggleLoginForm: action,
            togglePasswordRecovery: action,
        })

    }
    toggleLoginForm = () => {
        this.isLoginFormVisible = !this.isLoginFormVisible;
      };
      togglePasswordRecovery = () => {
        this.isPasswordRecoveryVisible = !this.isPasswordRecoveryVisible;
      };

}
const authStore = new AuthStore();
export default authStore;
