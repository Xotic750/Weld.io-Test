# Symbols and Elements, Example Slug Editor

[![Travis](https://img.shields.io/travis/Xotic750/Weld.io-Test/master.svg?style=flat-square)](https://travis-ci.org/Xotic750/Weld.io-Test) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Includes: 

- [x] React v15
- [x] ECMAScript 6 and JSX support
- [x] React Router v4
- [x] Component testing using [Enzyme](https://github.com/airbnb/enzyme)
- [x] Latest Webpack and Webpack Dev Server v2
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] SASS support
- [x] Separate CSS stylesheets generation
- [x] Automatic HTML generation
- [x] Production Config
- [x] Custom Babel Preset with Exponentiation Operator, Class Properties, Rest/Spread operator support 
- [x] ES6 Linting
- [x] Export Separate Vendor Files
- [X] Redux

## Starting the dev server

Make sure you have Node.js installed.

1. `git clone https://github.com/Xotic750/Weld.io-Test.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm run lint-fix` - execute an eslint check and automated fix
- `npm test` - run all tests

## Vendor Exporting

You can export specific vendors in separate files and load them. All vendors should be included in `app/vendors` and will be exported in a `vendors` folder under `dist`. The main idea is to serve independent JavaScript and CSS libraries, though currently all file formats are supported.

! Don't forget to add the vendors in `app/index.html`.

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.

## Licence

_Weld.io-Test_ is available under MIT.
