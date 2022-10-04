# Create React App, with Vite

<div>
<img src="public/cra+vite.png" alt="Screenshot" width=750/>
</div>

This project is bootstrapped with Create React App v5, with a couple of minor changes to allow the use of Vite for the local development server.

The Vite configuration supports usage of `process.env` and environment variables prefixed with `REACT_APP_`, so both vite and create-react-app servers can be used on the same underlying codebase.

Note that there are two `index.html` files in the project:

- `/index.html` - this is a stripped down file which is used only by the Vite server
- `/public/index.html` - this is the standard file used by the CRA server and is the page which will be included in the production build

Other aspects of the project are the same as standard CRA. Jest is used for testing, and Babel/Webpack for production bundling (though you can easily run `npx vite build` to generate a Rollup-bundled version of the app -- the Vite build will be found in the `/dist` folder).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode, using `vite` as the local server\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the browser window (via vite-eslint-plugin).

### `yarn start`

Runs the app in the development mode, using the standard dev server provided with `create-react-app`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Learn about Vite in the [Getting Started Guide](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
