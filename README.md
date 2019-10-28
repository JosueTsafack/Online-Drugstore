# Swiftdrugs beta version

[![Build Status](https://travis-ci.org/gilbarbara/react-redux-saga-boilerplate.svg?branch=master)](https://travis-ci.org/gilbarbara/react-redux-saga-boilerplate) [![Dependencies](https://david-dm.org/gilbarbara/react-redux-saga-boilerplate.svg)](https://david-dm.org/gilbarbara/react-redux-saga-boilerplate) [![Maintainability](https://api.codeclimate.com/v1/badges/eb66aa0049fa03acbbf3/maintainability)](https://codeclimate.com/github/gilbarbara/react-redux-saga-boilerplate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/eb66aa0049fa03acbbf3/test_coverage)](https://codeclimate.com/github/gilbarbara/react-redux-saga-boilerplate/test_coverage)

[Demo](https://redux-saga.react-boilerplate.com/)

### Provides

- react ^16.x
- react-router 4.x
- react-helmet 5.x
- styled-components 4.x
- redux 4.x
- redux-saga 0.16.x
- redux-persist 5.x

### Development

- webpack-dev-server 3.x
- react-hot-loader 4.x
- redux-devtools (with browser plugin)

`navigate to the directory swiftdrugs\react-src and run`
`npm start`

### Building

- webpack 4.x
- babel 7.x

`npm run build`

### Code Quality

- eslint 5.x
- stylelint 9.x

`npm run lint` / `npm run lint:styles`

### Unit Testing

- jest 23.x
- enzyme 3.x

`npm test`

### End 2 End Testing

- cypress 3.0.x

`npm run test:e2e`

### Error while running npm start in react-src

when you clone the repository for the first time you have to uncomment the following lines of code(from 305 to 311) in react-src\node_modules\react-overlays\Dropdown.js
// var UncontrolledDropdown = (0, _uncontrollable.default)(Dropdown, {
//   show: 'onToggle'
// });
// UncontrolledDropdown.Menu = _DropdownMenu.default;
// UncontrolledDropdown.Toggle = _DropdownToggle.default;
// var _default = UncontrolledDropdown;
// exports.default = _default;
