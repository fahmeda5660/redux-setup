import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../redux/features/counter/counterSlice'

const Counter = () => {
    // const count = useSelector((state) => state.counter.count);
    const {count} = useSelector((state) => state.counter);
    // console.log(count)
    const dispatch = useDispatch()
    return (
        <div>
            {/* increment function call korte hobe */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>
            <h2>{count}</h2>
            </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;