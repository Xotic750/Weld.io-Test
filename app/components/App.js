import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import isUndefined from 'lodash/isUndefined';
import isString from 'lodash/isString';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import symbolsAndElements from '../symbolsAndElements.json';
import KeyCard from './KeyCard';
import SlugCard from './SlugCard';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackBar: {
        message: '',
        open: false,
      },
    };
  }

  onChangeHandler(stateKey, targetValue) {
    this.setState({ [stateKey]: targetValue });
  }

  onRequestCloseSnackBarHandler() {
    const snackBarObj = {
      message: '',
      open: false,
    };

    this.setState({ snackBar: snackBarObj });
  }

  onSaveHandler(event) {
    // Prevent onRequestCloseSnackBarHandler
    event.preventDefault();

    const snackBarObj = {
      message: 'unchanged',
      open: true,
    };

    Object.keys(this.state).some((stateKey) => {
      const stateValue = this.state[stateKey];
      // Ignore snackBar state or any other non-string
      if (isString(stateValue) === false) {
        return false;
      }

      const [property, oid, subProperty] = stateKey.split('.');
      const record = symbolsAndElements[property];
      if (isUndefined(record)) {
        snackBarObj.message = 'error';
        this.setState({ snackBar: snackBarObj });
        throw new Error('Dope! Did not find a record, kick the dev! :)');
      }

      const item = record.find(obj => obj._id.$oid === oid);
      if (isUndefined(item)) {
        snackBarObj.message = 'error';
        this.setState({ snackBar: snackBarObj });
        throw new Error('Dope! Did not find an iten, kick the dev! :)');
      }

      item[subProperty] = stateValue;
      delete this.state[stateKey];
      snackBarObj.message = 'updated';

      return false;
    });

    console.info(symbolsAndElements);
    this.setState({ snackBar: snackBarObj });
  }

  render() {
    const keyCards = Object.keys(symbolsAndElements).map((property) => {
      const arr = symbolsAndElements[property];
      const slugCards = arr.map((obj) => {
        const oid = obj._id.$oid;
        const stateKey = `${property}.${oid}.slug`;
        const stateValue = this.state[stateKey];
        const currentValue = isUndefined(stateValue) === false ? stateValue : obj.slug;
        return (
          <SlugCard
            key={oid}
            oid={oid}
            stateKey={stateKey}
            currentValue={currentValue}
            onChange={targetValue => this.onChangeHandler(stateKey, targetValue)}
          />
        );
      });

      return (
        <KeyCard
          key={property}
          property={property}
        >
          {slugCards}
        </KeyCard>
      );
    });

    const {
      message,
      open,
    } = this.state.snackBar;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Symbols and Elements, Example Slug Editor"
            showMenuIconButton={false}
            iconElementRight={<FlatButton label="Save" />}
            onRightIconButtonTouchTap={event => this.onSaveHandler(event)}
          />
          {keyCards}
          <Snackbar
            open={open}
            message={message}
            autoHideDuration={4000}
            onRequestClose={() => this.onRequestCloseSnackBarHandler()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
