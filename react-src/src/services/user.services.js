import config from 'config';
// import { authHeader } from '../_helpers';

export const userService = {
    subscribe
};

function subscribe(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    // return fetch(`${config.apiUrl}/subscribe`, requestOptions).then(handleResponse);
    // console.log(`${config.apiUrl}/products`, requestOptions);
    return fetch(`${config.apiUrl}/products`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    
    return response.text().then(text => {
        console.log(text);
        const data = text && JSON.parse(text);
        
        // console.log('data: ' + JSON.stringify(data));
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                console.log('response on the way back!')
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}