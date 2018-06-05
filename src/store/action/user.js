import axios from '../../axiosInst';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, 14400000); //14400000
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/user/login',authData)
            .then(res => {
                if(res.data){
                    localStorage.setItem('token',res.data.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
                    dispatch(authSuccess(res.data.token));
                    dispatch(checkAuthTimeout());
                }
                else{
                    throw res.data.msg;
                }
            })
            .catch(err => {
                dispatch(authFail(err.response.data));
            });
    }
}