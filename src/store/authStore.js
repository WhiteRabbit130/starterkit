import { atom } from "recoil";

const userState = atom({
    key: "userStateKey",
    value: {
        isLoggedIn: false,
        userEmail: "",
        userName: "",
    }
});

export { userState };