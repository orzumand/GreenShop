import React, { Component } from 'react';
import { Title } from './style';
export default class GreenTitle extends Component {
  render() {
    const { color, children, bold, fontsize } = this.props;
    return (
      <Title fontsize={fontsize} bold={bold} color={color}>
        {children}
      </Title>
    );
  }
}
