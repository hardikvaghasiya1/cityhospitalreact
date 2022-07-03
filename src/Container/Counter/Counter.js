import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/Action/Counter.action'

function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const handleincrement = () => {
        dispatch(incrementCounter())
    }
    const handledecrement = () => {
        dispatch(decrementCounter())
    }
    return (
        <div>
            <div className='d-flex justify-content-center py-5'>
                <button className='px-5' onClick={() => handleincrement()}>+</button>
                <p className='p-4 fs-1'>{counter.counter}</p>
                <button className='px-5' onClick={() => handledecrement()}>-</button>
            </div>
        </div>
    );
}

export default Counter;