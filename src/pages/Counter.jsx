import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, doubleCounterState } from "@store/counterStore";


function Counter () {
    const [counter, setCounter] = useRecoilState(counterState);
    const doubleCounter = useRecoilValue(doubleCounterState);

    const onClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={onClick}>Click Me</button>
            <p>Current Counter Value is {counter}</p>
            <p>Double Counter Value is {doubleCounter}</p>
        </div>
    )
}

export default Counter;