import React, { Component } from 'react';

export default class FoodItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    return (
        <p>{this.props.foodItem}</p>
    )
    }
}