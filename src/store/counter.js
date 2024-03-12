import { atom, selector } from "recoil";

const counterState = atom({
    key: "counterStateKey",
    value: 0
});

const doubleCounterState = selector({
    key: "doubleCounterKey",
    get: ({ get }) => {
        const count = get(counterState);
        return count * 2;
    }
})

export { counterState, doubleCounterState };