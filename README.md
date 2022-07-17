# Github Contributors

This project was bootstrapped with [Create React App]

Will run either at [GH-pages](https://wes992.github.io/github-contributors) or

If you want to run the app locally, you can start by cloning the repo.

You will need to do a `yarn` or `npm install` to install dependencies intitially.

In the project directory, you can run:

### `npm start`

or

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## AUTH

Again, while running locally;

App will run with public git rest API without Authorization;\
but you could possibly hit a rate limit. (It is something like 50/hour)

Since I made this pretty quickly, I took the simple approach for auth.\

I created a .env file at src level and added a REACT_APP_GH_TOKEN variable, which was a PAT to github.\
(i.e. = REACT_APP_GH_TOKEN=**PersonalAccessToken**)

If you are hitting a rate limit, I advise to either add this .env var or wait until it resets.

The API endpoints accept this auth config and ups the rate limit to like 5000/hour once you are sending authorized requests
