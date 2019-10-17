import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { alertActions } from '../actions/alert.actions';
import { history } from '../_helpers/history';

export const userActions = {
    subscribe
};
  
function subscribe(user) {
    userService.subscribe(user).then(
        success => { 
            console.log('Request sent')
            // dispatch(success());
            // history.push('/login');
            // dispatch(alertActions.success('Registration successful'));
        },
        error => {
            console.log('an error occured')
            // dispatch(failure(error.toString()));
            // dispatch(alertActions.error(error.toString()));
        }
    );
    return { type: userConstants.REGISTER_REQUEST, user };
}
  
  