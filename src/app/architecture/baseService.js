"use strict";
const axios = require('axios');


class BaseService {

    queryThunt(action) {

        return (dispatch) => {
           
            dispatch({ type: action + "_LOADING" });
            
            return axios({
                method: 'get',
                url: `http://localhost:1337/${action}`
            })
                .then(response => {

                    dispatch({ type: action + "_SUCCESS", data: response.data, dto: model });

                })
                .catch(function (error) {
                    BaseService.prototype.errorHandling(error, dispatch, action, model);
                }).then(function () {

                
                });
        }
    }
    commandThunt(action, model = {}) {

        return (dispatch) => {
            
            dispatch({ type: action + "_LOADING" });
            return axios({
                method: 'POST',
                url: `http://localhost:1337/${action}`,
                data: model
            })
                .then(response => {
                    dispatch({
                        type: action + "_SUCCESS",
                        data: response.data,
                        dto: model
                    });
                })
                .catch(function (error) {
                    BaseService.prototype.errorHandling(error, dispatch, action, model);

                }).then(function () {
                    dispatch({ type: action + "_FINALLY" });
                });
        }
    }


    errorHandling(error, dispatch, action, model) {
        if (error.response) {
  
            dispatch({ type: NOTIFICATIONS_ACTIONS.SET_NOTIFICATION_GLOBAL, notification: exception });
        } else {
            
            dispatch({ type: NOTIFICATIONS_ACTIONS.SET_NOTIFICATION_GLOBAL, notification: exception.error });



            console.log('Error', error);
        }
    }

};

module.exports = { BaseService };