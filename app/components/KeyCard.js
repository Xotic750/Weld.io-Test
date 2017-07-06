import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class KeyCard extends Component {
  static propTypes = {
    property: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children, property } = this.props;

    return (
      <Card>
        <CardHeader
          title={property}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {children}
        </CardText>
      </Card>
    );
  }
}
