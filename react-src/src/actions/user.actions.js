import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { alertActions } from './alert.actions';
import { history } from '../_helpers/history';

export const userActions = {
  subscribe,
};

function subscribe(user) {
  return userService.subscribe(user).then(
    response =>
      // console.log("toto est la")
      // console.log (response)
      response,
  );
  // .then(response => {
  //     // success => {
  //     //     console.log("response");
  //     //     // dispatch(success());
  //     //     // history.push('/login');
  //     //     // dispatch(alertActions.success('Registration successful'));
  //     //     $('.error-group').html(response.message);
  //     // },
  //     // error => {
  //     //     alert('Désolé! une érreur s\'est produite.');
  //     //     console.log('an error occured');
  //     //     // dispatch(failure(error.toString()));
  //     //     // dispatch(alertActions.error(error.toString()));
  //     // }
  //     return response.json();
  // });
  // return { type: userConstants.REGISTER_REQUEST, user };
}
