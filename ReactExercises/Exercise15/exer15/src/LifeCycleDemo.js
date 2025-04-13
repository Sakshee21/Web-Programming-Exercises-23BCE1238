import React, { Component } from 'react';


class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }


  componentDidMount() {
    console.log('componentDidMount: Component mounted to the DOM');
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
    console.log('Previous State:', prevState.count);
    console.log('Current State:', this.state.count);
  }


  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed from the DOM');
  }


  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };


  render() {
    console.log('Render: Component rendering');
    return (
      <div style={{ border: '2px solid teal', padding: '20px', marginTop: '20px' }}>
        <h3>Lifecycle Demo Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

export default LifeCycleDemo;