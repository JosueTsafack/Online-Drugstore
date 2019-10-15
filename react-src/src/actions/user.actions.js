import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { alertActions } from '../actions/alert.actions';
import { history } from '../_helpers/history';

export const userActions = {
    subscribe
};
  
function subscribe(user) {
    console.log('Tadoum il est entré!!!!!')
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
  
  