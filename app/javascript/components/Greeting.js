import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'

const Greeting = () => {
    const dispatch = useDispatch();
    const message = useSelector((state)=> state.message);

    useEffect(() => {
        dispatch(fetchMessage());
    }, []);

    return (
        <div>
            <h1>{message.greeting}</h1>
        </div>
    )
}

export default Greeting;