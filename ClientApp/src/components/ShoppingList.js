import React, { Component } from 'react';

export class ShoppingList extends Component {
    displayName = ShoppingList.name

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>

                <p>This is a simple example of a React component.</p>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>Milk</tr>
                        <tr>Eggs</tr>
                        <tr>Bread</tr>
                        <tr>Tostino's Pizza Rolls</tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
