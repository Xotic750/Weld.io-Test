import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class App extends Component {
  static propTypes = {
    currentValue: PropTypes.string.isRequired,
    oid: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    stateKey: PropTypes.string.isRequired,
  };

  onChangeHandler(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { currentValue, oid, stateKey } = this.props;

    return (
      <Card>
        <CardHeader
          title="oid"
          subtitle={oid}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <TextField
            id={stateKey}
            value={currentValue}
            onChange={event => this.onChangeHandler(event)}
          />
        </CardText>
      </Card>
    );
  }
}
