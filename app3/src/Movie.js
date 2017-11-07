import React, { Component } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p>{this.props.movie}</p>
    )  
  }
} 