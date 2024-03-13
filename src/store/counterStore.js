import { atom, selector } from "recoil";
import { userState } from "./authStore";

const counterState = atom({
    key: "userStateKey",
    default: {
        isLoggedIn: false,
        userEmail: "",
        firstName: "",
        lastName: ""
    }
});

const getFullName = selector({
    key: "getFullNameKey",
    get: ({ get }) => {
        const user = get(userState);

        let initials = "";
        user.firstName && (initials += user.firstName[0]);
        user.lastName && (initials += user.lastName[0]);

        return initials;
    }
})

// const doubleCounterState = selector({
//     key: "doubleCounterKey",
//     get: ({ get }) => {
//         const count = get(counterState);
//         return count * 2;
//     }})

export { counterState, getFullName };