import React from 'react';

export default class TryingLifecycle extends React.Component{
    
    constructor(props)
    {
        super(props)
        console.log("I am inside of the constructor")
    }
    componentDidMount() {
        console.log("I am inside of the component did mount")
    }
    render(){
        console.log("I am inside of the render")
        return <h1>Hello World</h1>
    }
}