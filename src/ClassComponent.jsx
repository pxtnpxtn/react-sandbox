import React, { Component } from 'react'
import Whatever from './Whatever';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Paxton',
            age: 10
        }

        // Unnecessary when method is defined using arrow function.
        // this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        console.log('MOUNTED');
    }

    componentDidUpdate() {
        // HALP - How to detect what variable/state got updated?
        console.log('UPDATED');
    }

    componentWillUnmount() {
        console.log('UNMOUNTED');
    }

    changeName = () => {
        this.setState({name: 'Eddy', age: 30});
    }

    render() {
        const whatever = 'hiii'
            return (
            <div>
                {/* <button onClick={this.changeName}>CHANGE NAME</button> */}
                {this.state.name}
                {this.state.age} 
                <Whatever whatever={whatever} changeName={this.changeName} />
            </div>
        )
    }
}
