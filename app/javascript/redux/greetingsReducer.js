import axios from 'axios';

const GET_MESSAGE = 'greetings/messages'

const getMessage = (message) => ({
    type: GET_MESSAGE,
    payload: message
});

const fetchMessage = async() => {
    return axios.get('api/v1/messages').then((response)=> response.data)
};

export default function greetingsReducer(state = [], action ={}) {
    switch(action.type){
        case GET_MESSAGE:
            return action.payload
        default:
            return state;
    }
}

export { getMessage, fetchMessage };