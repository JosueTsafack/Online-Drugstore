import config from 'config';
// import { authHeader } from '../_helpers';

export const userService = {
  subscribe,
};

function subscribe(user) {
  if (Object.keys(user).length == 5) {
    // normal user
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    return fetch(`${config.apiUrl}/subscribe/user`, requestOptions).then(handleResponse);
  }

  // pharmacy
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch(`${config.apiUrl}/subscribe/pharmacy`, requestOptions).then(handleResponse);
  // return fetch(`${config.apiUrl}/products`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    // console.log('data: ' + JSON.stringify(data));
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log('response on the way back!');
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
