# Yahtzee Scoresheet

A simple Yahtzee score sheet built as an exercise to try out TypeScript with the React Hooks API. The production app is an installable PWA. The current game (players and their scores) as stored in local storage so the game survives across browsing sessions. The service worker ensures that the app still works while offline. I've deployed a production build to [Zeit Now](https://zeit.co/).

Live app: [https://yahtzeescores.now.sh/](https://yahtzeescores.now.sh/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

I added some dev dependencies to make these scripts cross-platform.

| Script       | Description                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| cra-build    | Default `build` script from `create-react-app`                                                          |
| build        | Full build with generated service worker. Use this for production build                                 |
| clean-cra-sw | Clean up `create-react-app` service worker files we won't be using                                      |
| eject        | Default `eject` script from `create-react-app`                                                          |
| gensw        | Generates custom service worker using `workbox-cli`. Customizations can be made to `src/sw-template.js` |
| serve        | Serves the production bundle from the `/build` directory using `serve`                                  |
| start        | Default `start` script from `create-react-app`. Used for development                                    |
| test         | Default `test` script from `create-react-app`. Prefect `watch` script                                   |
| watch        | Run app tests using jest's **watch** mode                                                               |

## Local development

Check out the repo and run `yarn start`

## Production build

Run `yarn build` to compile the app and generate a service worker. The compiled app will be ready to go in the `/build` directory.
