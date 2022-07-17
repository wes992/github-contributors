# Github Contributors

This project was bootstrapped with [Create React App]

In the project directory, you can run:

### `npm start`

or

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## AUTH

App will run with public git rest API without Authorization;\
but you will hit a rate limit. (It is something like 50/hour)

Since I made this pretty quickly, I took the simple approach for auth.\
I created an 'auth.js' folder at the root level under src and exported an auth constant from that folder.\
(i.e -- export const auth = {username: <'username'>, password: <'password or PAT'>}).

If you are hitting a rate limit, I advise to either add this file/export or wait until it resets.

The API endpoints accept this auth object and ups the rate limit to like 5000/hour once you are sending authorized requests
