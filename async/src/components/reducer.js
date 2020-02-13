import { Fetch_Start, Fetch_Success, Fetch_Fail } from './action';


const initial = {
    rick: [],
    error: '',
    isFetching: false
}

const Reducer = (state = initial, action) => {
    switch(action.type) {
        case Fetch_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Fetch_Success: return {
            ...state, isFetching: false, rick: action.payload
        }
        case Fetch_Fail: return {
            ...state, isFetching: false, error: action.payload
        };
        default: return state
    }
}

export default Reducer;