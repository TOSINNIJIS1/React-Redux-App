import axios from 'axios';

export const Fetch_Start = "Fetch_Start";
export const Fetch_Success = 'Fetch_Success';
export const Fetch_Fail = 'Fetch_Fail';


export const fetch = () => dispatch => {
    dispatch({
        type: Fetch_Start
    });
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(res => {
        console.log(res.data.results)
        dispatch({
            type: Fetch_Success, payload: res.data.results
        })
    })
    .catch(err => {
        dispatch({
            type: Fetch_Fail, payload: err.data
        })
    })
}